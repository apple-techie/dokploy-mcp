import { DokployClient } from './src/dokploy-client';
import * as dotenv from 'dotenv';
import axios from 'axios';

// Load environment variables from .env file
dotenv.config();

// Create a new DokployClient instance with API credentials from .env
let baseUrl = process.env.DOKPLOY_API_URL || '';
const apiKey = process.env.DOKPLOY_API_KEY || '';

if (!baseUrl || !apiKey) {
  console.error('Error: DOKPLOY_API_URL and DOKPLOY_API_KEY must be set in .env file');
  process.exit(1);
}

// Keep the '/api' in the base URL as that's part of the Dokploy API structure
// The Dokploy API endpoints are structured like '/api/admin.setupMonitoring'
console.log(`Using Dokploy API URL: ${baseUrl}`);
console.log(`Using Dokploy API Key: ${apiKey.substring(0, 10)}...`);

// Create the Dokploy client
const client = new DokployClient(baseUrl, apiKey);

// Function to make a direct test API call for debugging
async function testDirectApiCall() {
  console.log('Making direct test API call to verify connection...');
  try {
    // Check if the URL already contains /api and adjust the endpoint accordingly
    let endpoint = '/project.all';
    if (baseUrl.includes('/api')) {
      // If baseUrl already has /api, make sure we don't duplicate it
      endpoint = endpoint.replace(/^\/api\//, '/');
      console.log(`Base URL already contains /api, adjusted endpoint to: ${endpoint}`);
    }
    
    console.log(`Making request to: ${baseUrl}${endpoint}`);
    
    // Make a simple request to check connectivity with the exact headers from the cURL command
    const response = await axios.get(`${baseUrl}${endpoint}`, {
      headers: {
        'accept': 'application/json', // Use lowercase 'accept' to match the cURL command
        'x-api-key': apiKey // Only use x-api-key header for authentication
      }
    });
    console.log('Connection test successful!');
    console.log(`Status: ${response.status}`);
    console.log(`Data: ${JSON.stringify(response.data).substring(0, 100)}...`);
    return true;
  } catch (error: any) {
    console.error('Connection test failed:');
    console.error(`Status: ${error.response?.status || 'Unknown'}`);
    console.error(`Message: ${error.response?.data?.message || error.message}`);
    console.error('Headers sent:', error.config?.headers);
    console.error('URL requested:', error.config?.url);
    return false;
  }
}

// Function to execute the exact cURL command using child_process
async function testExactCurlCommand() {
  console.log('Testing with exact cURL command...');
  const { exec } = require('child_process');
  
  const curlCommand = `curl -X 'GET' 'https://dokploy.dashstache.com/api/project.all' -H 'accept: application/json' -H 'x-api-key: ${apiKey}'`;
  
  return new Promise<boolean>((resolve) => {
    exec(curlCommand, (error: any, stdout: string, stderr: string) => {
      if (error) {
        console.error(`cURL execution error: ${error.message}`);
        resolve(false);
        return;
      }
      
      if (stderr) {
        console.error(`cURL stderr: ${stderr}`);
      }
      
      console.log('cURL response:');
      console.log(stdout.substring(0, 200) + (stdout.length > 200 ? '...' : ''));
      
      try {
        // Try to parse the response as JSON to check if it's valid
        const data = JSON.parse(stdout);
        console.log('Successfully parsed cURL response as JSON');
        resolve(true);
      } catch (e) {
        console.error('Failed to parse cURL response as JSON');
        resolve(false);
      }
    });
  });
}

// Function to test multiple endpoints with different authentication approaches
async function testMultipleEndpoints() {
  console.log('Testing multiple endpoints with different authentication approaches...');
  
  const endpoints = [
    '/project.all',
    '/user.get',
    '/server.all',
    '/application.all'
  ];
  
  const authMethods = [
    // Method 1: x-api-key header (standard)
    {
      name: 'x-api-key header',
      headers: {
        'accept': 'application/json',
        'x-api-key': apiKey
      }
    },
    // Method 2: Authorization Bearer token
    {
      name: 'Authorization Bearer token',
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      }
    },
    // Method 3: apiKey as query parameter
    {
      name: 'apiKey query parameter',
      headers: {
        'accept': 'application/json'
      },
      params: { apiKey }
    },
    // Method 4: api_key as query parameter
    {
      name: 'api_key query parameter',
      headers: {
        'accept': 'application/json'
      },
      params: { api_key: apiKey }
    },
    // Method 5: key as query parameter
    {
      name: 'key query parameter',
      headers: {
        'accept': 'application/json'
      },
      params: { key: apiKey }
    }
  ];
  
  for (const endpoint of endpoints) {
    console.log(`\nTesting endpoint: ${endpoint}`);
    
    for (const method of authMethods) {
      console.log(`  Using auth method: ${method.name}`);
      try {
        const response = await axios.get(`${baseUrl}${endpoint}`, {
          headers: method.headers,
          params: method.params
        });
        
        console.log(`  Success! Status: ${response.status}`);
        console.log(`  Data: ${JSON.stringify(response.data).substring(0, 100)}...`);
        return true; // If any endpoint works, return true
      } catch (error: any) {
        console.error(`  Failed: Status: ${error.response?.status || 'Unknown'}`);
        console.error(`  Message: ${error.response?.data?.message || error.message}`);
      }
    }
  }
  
  console.error('All endpoints and authentication methods failed. There may be an issue with the API credentials or connectivity.');
  return false;
}

