import express from 'express';
import cors from 'cors';
import { DokployClient } from './dokploy-client';
import { QuantumConnector } from './quantum-connector';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Configuration
const PORT = process.env.PORT || 3000;
const DOKPLOY_API_URL = process.env.DOKPLOY_API_URL || 'http://localhost:3000/api';
const DOKPLOY_API_KEY = process.env.DOKPLOY_API_KEY || '';

// Initialize Dokploy client
const dokployClient = new DokployClient(DOKPLOY_API_URL, DOKPLOY_API_KEY);

// Initialize Quantum Connector with enhanced capabilities
const quantumConnector = new QuantumConnector(DOKPLOY_API_URL, DOKPLOY_API_KEY, {
  circuitBreaker: {
    failureThreshold: 3,      // Open circuit after 3 consecutive failures
    resetTimeout: 10000,      // Wait 10 seconds before trying again
    requestTimeout: 15000     // 15 second timeout for requests
  },
  retry: {
    maxRetries: 2,            // Maximum of 2 retries per request
    initialDelayMs: 200,      // Start with 200ms delay
    maxDelayMs: 2000,         // Max 2 second delay between retries
    backoffFactor: 2          // Double the delay with each retry
  },
  cache: {
    ttlSeconds: 120,          // Cache results for 2 minutes by default
    excludedEndpoints: ['/application.logs', '/docker.getContainers'] // Don't cache dynamic endpoints
  }
});

// Initialize Express app
const app = express();
app.use(cors());
app.use(express.json());

// Define tool categories and descriptions for better organization
const toolCategories = {
  docker: 'Tools for managing Docker containers',
  admin: 'Administrative tools for Dokploy',
  projects: 'Tools for managing Dokploy projects',
  applications: 'Tools for managing applications within projects',
  monitoring: 'Tools for monitoring application status and logs',
  diagnostics: 'Tools for diagnosing and troubleshooting issues',
  system: 'System-level tools and operations'
};

// Define tool schemas for MCP (original tools plus new system tools)
const toolSchemas = {
  // Original tools
  dokploy_docker_get_containers: {
    description: 'Get all Docker containers',
    category: 'docker',
    parameters: {
      serverId: 'Optional server ID'
    }
  },
  // ... other original tools

  // New system tools (using our quantum connector)
  dokploy_system_status: {
    description: 'Get the status of the MCP system including circuit breaker state and cache stats',
    category: 'system',
    parameters: {}
  },
  dokploy_system_clear_cache: {
    description: 'Clear the MCP system cache',
    category: 'system',
    parameters: {}
  },
  dokploy_system_reset_circuit_breaker: {
    description: 'Manually reset the circuit breaker',
    category: 'system',
    parameters: {}
  }
};

// MCP Server endpoints

// List available tools endpoint
app.get('/tools', function(req, res) {
  const tools = Object.entries(toolSchemas).map(([name, schema]) => ({
    name,
    description: schema.description,
    category: schema.category,
    parameters: schema.parameters
  }));
  
  const categorizedTools = Object.entries(toolCategories).map(([category, description]) => ({
    category,
    description,
    tools: tools.filter(tool => tool.category === category)
  }));
  
  res.json({
    categories: categorizedTools,
    allTools: tools
  });
});

// Main MCP Server endpoint
app.post('/', function(req, res) {
  const { name, params } = req.body;
  console.log(`[${new Date().toISOString()}] Received request:`, { name, params });
  
  // Handle the request asynchronously
  (async function() {
    try {
      let result;
      
      // First handle our system tools that use the quantum connector
      if (name === 'dokploy_system_status') {
        result = quantumConnector.getStatus();
      } 
      else if (name === 'dokploy_system_clear_cache') {
        quantumConnector.clearCache();
        result = { success: true, message: 'Cache cleared successfully' };
      }
      else if (name === 'dokploy_system_reset_circuit_breaker') {
        quantumConnector.resetCircuitBreaker();
        result = { success: true, message: 'Circuit breaker reset successfully' };
      }
      // For all other tools, use the original implementation
      else {
        // Original tool handling logic here (unchanged)
        switch (name) {
          case 'dokploy_docker_get_containers':
            result = await dokployClient.getDockerContainers(params.serverId);
            break;
          // ... other cases
          default:
            throw new Error(`Unknown function: ${name}`);
        }
      }
      
      res.json({ result });
    } catch (error) {
      console.error(`Error executing ${name}:`, error);
      res.status(500).json({ 
        error: error instanceof Error ? error.message : 'Unknown error' 
      });
    }
  })();
});

// Enhanced health check endpoint that also shows quantum connector status
app.get('/health', function(req, res) {
  res.json({
    status: 'ok',
    version: '1.0.0',
    apiUrl: DOKPLOY_API_URL,
    hasApiKey: !!DOKPLOY_API_KEY,
    quantum: {
      status: quantumConnector.getStatus()
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Dokploy MCP server running on port ${PORT}`);
  console.log(`Using Dokploy API at: ${DOKPLOY_API_URL}`);
  console.log(`Enhanced with QuantumConnector for improved reliability`);
  
  if (!DOKPLOY_API_KEY) {
    console.warn('WARNING: DOKPLOY_API_KEY environment variable is not set');
  }
});
