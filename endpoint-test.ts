import axios from 'axios';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

// Load environment variables
dotenv.config();

// Get API URL and key from environment variables
const baseUrl = process.env.DOKPLOY_API_URL || 'https://dokploy.dashstache.com/api';
const apiKey = process.env.DOKPLOY_API_KEY || '';

console.log(`Using Dokploy API URL: ${baseUrl}`);
console.log(`Using Dokploy API Key: ${apiKey.substring(0, 10)}...`);

// Define endpoint interface
interface EndpointConfig {
  method: string;
  endpoint: string;
  description: string;
  params?: Record<string, any>;
  data?: Record<string, any>;
}

// Define endpoint categories and their endpoints
const endpointCategories: Record<string, EndpointConfig[]> = {
  'Project Management': [
    { method: 'GET', endpoint: '/project.all', description: 'Get all projects' },
    { method: 'GET', endpoint: '/project.one', params: { projectId: 'example_id' }, description: 'Get a specific project' },
    { method: 'POST', endpoint: '/project.create', data: { name: 'Test Project', description: 'Test Description' }, description: 'Create a project' }
  ],
  'Application Management': [
    { method: 'GET', endpoint: '/application.all', description: 'Get all applications' },
    { method: 'GET', endpoint: '/application.logs', params: { applicationId: 'example_id' }, description: 'Get application logs' },
    { method: 'POST', endpoint: '/application.create', data: { name: 'Test App', appName: 'test-app', description: 'Test Description', projectId: 'example_id' }, description: 'Create an application' }
  ],
  'User Management': [
    { method: 'GET', endpoint: '/user.get', description: 'Get current user' },
    { method: 'GET', endpoint: '/user.all', description: 'Get all users' }
  ],
  'Server Management': [
    { method: 'GET', endpoint: '/server.all', description: 'Get all servers' },
    { method: 'GET', endpoint: '/server.one', params: { serverId: 'example_id' }, description: 'Get a specific server' }
  ],
  'Database Services': [
    { method: 'GET', endpoint: '/mysql.all', description: 'Get all MySQL databases' },
    { method: 'GET', endpoint: '/postgres.all', description: 'Get all PostgreSQL databases' },
    { method: 'GET', endpoint: '/redis.all', description: 'Get all Redis instances' },
    { method: 'GET', endpoint: '/mongo.all', description: 'Get all MongoDB instances' },
    { method: 'GET', endpoint: '/mariadb.all', description: 'Get all MariaDB databases' }
  ],
  'Domain Management': [
    { method: 'GET', endpoint: '/domain.all', description: 'Get all domains' }
  ],
  'Certificate Management': [
    { method: 'GET', endpoint: '/certificates.all', description: 'Get all certificates' }
  ],
  'Backup Management': [
    { method: 'GET', endpoint: '/backup.all', description: 'Get all backups' }
  ],
  'Registry Management': [
    { method: 'GET', endpoint: '/registry.all', description: 'Get all registries' }
  ],
  'Notification Management': [
    { method: 'GET', endpoint: '/notification.all', description: 'Get all notifications' }
  ],
  'SSH Key Management': [
    { method: 'GET', endpoint: '/sshKey.all', description: 'Get all SSH keys' }
  ],
  'Webhook Management': [
    { method: 'GET', endpoint: '/webhook.all', description: 'Get all webhooks' }
  ],
  'Volume Management': [
    { method: 'GET', endpoint: '/volume.all', description: 'Get all volumes' }
  ],
  'Cron Job Management': [
    { method: 'GET', endpoint: '/schedule.all', description: 'Get all cron jobs' }
  ]
};

// Results storage
const results = {
  working: [] as any[],
  notWorking: [] as any[],
  summary: {
    total: 0,
    working: 0,
    notWorking: 0,
    categories: {} as Record<string, { total: number, working: number, notWorking: number }>
  }
};