async function testClient() {
  try {
    // First, test with the exact cURL command
    console.log('\n=== Testing with exact cURL command ===');
    const curlSuccess = await testExactCurlCommand();
    if (!curlSuccess) {
      console.error('Failed to connect to the API with the exact cURL command. Please check your API credentials.');
    } else {
      console.log('Successfully connected to the API with the exact cURL command!');
    }
    
    // Then, test multiple endpoints to see if any of them work
    console.log('\n=== Testing multiple endpoints ===');
    const multipleEndpointsSuccess = await testMultipleEndpoints();
    if (multipleEndpointsSuccess) {
      console.log('Successfully connected to at least one API endpoint!');
    } else {
      console.error('Failed to connect to any API endpoints. Please check your API credentials.');
    }
    
    // Finally, test a direct API call using axios
    console.log('\n=== Testing with direct axios call ===');
    const connectionSuccess = await testDirectApiCall();
    if (!connectionSuccess) {
      console.error('Failed to connect to the API directly with axios. Please check your API credentials.');
      return;
    } else {
      console.log('Attempting to continue with client tests anyway...');
    }
    
    console.log('\n=== TESTING CLIENT IMPLEMENTATION ===');
    
    // Test project endpoints
    console.log('\nTesting project endpoints...');
    try {
      const projects = await client.getAllProjects();
      console.log(`Found ${projects?.length || 0} projects`);
      
      if (projects && projects.length > 0) {
        const projectId = projects[0].id;
        console.log(`Getting details for project ${projectId}...`);
        const projectDetails = await client.getProject(projectId);
        console.log('Project details:', projectDetails);
        
        // Test application endpoints if there are any applications
        console.log('\nTesting application endpoints...');
        try {
          // Get applications for a project
          const applications = await client.getApplications(projectId);
          console.log(`Found ${applications?.length || 0} applications for project ${projectId}`);
          
          if (applications && applications.length > 0) {
            const applicationId = applications[0].id;
            console.log(`Getting details for application ${applicationId}...`);
            const applicationDetails = await client.getApplication(applicationId);
            console.log('Application details:', applicationDetails);
            
            // Test application logs
            console.log('\nTesting application logs...');
            try {
              const logs = await client.getApplicationLogs(applicationId, { limit: 10 });
              console.log(`Retrieved logs for application ${applicationId}`);
            } catch (logsError: any) {
              console.error('Error getting application logs:', logsError.message);
            }
          }
        } catch (appError: any) {
          console.error('Error testing application endpoints:', appError.message);
        }
        
        // Test MariaDB endpoints if there are any MariaDB instances
        console.log('\nTesting MariaDB endpoints...');
        // This would create a new MariaDB instance - commented out to avoid unintended creation
        // const newMariaDB = await client.createMariadb(projectId, 'test-mariadb', 'password123');
        // console.log('New MariaDB instance:', newMariaDB);
      }
    } catch (projectError: any) {
      console.error('Error testing project endpoints:', projectError.message);
    }
    
    // Test server endpoints
    console.log('\nTesting server endpoints...');
    try {
      const servers = await client.getAllServers();
      console.log(`Found ${servers?.length || 0} servers`);
      
      if (servers && servers.length > 0) {
        const serverId = servers[0].id;
        console.log(`Getting details for server ${serverId}...`);
        const serverDetails = await client.getServer(serverId);
        console.log('Server details:', serverDetails);
      }
    } catch (serverError: any) {
      console.error('Error testing server endpoints:', serverError.message);
    }
    
    // Test user endpoints
    console.log('\nTesting user endpoints...');
    try {
      const currentUser = await client.getCurrentUser();
      console.log('Current user:', currentUser);
    } catch (userError: any) {
      console.error('Error testing user endpoints:', userError.message);
    }
    
    console.log('\nAll tests completed!');
  } catch (error: any) {
    console.error('Error testing client:', error.message);
  }
}

// Run the test
testClient();
