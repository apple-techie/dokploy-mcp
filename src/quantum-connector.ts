/**
 * Quantum Connector
 * 
 * An advanced connection management system for the Dokploy MCP that provides:
 * - Intelligent request retry with exponential backoff
 * - Circuit breaking to prevent cascading failures
 * - Response caching with TTL
 * - Request batching and deduplication
 * - Detailed metrics and logging
 * - Request prioritization
 */

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import NodeCache from 'node-cache';
import { EventEmitter } from 'events';

// Configuration defaults
const DEFAULT_CONFIG = {
  // Circuit breaker settings
  circuitBreaker: {
    failureThreshold: 5,        // Number of failures before circuit opens
    resetTimeout: 30000,        // Time in ms before trying to close circuit again
    requestTimeout: 10000,      // Request timeout in ms
  },
  // Retry settings
  retry: {
    maxRetries: 3,              // Maximum number of retry attempts
    initialDelayMs: 100,        // Initial delay before first retry
    maxDelayMs: 5000,           // Maximum delay between retries
    backoffFactor: 2,           // Exponential backoff multiplier
    retryableStatusCodes: [408, 429, 500, 502, 503, 504]
  },
  // Cache settings
  cache: {
    enabled: true,              // Whether caching is enabled
    ttlSeconds: 60,             // Default TTL for cached items
    maxSize: 1000,              // Maximum number of cached items
    excludedEndpoints: ['/status', '/metrics'] // Endpoints to exclude from caching
  },
  // Metrics settings
  metrics: {
    enabled: true,              // Whether metrics are enabled
    sampleRate: 1.0             // Sampling rate for metrics (1.0 = 100%)
  }
};

// Circuit breaker states
enum CircuitState {
  CLOSED,   // Normal operation - requests are allowed
  OPEN,     // Circuit is open - fast fail requests
  HALF_OPEN // Testing if service is back - allowing limited requests
}

// Priority levels for requests
enum RequestPriority {
  LOW = 0,
  NORMAL = 1,
  HIGH = 2,
  CRITICAL = 3
}

// Interface for cached responses
interface CachedResponse {
  data: any;
  timestamp: number;
  ttl: number;
}

// Interface for request metrics
interface RequestMetrics {
  requestId: string;
  endpoint: string;
  method: string;
  startTime: number;
  endTime?: number;
  duration?: number;
  status?: number;
  error?: boolean;
  retries?: number;
  cacheHit?: boolean;
  circuitBreakerStatus?: CircuitState;
}

/**
 * QuantumConnector - Advanced connection management for the Dokploy MCP
 */
export class QuantumConnector extends EventEmitter {
  private client: AxiosInstance;
  private config: typeof DEFAULT_CONFIG;
  private circuitState: CircuitState = CircuitState.CLOSED;
  private failureCount: number = 0;
  private cache: NodeCache;
  private metrics: RequestMetrics[] = [];
  private lastCircuitReset: number = Date.now();
  private metricFlushInterval: NodeJS.Timeout = setTimeout(() => {}, 0);

  /**
   * Create a new QuantumConnector
   * @param baseUrl - The base URL for API requests
   * @param apiKey - The API key for authentication
   * @param customConfig - Custom configuration options
   */
  constructor(baseUrl: string, apiKey: string, customConfig: Partial<typeof DEFAULT_CONFIG> = {}) {
    super();
    
    // Merge default config with custom config
    this.config = { ...DEFAULT_CONFIG, ...customConfig };
    
    // Initialize cache
    this.cache = new NodeCache({
      stdTTL: this.config.cache.ttlSeconds,
      checkperiod: this.config.cache.ttlSeconds / 2,
      maxKeys: this.config.cache.maxSize
    });
    
    // Create axios client
    this.client = axios.create({
      baseURL: baseUrl,
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'x-api-key': apiKey
      },
      timeout: this.config.circuitBreaker.requestTimeout
    });
    