// Function to test a single endpoint
async function testEndpoint(category: string, method: string, endpoint: string, params?: any, data?: any, description?: string) {
  console.log(`\nTesting: ${method} ${endpoint} (${description || 'No description'})`);
  
  try {
    let url = `${baseUrl}${endpoint}`;
    // If the URL already contains '/api' and the endpoint also starts with '/api',
    // remove the duplicate '/api' from the endpoint
    if (baseUrl.includes('/api') && endpoint.startsWith('/api/')) {
      url = `${baseUrl}${endpoint.replace('/api/', '/')}`;
    }
    
    const config = {
      method,
      url,
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'x-api-key': apiKey
      },
      params,
      data
    };
    
    console.log(`Request URL: ${url}`);
    console.log(`Request Method: ${method}`);
    console.log(`Request Headers: ${JSON.stringify(config.headers)}`);
    if (params) console.log(`Request Params: ${JSON.stringify(params)}`);
    if (data) console.log(`Request Data: ${JSON.stringify(data)}`);
    
    const response = await axios(config);
    
    console.log(`Response Status: ${response.status}`);
    console.log(`Response Data: ${JSON.stringify(response.data).substring(0, 100)}...`);
    
    // Record the successful result
    results.working.push({
      category,
      method,
      endpoint,
      status: response.status,
      description
    });
    
    // Update summary
    results.summary.working++;
    if (!results.summary.categories[category]) {
      results.summary.categories[category] = { total: 0, working: 0, notWorking: 0 };
    }
    results.summary.categories[category].working++;
    
    return true;
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    console.error(`Status: ${error.response?.status || 'Unknown'}`);
    console.error(`Message: ${error.response?.data?.message || 'No error message'}`);
    
    // Record the failed result
    results.notWorking.push({
      category,
      method,
      endpoint,
      status: error.response?.status || 'Unknown',
      error: error.response?.data?.message || error.message,
      description
    });
    
    // Update summary
    results.summary.notWorking++;
    if (!results.summary.categories[category]) {
      results.summary.categories[category] = { total: 0, working: 0, notWorking: 0 };
    }
    results.summary.categories[category].notWorking++;
    
    return false;
  }
}

// Main function to test all endpoints
async function testAllEndpoints() {
  console.log('Starting endpoint tests...');
  
  // Test each endpoint in each category
  for (const [category, endpoints] of Object.entries(endpointCategories)) {
    console.log(`\n=== Testing ${category} Endpoints ===`);
    
    // Update summary
    if (!results.summary.categories[category]) {
      results.summary.categories[category] = { total: 0, working: 0, notWorking: 0 };
    }
    results.summary.categories[category].total += endpoints.length;
    results.summary.total += endpoints.length;
    
    for (const endpoint of endpoints) {
      await testEndpoint(
        category,
        endpoint.method,
        endpoint.endpoint,
        endpoint.params,
        endpoint.data,
        endpoint.description
      );
      
      // Add a small delay between requests to avoid overwhelming the API
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
  
  // Generate report
  generateReport();
}

// Function to generate a report
function generateReport() {
  console.log('\n=== Endpoint Test Report ===');
  console.log(`Total Endpoints Tested: ${results.summary.total}`);
  console.log(`Working Endpoints: ${results.summary.working} (${Math.round(results.summary.working / results.summary.total * 100)}%)`);
  console.log(`Non-Working Endpoints: ${results.summary.notWorking} (${Math.round(results.summary.notWorking / results.summary.total * 100)}%)`);
  
  console.log('\nCategory Breakdown:');
  for (const [category, stats] of Object.entries(results.summary.categories)) {
    console.log(`  ${category}: ${stats.working}/${stats.total} working (${Math.round(stats.working / stats.total * 100)}%)`);
  }
  
  console.log('\nWorking Endpoints:');
  for (const endpoint of results.working) {
    console.log(`  ${endpoint.method} ${endpoint.endpoint} (${endpoint.description || 'No description'})`);
  }
  
  console.log('\nNon-Working Endpoints:');
  for (const endpoint of results.notWorking) {
    console.log(`  ${endpoint.method} ${endpoint.endpoint} (${endpoint.description || 'No description'}) - Status: ${endpoint.status}, Error: ${endpoint.error}`);
  }
  
  // Save results to a file
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const reportData = {
    timestamp: new Date().toISOString(),
    baseUrl,
    apiKey: `${apiKey.substring(0, 5)}...${apiKey.substring(apiKey.length - 5)}`,
    summary: results.summary,
    workingEndpoints: results.working,
    nonWorkingEndpoints: results.notWorking
  };
  
  fs.writeFileSync(
    `endpoint-test-report-${timestamp}.json`,
    JSON.stringify(reportData, null, 2)
  );
  
  console.log(`\nReport saved to endpoint-test-report-${timestamp}.json`);
}

// Run the tests
testAllEndpoints().catch(error => {
  console.error('Error running tests:', error);
});
