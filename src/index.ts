import express from 'express';
import cors from 'cors';
import { DokployClient } from './dokploy-client';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Configuration
const PORT = process.env.PORT || 3000;
const DOKPLOY_API_URL = process.env.DOKPLOY_API_URL || 'http://localhost:3000/api';
const DOKPLOY_API_KEY = process.env.DOKPLOY_API_KEY || '';

// Initialize Dokploy client
const dokployClient = new DokployClient(DOKPLOY_API_URL, DOKPLOY_API_KEY);

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
  diagnostics: 'Tools for diagnosing and troubleshooting issues'
};

// Define tool schemas for MCP
const toolSchemas = {
  // Docker management tools
  dokploy_docker_get_containers: {
    description: 'Get all Docker containers',
    category: 'docker',
    parameters: {
      serverId: 'Optional server ID'
    }
  },
  dokploy_docker_restart_container: {
    description: 'Restart a Docker container',
    category: 'docker',
    parameters: {
      containerId: 'The ID of the container to restart'
    }
  },
  dokploy_docker_get_config: {
    description: 'Get Docker configuration',
    category: 'docker',
    parameters: {
      containerId: 'The ID of the container to get configuration for',
      serverId: 'Optional server ID'
    }
  },
  dokploy_docker_get_containers_by_app_name_match: {
    description: 'Get Docker containers by application name match',
    category: 'docker',
    parameters: {
      appName: 'The application name to match',
      appType: 'Optional application type',
      serverId: 'Optional server ID'
    }
  },
  dokploy_docker_get_containers_by_app_label: {
    description: 'Get Docker containers by application label',
    category: 'docker',
    parameters: {
      appName: 'The application name to match',
      type: 'The type of container (e.g., standalone)',
      serverId: 'Optional server ID'
    }
  },
  dokploy_docker_get_stack_containers_by_app_name: {
    description: 'Get Docker stack containers by application name',
    category: 'docker',
    parameters: {
      appName: 'The application name to match',
      serverId: 'Optional server ID'
    }
  },
  dokploy_admin_setup_monitoring: {
    description: 'Setup monitoring for admin',
    category: 'admin',
    parameters: {
      metricsConfig: 'Metrics configuration'
    }
  },
  
  // Project management tools
  dokploy_list_projects: {
    description: 'List all projects in your Dokploy account',
    category: 'projects',
    parameters: {}
  },
  dokploy_get_project: {
    description: 'Get details for a specific project',
    category: 'projects',
    parameters: {
      projectId: 'The ID of the project to retrieve'
    }
  },
  dokploy_create_project: {
    description: 'Create a new project in Dokploy',
    category: 'projects',
    parameters: {
      name: 'Name for the new project',
      description: 'Optional description for the project'
    }
  },
  dokploy_delete_project: {
    description: 'Delete a project from Dokploy',
    category: 'projects',
    parameters: {
      projectId: 'The ID of the project to delete'
    }
  },
  
  // Application management tools
  dokploy_list_applications: {
    description: 'List all applications in a project',
    category: 'applications',
    parameters: {
      projectId: 'The ID of the project'
    }
  },
  dokploy_get_application: {
    description: 'Get details for a specific application',
    category: 'applications',
    parameters: {
      applicationId: 'The ID of the application to retrieve'
    }
  },
  dokploy_create_application: {
    description: 'Create a new application in a project',
    category: 'applications',
    parameters: {
      projectId: 'The ID of the project',
      name: 'Name for the new application',
      applicationParams: 'Optional additional parameters for the application'
    }
  },
  dokploy_delete_application: {
    description: 'Delete an application from Dokploy',
    category: 'applications',
    parameters: {
      applicationId: 'The ID of the application to delete'
    }
  },
  dokploy_restart_application: {
    description: 'Restart a running application',
    category: 'applications',
    parameters: {
      applicationId: 'The ID of the application to restart'
    }
  },
  
  // Monitoring tools
  dokploy_get_application_status: {
    description: 'Get the current status of an application',
    category: 'monitoring',
    parameters: {
      applicationId: 'The ID of the application'
    }
  },
  dokploy_get_application_logs: {
    description: 'Get logs for an application',
    category: 'monitoring',
    parameters: {
      applicationId: 'The ID of the application',
      lines: 'Optional number of log lines to retrieve (default: 100)'
    }
  },
  
  // Diagnostic tools
  dokploy_test_endpoint: {
    description: 'Test if an endpoint is responding correctly',
    category: 'diagnostics',
    parameters: {
      url: 'The URL to test'
    }
  },
  dokploy_diagnose_502: {
    description: 'Diagnose 502 Bad Gateway errors for a domain',
    category: 'diagnostics',
    parameters: {
      domain: 'The domain experiencing 502 errors'
    }
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
  console.log('Received request:', { name, params });
  
  // Validate that the function exists
  if (!Object.keys(toolSchemas).includes(name)) {
    return res.status(400).json({ error: `Unknown function: ${name}` });
  }
  
  // Handle the request asynchronously
  (async function() {
    try {
      let result;
      
      switch (name) {
        // Docker management tools
        case 'dokploy_docker_get_containers':
          result = await dokployClient.getDockerContainers(params.serverId);
          break;
        
        case 'dokploy_docker_restart_container':
          if (!params.containerId) {
            throw new Error('containerId is required');
          }
          result = await dokployClient.restartDockerContainer(params.containerId);
          break;
        
        case 'dokploy_docker_get_config':
          if (!params.containerId) {
            throw new Error('containerId is required');
          }
          result = await dokployClient.getDockerConfig(params.containerId, params.serverId);
          break;
        
        case 'dokploy_docker_get_containers_by_app_name_match':
          if (!params.appName) {
            throw new Error('appName is required');
          }
          result = await dokployClient.getDockerContainersByAppNameMatch(params.appName, params.appType, params.serverId);
          break;
        
        case 'dokploy_docker_get_containers_by_app_label':
          if (!params.appName) {
            throw new Error('appName is required');
          }
          if (!params.type) {
            throw new Error('type is required');
          }
          result = await dokployClient.getDockerContainersByAppLabel(params.appName, params.type, params.serverId);
          break;
        
        case 'dokploy_docker_get_stack_containers_by_app_name':
          if (!params.appName) {
            throw new Error('appName is required');
          }
          result = await dokployClient.getStackContainersByAppName(params.appName, params.serverId);
          break;
        
        case 'dokploy_admin_setup_monitoring':
          if (!params.metricsConfig) {
            throw new Error('metricsConfig is required');
          }
          result = await dokployClient.setupMonitoring(params.metricsConfig);
          break;
        
        // Project management tools
        case 'dokploy_list_projects':
          result = await dokployClient.getAllProjects();
          break;
        
        case 'dokploy_get_project':
          if (!params.projectId) {
            throw new Error('projectId is required');
          }
          result = await dokployClient.getProject(params.projectId);
          break;
        
        case 'dokploy_create_project':
          if (!params.name) {
            throw new Error('name is required');
          }
          result = await dokployClient.createProject(params.name, params.description);
          break;
        
        case 'dokploy_delete_project':
          if (!params.projectId) {
            throw new Error('projectId is required');
          }
          result = await dokployClient.deleteProject(params.projectId);
          break;
        
        // Application management tools
        case 'dokploy_list_applications':
          if (!params.projectId) {
            throw new Error('projectId is required');
          }
          result = await dokployClient.getApplications(params.projectId);
          break;
        
        case 'dokploy_get_application':
          if (!params.applicationId) {
            throw new Error('applicationId is required');
          }
          result = await dokployClient.getApplication(params.applicationId);
          break;
        
        case 'dokploy_create_application':
          if (!params.projectId || !params.name || !params.appName) {
            throw new Error('projectId, name, and appName are required');
          }
          result = await dokployClient.createApplication(
            params.name, 
            params.appName, 
            params.description || '', 
            params.projectId, 
            params.serverId
          );
          break;
        
        case 'dokploy_delete_application':
          if (!params.applicationId) {
            throw new Error('applicationId is required');
          }
          result = await dokployClient.deleteApplication(params.applicationId);
          break;
        
        case 'dokploy_restart_application':
          if (!params.applicationId) {
            throw new Error('applicationId is required');
          }
          result = await dokployClient.restartApplication(params.applicationId);
          break;
        
        // Monitoring tools
        case 'dokploy_get_application_logs':
          if (!params.applicationId) {
            throw new Error('applicationId is required');
          }
          result = await dokployClient.getApplicationLogs(params.applicationId, params.lines);
          break;
        
        case 'dokploy_get_application_status':
          if (!params.applicationId) {
            throw new Error('applicationId is required');
          }
          result = await dokployClient.getApplicationStatus(params.applicationId);
          break;
        
        // Diagnostic tools
        case 'dokploy_test_endpoint':
          if (!params.url) {
            throw new Error('url is required');
          }
          result = await dokployClient.testEndpoint(params.url);
          break;
        
        case 'dokploy_diagnose_502':
          if (!params.domain) {
            throw new Error('domain is required');
          }
          result = await dokployClient.diagnose502Error(params.domain);
          break;
        
        default:
          throw new Error(`Unknown function: ${name}`);
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

// Health check endpoint
app.get('/health', function(req, res) {
  res.json({
    status: 'ok',
    version: '1.0.0',
    apiUrl: DOKPLOY_API_URL,
    hasApiKey: !!DOKPLOY_API_KEY
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Dokploy MCP server running on port ${PORT}`);
  console.log(`Using Dokploy API at: ${DOKPLOY_API_URL}`);
  console.log(`Available tools: ${Object.keys(toolSchemas).length}`);
  console.log(`Tool categories: ${Object.keys(toolCategories).join(', ')}`);
  
  if (!DOKPLOY_API_KEY) {
    console.warn('WARNING: DOKPLOY_API_KEY environment variable is not set');
  }
});