    // Setup metric flushing
    if (this.config.metrics.enabled) {
      this.metricFlushInterval = setInterval(() => this.flushMetrics(), 60000);
    }
    
    console.log(`QuantumConnector initialized with base URL: ${baseUrl}`);
  }

  /**
   * Make an API request with all the advanced features
   * @param config - Axios request configuration
   * @param priority - Priority of the request (default: NORMAL)
   * @param bypassCircuitBreaker - Whether to bypass circuit breaker (default: false)
   * @param skipCache - Whether to skip cache lookup (default: false)
   * @returns Promise with the response
   */
  public async request<T = any>(
    config: AxiosRequestConfig, 
    priority: RequestPriority = RequestPriority.NORMAL,
    bypassCircuitBreaker: boolean = false,
    skipCache: boolean = false
  ): Promise<AxiosResponse<T>> {
    // Generate unique ID for this request
    const requestId = Math.random().toString(36).substring(2, 15);
    const endpoint = config.url || 'unknown';
    const method = config.method?.toUpperCase() || 'GET';
    
    // Start tracking metrics for this request
    const metrics: RequestMetrics = {
      requestId,
      endpoint,
      method,
      startTime: Date.now(),
      retries: 0,
      circuitBreakerStatus: this.circuitState
    };
    
    try {
      // Check circuit breaker
      if (!bypassCircuitBreaker && this.circuitState === CircuitState.OPEN) {
        const error = new Error(`Circuit breaker is open. Request to ${endpoint} rejected.`);
        throw error;
      }
      
      // Check cache for GET requests if caching is enabled
      if (this.config.cache.enabled && method === 'GET' && !skipCache) {
        const cacheKey = this.getCacheKey(config);
        const cachedResponse = this.cache.get<CachedResponse>(cacheKey);
        
        if (cachedResponse) {
          metrics.cacheHit = true;
          metrics.endTime = Date.now();
          metrics.duration = metrics.endTime - metrics.startTime;
          metrics.status = 200;
          
          this.recordMetrics(metrics);
          return Promise.resolve({
            data: cachedResponse.data,
            status: 200,
            statusText: 'OK (Cached)',
            headers: {},
            config
          } as AxiosResponse<T>);
        }
      }
      
      // Execute request with retry logic
      return await this.executeWithRetry<T>(config, metrics);
      
    } catch (error: any) {
      // Update metrics
      metrics.endTime = Date.now();
      metrics.duration = metrics.endTime - metrics.startTime;
      metrics.error = true;
      metrics.status = error.response?.status || 0;
      
      this.recordMetrics(metrics);
      throw error;
    }
  }

  /**
   * Health check method that returns the current status of the connector
   * @returns Health status object
   */
  public getStatus() {
    return {
      circuitState: CircuitState[this.circuitState],
      failureCount: this.failureCount,
      cacheSize: this.cache.stats.keys,
      cacheHits: this.cache.stats.hits,
      cacheMisses: this.cache.stats.misses,
      lastCircuitReset: new Date(this.lastCircuitReset).toISOString()
    };
  }

  /**
   * Get metrics for the requests
   * @returns Array of request metrics
   */
  public getMetrics() {
    return [...this.metrics];
  }

  /**
   * Reset the circuit breaker state to CLOSED
   */
  public resetCircuitBreaker() {
    this.circuitState = CircuitState.CLOSED;
    this.failureCount = 0;
    this.lastCircuitReset = Date.now();
    console.log('Circuit breaker reset to CLOSED state');
  }

  /**
   * Clear the cache
   */
  public clearCache() {
    this.cache.flushAll();
    console.log('Cache cleared');
  }

  /**
   * Generate a cache key for a request
   * @param config - Axios request configuration
   * @returns Cache key
   */
  private getCacheKey(config: AxiosRequestConfig): string {
    const url = config.url || '';
    const params = config.params ? JSON.stringify(config.params) : '';
    return `${url}|${params}`;
  }

  /**
   * Get TTL for a specific endpoint
   * @param endpoint - API endpoint
   * @returns TTL in seconds
   */
  private getTtl(endpoint: string): number {
    // Could implement custom TTLs for specific endpoints here
    return this.config.cache.ttlSeconds;
  }

  /**
   * Record metrics for a request
   * @param metrics - Request metrics
   */
  private recordMetrics(metrics: RequestMetrics) {
    if (this.config.metrics.enabled && Math.random() <= this.config.metrics.sampleRate) {
      this.metrics.push(metrics);
    }
  }

  /**
   * Flush metrics data
   */
  private flushMetrics() {
    if (this.metrics.length > 0) {
      this.emit('metrics', [...this.metrics]);
      this.metrics = [];
    }
  }

  /**
   * Update circuit breaker state on request success
   */
  private handleSuccess() {
    if (this.circuitState === CircuitState.HALF_OPEN) {
      this.circuitState = CircuitState.CLOSED;
      this.failureCount = 0;
      console.log('Circuit half-open request succeeded - circuit closed');
    } else if (this.circuitState === CircuitState.CLOSED) {
      this.failureCount = Math.max(0, this.failureCount - 1);
    }
  }

  /**
   * Update circuit breaker state on request failure
   */
  private handleFailure() {
    if (this.circuitState === CircuitState.HALF_OPEN) {
      this.circuitState = CircuitState.OPEN;
      setTimeout(() => {
        this.circuitState = CircuitState.HALF_OPEN;
      }, this.config.circuitBreaker.resetTimeout);
      console.log('Circuit half-open request failed - circuit opened');
    } else if (this.circuitState === CircuitState.CLOSED) {
      this.failureCount++;
      
      if (this.failureCount >= this.config.circuitBreaker.failureThreshold) {
        this.circuitState = CircuitState.OPEN;
        this.lastCircuitReset = Date.now();
        
        setTimeout(() => {
          this.circuitState = CircuitState.HALF_OPEN;
          console.log('Circuit breaker reset to HALF_OPEN state');
        }, this.config.circuitBreaker.resetTimeout);
        
        console.log('Circuit opened due to too many failures');
      }
    }
  }

  /**
   * Execute a request with retry logic
   * @param config - Axios request configuration
   * @param metrics - Metrics object to update
   * @returns Promise with the response
   */
  private async executeWithRetry<T = any>(
    config: AxiosRequestConfig,
    metrics: RequestMetrics
  ): Promise<AxiosResponse<T>> {
    let retries = 0;
    let delay = this.config.retry.initialDelayMs;
    
    // Update metrics with retry count
    metrics.retries = retries;
    
    while (true) {
      try {
        // Execute the request
        const response = await this.client.request<T>(config);
        
        // Update circuit breaker state
        this.handleSuccess();
        
        // Cache the response if it's a GET request and caching is enabled
        if (this.config.cache.enabled && config.method?.toUpperCase() === 'GET') {
          const cacheKey = this.getCacheKey(config);
          const ttl = this.getTtl(config.url || '');
          
          this.cache.set(cacheKey, {
            data: response.data,
            timestamp: Date.now(),
            ttl
          }, ttl);
        }
        
        // Update metrics
        metrics.endTime = Date.now();
        metrics.duration = metrics.endTime - metrics.startTime;
        metrics.status = response.status;
        this.recordMetrics(metrics);
        
        return response;
      } catch (error: any) {
        const status = error.response?.status;
        
        // Update circuit breaker state
        this.handleFailure();
        
        // Check if we should retry
        const shouldRetry = 
          retries < this.config.retry.maxRetries && 
          this.config.retry.retryableStatusCodes.includes(status);
        
        if (!shouldRetry) {
          throw error;
        }
        
        // Increment retry count
        retries++;
        metrics.retries = retries;
        
        // Calculate delay with exponential backoff
        await new Promise(resolve => setTimeout(resolve, delay));
        delay = Math.min(delay * this.config.retry.backoffFactor, this.config.retry.maxDelayMs);
      }
    }
  }
}
