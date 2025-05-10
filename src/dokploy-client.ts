import axios, { AxiosInstance } from 'axios';

/**
 * DokployClient - A client for interacting with the Dokploy API
 */
export class DokployClient {
  private client: AxiosInstance;
  
  /**
   * Create a new DokployClient
   * @param baseUrl - The base URL of your Dokploy instance (e.g., 'https://your-dokploy-instance.com/api')
   * @param apiKey - Your Dokploy API key
   */
  constructor(baseUrl: string, apiKey: string) {
    // Normalize the base URL to ensure it doesn't end with a slash
    if (baseUrl.endsWith('/')) {
      baseUrl = baseUrl.slice(0, -1);
    }
    
    // Remove any duplicate '/api' segments from the base URL
    if (baseUrl.endsWith('/api') && baseUrl !== 'https://dokploy.dashstache.com/api') {
      console.log('Warning: Base URL already ends with /api. This might cause issues with endpoint paths.');
    }
    
    // Create the Axios client with the normalized base URL
    this.client = axios.create({
      baseURL: baseUrl,
      headers: {
        'accept': 'application/json', // Use lowercase 'accept' to match the cURL command
        'Content-Type': 'application/json',
        'x-api-key': apiKey // Use x-api-key header for authentication
      }
    });
    
    // Add a request interceptor to handle the URL structure correctly
    this.client.interceptors.request.use((config) => {
      // If the URL already includes '/api' and the path also starts with '/api',
      // remove the duplicate '/api' from the path
      if (baseUrl.includes('/api') && config.url && config.url.startsWith('/api/')) {
        config.url = config.url.replace('/api/', '/');
      }
      
      // Log the request for debugging
      console.log(`Making request to: ${baseUrl}${config.url || ''}`);
      console.log('Headers:', JSON.stringify(config.headers));
      
      return config;
    });
    
    // Add a response interceptor to log responses for debugging
    this.client.interceptors.response.use(
      (response) => {
        console.log(`Response status: ${response.status}`);
        console.log(`Response data: ${JSON.stringify(response.data).substring(0, 200)}...`);
        return response;
      },
      (error) => {
        console.error(`Error status: ${error.response?.status || 'Unknown'}`);
        console.error(`Error message: ${error.response?.data?.message || error.message}`);
        console.error(`Request URL: ${error.config?.url}`);
        console.error(`Request method: ${error.config?.method}`);
        console.error(`Request headers: ${JSON.stringify(error.config?.headers)}`);
        return Promise.reject(error);
      }
    );
    
    // Test the connection immediately
    this.testConnection();
  }
  
  /**
   * Test the connection to the Dokploy API
   */
  private async testConnection() {
    try {
      console.log('Testing connection to Dokploy API...');
      // Try to get the current user as a simple test
      const response = await this.client.get('/user.get');
      console.log('Connection test successful!');
      return response.data;
    } catch (error: any) {
      console.error('Connection test failed:');
      console.error(`Status: ${error.response?.status || 'Unknown'}`);
      console.error(`Message: ${error.response?.data?.message || error.message}`);
      console.error('This might be due to an invalid API key or API configuration.');
      console.error('The client will continue to initialize, but API calls may fail.');
      return null;
    }
  }

  /**
   * Get all projects
   * @returns A list of all projects
   */
  async getAllProjects() {
    try {
      const response = await this.client.get('/project.all');
      return response.data;
    } catch (error) {
      this.handleError('Failed to get projects', error);
    }
  }

  /**
   * Get a project by ID
   * @param projectId - The ID of the project
   * @returns The project details
   */
  async getProject(projectId: string) {
    try {
      const response = await this.client.get(`/project.one?projectId=${projectId}`);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to get project with ID ${projectId}`, error);
    }
  }
  
  /**
   * Remove a project
   * @param projectId - The ID of the project to remove
   * @returns The removal result
   */
  async removeProject(projectId: string) {
    try {
      const response = await this.client.delete(`/project.remove?projectId=${projectId}`);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to remove project with ID ${projectId}`, error);
    }
  }
  
  /**
   * Delete a project (alias for removeProject for API consistency)
   * @param projectId - The ID of the project to delete
   * @returns The result of the delete operation
   */
  async deleteProject(projectId: string) {
    return this.removeProject(projectId);
  }
  
  /**
   * Create a new project
   * @param name - The name of the project
   * @param description - Optional description of the project
   * @param env - Optional environment variables
   * @returns The created project
   */
  async createProject(name: string, description?: string, env?: string) {
    try {
      const data: Record<string, any> = { name };
      if (description) data.description = description;
      if (env) data.env = env;
      
      const response = await this.client.post('/project.create', data);
      return response.data;
    } catch (error) {
      this.handleError('Failed to create project', error);
    }
  }
  

  
  /**
   * Update a project
   * @param projectId - The ID of the project to update
   * @param name - Optional new name for the project
   * @param description - Optional new description for the project
   * @param env - Optional new environment variables
   * @returns The updated project
   */
  async updateProject(projectId: string, name?: string, description?: string, env?: string) {
    try {
      const data: Record<string, any> = { projectId };
      if (name) data.name = name;
      if (description) data.description = description;
      if (env) data.env = env;
      
      const response = await this.client.post('/project.update', data);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to update project with ID ${projectId}`, error);
    }
  }
  
  /**
   * Duplicate a project
   * @param sourceProjectId - The ID of the source project
   * @param name - The name for the new project
   * @param description - Optional description for the new project
   * @param includeServices - Whether to include services in the duplication
   * @param selectedServices - Optional array of services to include
   * @returns The duplicated project
   */
  async duplicateProject(sourceProjectId: string, name: string, description?: string, includeServices: boolean = true, selectedServices: string[] = []) {
    try {
      const data: Record<string, any> = { 
        sourceProjectId,
        name,
        includeServices
      };
      
      if (description) data.description = description;
      if (selectedServices.length > 0) data.selectedServices = selectedServices;
      
      const response = await this.client.post('/project.duplicate', data);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to duplicate project with ID ${sourceProjectId}`, error);
    }
  }

  /**
   * Create a new application
   * @param name - The name of the application
   * @param appName - The application name
   * @param description - Optional description of the application
   * @param projectId - The ID of the project to associate the application with
   * @param serverId - Optional server ID
   * @returns The created application
   */
  async createApplication(name: string, appName: string, description: string, projectId: string, serverId?: string) {
    try {
      const data: Record<string, any> = { 
        name, 
        appName, 
        description, 
        projectId 
      };
      
      if (serverId) data.serverId = serverId;
      
      const response = await this.client.post('/application.create', data);
      return response.data;
    } catch (error) {
      this.handleError('Failed to create application', error);
    }
  }

  /**
   * Get an application by ID
   * @param applicationId - The ID of the application
   * @returns The application details
   */
  async getApplication(applicationId: string) {
    try {
      const response = await this.client.get(`/application.one?applicationId=${applicationId}`);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to get application with ID ${applicationId}`, error);
    }
  }

  /**
   * Get all applications for a project
   * @param projectId - The ID of the project
   * @returns List of applications
   */
  async getApplications(projectId: string) {
    try {
      const response = await this.client.get(`/application.all?projectId=${projectId}`);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to get applications for project ${projectId}`, error);
    }
  }
  
  /**
   * Reload an application
   * @param applicationId - The ID of the application
   * @param appName - The application name
   * @returns The reload result
   */
  async reloadApplication(applicationId: string, appName: string) {
    try {
      const response = await this.client.post('/application.reload', { applicationId, appName });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to reload application with ID ${applicationId}`, error);
    }
  }
  
  /**
   * Delete an application
   * @param applicationId - The ID of the application to delete
   * @returns The deletion result
   */
  async deleteApplication(applicationId: string) {
    try {
      const response = await this.client.post('/application.delete', { applicationId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to delete application with ID ${applicationId}`, error);
    }
  }
  
  /**
   * Stop an application
   * @param applicationId - The ID of the application to stop
   * @returns The stop result
   */
  async stopApplication(applicationId: string) {
    try {
      const response = await this.client.post('/application.stop', { applicationId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to stop application with ID ${applicationId}`, error);
    }
  }
  
  /**
   * Start an application
   * @param applicationId - The ID of the application to start
   * @returns The start result
   */
  async startApplication(applicationId: string) {
    try {
      const response = await this.client.post('/application.start', { applicationId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to start application with ID ${applicationId}`, error);
    }
  }
  
  /**
   * Redeploy an application
   * @param applicationId - The ID of the application to redeploy
   * @returns The redeploy result
   */
  async redeployApplication(applicationId: string) {
    try {
      const response = await this.client.post('/application.redeploy', { applicationId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to redeploy application with ID ${applicationId}`, error);
    }
  }

  /**
   * Restart an application (alias for redeployApplication for API consistency)
   * @param applicationId - The ID of the application to restart
   * @returns The result of the restart operation
   */
  async restartApplication(applicationId: string) {
    return this.redeployApplication(applicationId);
  }
  
  /**
   * Save environment variables for an application
   * @param applicationId - The ID of the application
   * @param env - The environment variables
   * @param buildArgs - Optional build arguments
   * @returns The save result
   */
  async saveApplicationEnvironment(applicationId: string, env: string, buildArgs?: string) {
    try {
      const data: Record<string, any> = { applicationId, env };
      if (buildArgs) data.buildArgs = buildArgs;
      
      const response = await this.client.post('/application.saveEnvironment', data);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to save environment for application with ID ${applicationId}`, error);
    }
  }
  
  /**
   * Update an application
   * @param applicationId - The ID of the application to update
   * @param updates - The updates to apply
   * @returns The updated application
   */
  async updateApplication(applicationId: string, updates: Record<string, any>) {
    try {
      const data = { applicationId, ...updates };
      
      const response = await this.client.post('/application.update', data);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to update application with ID ${applicationId}`, error);
    }
  }
  
  /**
   * Deploy an application
   * @param applicationId - The ID of the application to deploy
   * @returns The deployment result
   */
  async deployApplication(applicationId: string) {
    try {
      const response = await this.client.post('/application.deploy', { applicationId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to deploy application with ID ${applicationId}`, error);
    }
  }
  
  /**
   */
  async getMysql(mysqlId: string) {
    try {
      const response = await this.client.get(`/mysql.one?mysqlId=${mysqlId}`);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to get MySQL instance with ID ${mysqlId}`, error);
    }
  }

  /**
   * Start a MySQL instance
   * @param mysqlId - The ID of the MySQL instance
   * @returns The start operation result
   */
  async startMysql(mysqlId: string) {
    try {
      const response = await this.client.post('/mysql.start', { mysqlId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to start MySQL instance with ID ${mysqlId}`, error);
    }
  }

  /**
   * Stop a MySQL instance
   * @param mysqlId - The ID of the MySQL instance
   * @returns The stop operation result
   */
  async stopMysql(mysqlId: string) {
    try {
      const response = await this.client.post('/mysql.stop', { mysqlId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to stop MySQL instance with ID ${mysqlId}`, error);
    }
  }

  /**
   * Save external port for a MySQL instance
   * @param mysqlId - The ID of the MySQL instance
   * @param externalPort - The external port to use
   * @returns The operation result
   */
  async saveMysqlExternalPort(mysqlId: string, externalPort: number) {
    try {
      const response = await this.client.post('/mysql.saveExternalPort', { mysqlId, externalPort });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to save external port for MySQL instance with ID ${mysqlId}`, error);
    }
  }

  /**
   * Deploy a MySQL instance
   * @param mysqlId - The ID of the MySQL instance
   * @returns The deployment result
   */
  async deployMysql(mysqlId: string) {
    try {
      const response = await this.client.post('/mysql.deploy', { mysqlId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to deploy MySQL instance with ID ${mysqlId}`, error);
    }
  }

  /**
   * Change status of a MySQL instance
   * @param mysqlId - The ID of the MySQL instance
   * @param status - The new status
   * @returns The status change result
   */
  async changeMysqlStatus(mysqlId: string, status: string) {
    try {
      const response = await this.client.post('/mysql.changeStatus', { mysqlId, status });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to change status for MySQL instance with ID ${mysqlId}`, error);
    }
  }

  /**
   * Reload a MySQL instance
   * @param mysqlId - The ID of the MySQL instance
   * @returns The reload operation result
   */
  async reloadMysql(mysqlId: string) {
    try {
      const response = await this.client.post('/mysql.reload', { mysqlId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to reload MySQL instance with ID ${mysqlId}`, error);
    }
  }

  /**
   * Remove a MySQL instance
   * @param mysqlId - The ID of the MySQL instance
   * @returns The removal result
   */
  async removeMysql(mysqlId: string) {
    try {
      const response = await this.client.post('/mysql.remove', { mysqlId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to remove MySQL instance with ID ${mysqlId}`, error);
    }
  }

  /**
   * Save environment variables for a MySQL instance
   * @param mysqlId - The ID of the MySQL instance
   * @param env - The environment variables
   * @returns The save operation result
   */
  async saveMysqlEnvironment(mysqlId: string, env: string) {
    try {
      const response = await this.client.post('/mysql.saveEnvironment', { mysqlId, env });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to save environment for MySQL instance with ID ${mysqlId}`, error);
    }
  }

  /**
   * Update a MySQL instance
   * @param mysqlId - The ID of the MySQL instance
   * @param updateData - The data to update
   * @returns The update result
   */
  async updateMysql(mysqlId: string, updateData: Record<string, any>) {
    try {
      const data = { mysqlId, ...updateData };
      const response = await this.client.post('/mysql.update', data);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to update MySQL instance with ID ${mysqlId}`, error);
    }
  }

  /**
   * Move a MySQL instance to another project
   * @param mysqlId - The ID of the MySQL instance
   * @param projectId - The ID of the target project
   * @returns The move operation result
   */
  async moveMysql(mysqlId: string, projectId: string) {
    try {
      const response = await this.client.post('/mysql.move', { mysqlId, projectId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to move MySQL instance with ID ${mysqlId}`, error);
    }
  }

  /**
   * Rebuild a MySQL instance
   * @param mysqlId - The ID of the MySQL instance
   * @returns The rebuild operation result
   */
  async rebuildMysql(mysqlId: string) {
    try {
      const response = await this.client.post('/mysql.rebuild', { mysqlId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to rebuild MySQL instance with ID ${mysqlId}`, error);
    }
  }

  /**
   * Create a PostgreSQL instance
   * @param projectId - The ID of the project
   * @param name - The name of the PostgreSQL instance
   * @param password - The password for the PostgreSQL instance
   * @returns The created PostgreSQL instance
   */
  async createPostgres(projectId: string, name: string, password: string) {
    try {
      const response = await this.client.post('/postgres.create', { projectId, name, password });
      return response.data;
    } catch (error) {
      this.handleError('Failed to create PostgreSQL instance', error);
    }
  }

  /**
   * Get a PostgreSQL instance by ID
   * @param postgresId - The ID of the PostgreSQL instance
   * @returns The PostgreSQL instance details
   */
  async getPostgres(postgresId: string) {
    try {
      const response = await this.client.get(`/postgres.one?postgresId=${postgresId}`);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to get PostgreSQL instance with ID ${postgresId}`, error);
    }
  }

  /**
   * Start a PostgreSQL instance
   * @param postgresId - The ID of the PostgreSQL instance
   * @returns The start operation result
   */
  async startPostgres(postgresId: string) {
    try {
      const response = await this.client.post('/postgres.start', { postgresId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to start PostgreSQL instance with ID ${postgresId}`, error);
    }
  }

  /**
   * Stop a PostgreSQL instance
   * @param postgresId - The ID of the PostgreSQL instance
   * @returns The stop operation result
   */
  async stopPostgres(postgresId: string) {
    try {
      const response = await this.client.post('/postgres.stop', { postgresId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to stop PostgreSQL instance with ID ${postgresId}`, error);
    }
  }

  /**
   * Save external port for a PostgreSQL instance
   * @param postgresId - The ID of the PostgreSQL instance
   * @param externalPort - The external port to use
   * @returns The operation result
   */
  async savePostgresExternalPort(postgresId: string, externalPort: number) {
    try {
      const response = await this.client.post('/postgres.saveExternalPort', { postgresId, externalPort });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to save external port for PostgreSQL instance with ID ${postgresId}`, error);
    }
  }

  /**
   * Deploy a PostgreSQL instance
   * @param postgresId - The ID of the PostgreSQL instance
   * @returns The deployment result
   */
  async deployPostgres(postgresId: string) {
    try {
      const response = await this.client.post('/postgres.deploy', { postgresId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to deploy PostgreSQL instance with ID ${postgresId}`, error);
    }
  }

  /**
   * Change status of a PostgreSQL instance
   * @param postgresId - The ID of the PostgreSQL instance
   * @param status - The new status
   * @returns The status change result
   */
  async changePostgresStatus(postgresId: string, status: string) {
    try {
      const response = await this.client.post('/postgres.changeStatus', { postgresId, status });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to change status for PostgreSQL instance with ID ${postgresId}`, error);
    }
  }

  /**
   * Remove a PostgreSQL instance
   * @param postgresId - The ID of the PostgreSQL instance
   * @returns The removal result
   */
  async removePostgres(postgresId: string) {
    try {
      const response = await this.client.post('/postgres.remove', { postgresId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to remove PostgreSQL instance with ID ${postgresId}`, error);
    }
  }

  /**
   * Save environment variables for a PostgreSQL instance
   * @param postgresId - The ID of the PostgreSQL instance
   * @param env - The environment variables
   * @returns The save operation result
   */
  async savePostgresEnvironment(postgresId: string, env: string) {
    try {
      const response = await this.client.post('/postgres.saveEnvironment', { postgresId, env });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to save environment for PostgreSQL instance with ID ${postgresId}`, error);
    }
  }

  /**
   * Reload a PostgreSQL instance
   * @param postgresId - The ID of the PostgreSQL instance
   * @returns The reload operation result
   */
  async reloadPostgres(postgresId: string) {
    try {
      const response = await this.client.post('/postgres.reload', { postgresId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to reload PostgreSQL instance with ID ${postgresId}`, error);
    }
  }

  /**
   * Update a PostgreSQL instance
   * @param postgresId - The ID of the PostgreSQL instance
   * @param updateData - The data to update
   * @returns The update result
   */
  async updatePostgres(postgresId: string, updateData: Record<string, any>) {
    try {
      const data = { postgresId, ...updateData };
      const response = await this.client.post('/postgres.update', data);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to update PostgreSQL instance with ID ${postgresId}`, error);
    }
  }

  /**
   * Move a PostgreSQL instance to another project
   * @param postgresId - The ID of the PostgreSQL instance
   * @param projectId - The ID of the target project
   * @returns The move operation result
   */
  async movePostgres(postgresId: string, projectId: string) {
    try {
      const response = await this.client.post('/postgres.move', { postgresId, projectId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to move PostgreSQL instance with ID ${postgresId}`, error);
    }
  }

  /**
   * Rebuild a PostgreSQL instance
   * @param postgresId - The ID of the PostgreSQL instance
   * @returns The rebuild operation result
   */
  async rebuildPostgres(postgresId: string) {
    try {
      const response = await this.client.post('/postgres.rebuild', { postgresId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to rebuild PostgreSQL instance with ID ${postgresId}`, error);
    }
  }

  /**
   * Create a Redis instance
   * @param projectId - The ID of the project
   * @param name - The name of the Redis instance
   * @returns The created Redis instance
   */
  async createRedis(projectId: string, name: string) {
    try {
      const response = await this.client.post('/redis.create', { projectId, name });
      return response.data;
    } catch (error) {
      this.handleError('Failed to create Redis instance', error);
    }
  }

  /**
   * Get a Redis instance by ID
   * @param redisId - The ID of the Redis instance
   * @returns The Redis instance details
   */
  async getRedis(redisId: string) {
    try {
      const response = await this.client.get(`/redis.one?redisId=${redisId}`);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to get Redis instance with ID ${redisId}`, error);
    }
  }

  /**
   * Start a Redis instance
   * @param redisId - The ID of the Redis instance
   * @returns The start operation result
   */
  async startRedis(redisId: string) {
    try {
      const response = await this.client.post('/redis.start', { redisId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to start Redis instance with ID ${redisId}`, error);
    }
  }

  /**
   * Reload a Redis instance
   * @param redisId - The ID of the Redis instance
   * @returns The reload operation result
   */
  async reloadRedis(redisId: string) {
    try {
      const response = await this.client.post('/redis.reload', { redisId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to reload Redis instance with ID ${redisId}`, error);
    }
  }

  /**
   * Stop a Redis instance
   * @param redisId - The ID of the Redis instance
   * @returns The stop operation result
   */
  async stopRedis(redisId: string) {
    try {
      const response = await this.client.post('/redis.stop', { redisId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to stop Redis instance with ID ${redisId}`, error);
    }
  }

  /**
   * Save external port for a Redis instance
   * @param redisId - The ID of the Redis instance
   * @param externalPort - The external port to use
   * @returns The operation result
   */
  async saveRedisExternalPort(redisId: string, externalPort: number) {
    try {
      const response = await this.client.post('/redis.saveExternalPort', { redisId, externalPort });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to save external port for Redis instance with ID ${redisId}`, error);
    }
  }

  /**
   * Deploy a Redis instance
   * @param redisId - The ID of the Redis instance
   * @returns The deployment result
   */
  async deployRedis(redisId: string) {
    try {
      const response = await this.client.post('/redis.deploy', { redisId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to deploy Redis instance with ID ${redisId}`, error);
    }
  }

  /**
   * Change status of a Redis instance
   * @param redisId - The ID of the Redis instance
   * @param status - The new status
   * @returns The status change result
   */
  async changeRedisStatus(redisId: string, status: string) {
    try {
      const response = await this.client.post('/redis.changeStatus', { redisId, status });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to change status for Redis instance with ID ${redisId}`, error);
    }
  }

  /**
   * Remove a Redis instance
   * @param redisId - The ID of the Redis instance
   * @returns The removal result
   */
  async removeRedis(redisId: string) {
    try {
      const response = await this.client.post('/redis.remove', { redisId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to remove Redis instance with ID ${redisId}`, error);
    }
  }

  /**
   * Save environment variables for a Redis instance
   * @param redisId - The ID of the Redis instance
   * @param env - The environment variables
   * @returns The save operation result
   */
  async saveRedisEnvironment(redisId: string, env: string) {
    try {
      const response = await this.client.post('/redis.saveEnvironment', { redisId, env });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to save environment for Redis instance with ID ${redisId}`, error);
    }
  }

  /**
   * Update a Redis instance
   * @param redisId - The ID of the Redis instance
   * @param updateData - The data to update
   * @returns The update result
   */
  async updateRedis(redisId: string, updateData: Record<string, any>) {
    try {
      const data = { redisId, ...updateData };
      const response = await this.client.post('/redis.update', data);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to update Redis instance with ID ${redisId}`, error);
    }
  }

  /**
   * Move a Redis instance to another project
   * @param redisId - The ID of the Redis instance
   * @param projectId - The ID of the target project
   * @returns The move operation result
   */
  async moveRedis(redisId: string, projectId: string) {
    try {
      const response = await this.client.post('/redis.move', { redisId, projectId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to move Redis instance with ID ${redisId}`, error);
    }
  }

  /**
   * Rebuild a Redis instance
   * @param redisId - The ID of the Redis instance
   * @returns The rebuild operation result
   */
  async rebuildRedis(redisId: string) {
    try {
      const response = await this.client.post('/redis.rebuild', { redisId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to rebuild Redis instance with ID ${redisId}`, error);
    }
  }
  
  // AI Endpoints
  
  /**
   * Get an AI instance by ID
   * @param aiId - The ID of the AI instance
   * @returns The AI instance details
   */
  async getAi(aiId: string) {
    try {
      const response = await this.client.get(`/ai.one?aiId=${aiId}`);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to get AI instance with ID ${aiId}`, error);
    }
  }

  /**
   * Get available AI models
   * @returns List of available AI models
   */
  async getAiModels() {
    try {
      const response = await this.client.get('/ai.getModels');
      return response.data;
    } catch (error) {
      this.handleError('Failed to get AI models', error);
    }
  }

  /**
   * Create an AI instance
   * @param projectId - The ID of the project
   * @param name - The name of the AI instance
   * @param model - The AI model to use
   * @param options - Additional options
   * @returns The created AI instance
   */
  async createAi(projectId: string, name: string, model: string, options: Record<string, any> = {}) {
    try {
      const data = { projectId, name, model, ...options };
      const response = await this.client.post('/ai.create', data);
      return response.data;
    } catch (error) {
      this.handleError('Failed to create AI instance', error);
    }
  }

  /**
   * Update an AI instance
   * @param aiId - The ID of the AI instance
   * @param updateData - The data to update
   * @returns The update result
   */
  async updateAi(aiId: string, updateData: Record<string, any>) {
    try {
      const data = { aiId, ...updateData };
      const response = await this.client.post('/ai.update', data);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to update AI instance with ID ${aiId}`, error);
    }
  }

  /**
   * Get all AI instances for a project
   * @param projectId - The ID of the project
   * @returns List of AI instances
   */
  async getAllAi(projectId: string) {
    try {
      const response = await this.client.get(`/ai.getAll?projectId=${projectId}`);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to get all AI instances for project ${projectId}`, error);
    }
  }

  /**
   * Delete an AI instance
   * @param aiId - The ID of the AI instance
   * @returns The delete operation result
   */
  async deleteAi(aiId: string) {
    try {
      const response = await this.client.post('/ai.delete', { aiId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to delete AI instance with ID ${aiId}`, error);
    }
  }

  /**
   * Get AI suggestions
   * @param prompt - The prompt for the AI
   * @param aiId - The ID of the AI instance
   * @returns AI suggestions
   */
  async getAiSuggestions(prompt: string, aiId: string) {
    try {
      const response = await this.client.post('/ai.suggest', { prompt, aiId });
      return response.data;
    } catch (error) {
      this.handleError('Failed to get AI suggestions', error);
    }
  }

  /**
   * Deploy an AI instance
   * @param aiId - The ID of the AI instance
   * @returns The deployment result
   */
  async deployAi(aiId: string) {
    try {
      const response = await this.client.post('/ai.deploy', { aiId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to deploy AI instance with ID ${aiId}`, error);
    }
  }
  
  // Domain Management Endpoints
  
  /**
   * Create a domain
   * @param applicationId - The ID of the application
   * @param domain - The domain name
   * @param options - Additional options
   * @returns The created domain
   */
  async createDomain(applicationId: string, domain: string, options: Record<string, any> = {}) {
    try {
      const data = { applicationId, domain, ...options };
      const response = await this.client.post('/domain.create', data);
      return response.data;
    } catch (error) {
      this.handleError('Failed to create domain', error);
    }
  }

  /**
   * Get domains by application ID
   * @param applicationId - The ID of the application
   * @returns Domains for the application
   */
  async getDomainsByApplicationId(applicationId: string) {
    try {
      const response = await this.client.get(`/domain.byApplicationId?applicationId=${applicationId}`);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to get domains for application with ID ${applicationId}`, error);
    }
  }

  /**
   * Generate a domain
   * @param applicationId - The ID of the application
   * @param options - Additional options
   * @returns The generated domain
   */
  async generateDomain(applicationId: string, options: Record<string, any> = {}) {
    try {
      const data = { applicationId, ...options };
      const response = await this.client.post('/domain.generateDomain', data);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to generate domain for application with ID ${applicationId}`, error);
    }
  }

  /**
   * Check if Traefik.me domains can be generated
   * @returns Whether Traefik.me domains can be generated
   */
  async canGenerateTraefikMeDomains() {
    try {
      const response = await this.client.get('/domain.canGenerateTraefikMeDomains');
      return response.data;
    } catch (error) {
      this.handleError('Failed to check if Traefik.me domains can be generated', error);
    }
  }

  /**
   * Update a domain
   * @param domainId - The ID of the domain
   * @param updateData - The data to update
   * @returns The update result
   */
  async updateDomain(domainId: string, updateData: Record<string, any>) {
    try {
      const data = { domainId, ...updateData };
      const response = await this.client.post('/domain.update', data);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to update domain with ID ${domainId}`, error);
    }
  }

  /**
   * Get a domain by ID
   * @param domainId - The ID of the domain
   * @returns The domain details
   */
  async getDomain(domainId: string) {
    try {
      const response = await this.client.get(`/domain.one?domainId=${domainId}`);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to get domain with ID ${domainId}`, error);
    }
  }

  /**
   * Delete a domain
   * @param domainId - The ID of the domain
   * @returns The delete operation result
   */
  async deleteDomain(domainId: string) {
    try {
      const response = await this.client.post('/domain.delete', { domainId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to delete domain with ID ${domainId}`, error);
    }
  }

  /**
   * Validate a domain
   * @param domain - The domain to validate
   * @returns The validation result
   */
  async validateDomain(domain: string) {
    try {
      const response = await this.client.post('/domain.validateDomain', { domain });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to validate domain ${domain}`, error);
    }
  }
  
  // Certificate Management Endpoints
  
  /**
   * Create a certificate
   * @param name - The name of the certificate
   * @param cert - The certificate content
   * @param key - The private key content
   * @returns The created certificate
   */
  async createCertificate(name: string, cert: string, key: string) {
    try {
      const response = await this.client.post('/certificates.create', { name, cert, key });
      return response.data;
    } catch (error) {
      this.handleError('Failed to create certificate', error);
    }
  }

  /**
   * Get a certificate by ID
   * @param certificateId - The ID of the certificate
   * @returns The certificate details
   */
  async getCertificate(certificateId: string) {
    try {
      const response = await this.client.get(`/certificates.one?certificateId=${certificateId}`);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to get certificate with ID ${certificateId}`, error);
    }
  }

  /**
   * Remove a certificate
   * @param certificateId - The ID of the certificate
   * @returns The removal result
   */
  async removeCertificate(certificateId: string) {
    try {
      const response = await this.client.post('/certificates.remove', { certificateId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to remove certificate with ID ${certificateId}`, error);
    }
  }

  /**
   * Get all certificates
   * @returns List of all certificates
   */
  async getAllCertificates() {
    try {
      const response = await this.client.get('/certificates.all');
      return response.data;
    } catch (error) {
      this.handleError('Failed to get all certificates', error);
    }
  }
  
  // Backup Management Endpoints
  
  /**
   * Create a backup configuration
   * @param projectId - The ID of the project
   * @param name - The name of the backup configuration
   * @param options - Additional options
   * @returns The created backup configuration
   */
  async createBackup(projectId: string, name: string, options: Record<string, any> = {}) {
    try {
      const data = { projectId, name, ...options };
      const response = await this.client.post('/backup.create', data);
      return response.data;
    } catch (error) {
      this.handleError('Failed to create backup configuration', error);
    }
  }

  /**
   * Get a backup configuration by ID
   * @param backupId - The ID of the backup configuration
   * @returns The backup configuration details
   */
  async getBackup(backupId: string) {
    try {
      const response = await this.client.get(`/backup.one?backupId=${backupId}`);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to get backup configuration with ID ${backupId}`, error);
    }
  }

  /**
   * Update a backup configuration
   * @param backupId - The ID of the backup configuration
   * @param updateData - The data to update
   * @returns The update result
   */
  async updateBackup(backupId: string, updateData: Record<string, any>) {
    try {
      const data = { backupId, ...updateData };
      const response = await this.client.post('/backup.update', data);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to update backup configuration with ID ${backupId}`, error);
    }
  }

  /**
   * Remove a backup configuration
   * @param backupId - The ID of the backup configuration
   * @returns The removal result
   */
  async removeBackup(backupId: string) {
    try {
      const response = await this.client.post('/backup.remove', { backupId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to remove backup configuration with ID ${backupId}`, error);
    }
  }

  /**
   * Manually backup a PostgreSQL database
   * @param postgresId - The ID of the PostgreSQL instance
   * @returns The backup result
   */
  async manualBackupPostgres(postgresId: string) {
    try {
      const response = await this.client.post('/backup.manualBackupPostgres', { postgresId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to manually backup PostgreSQL instance with ID ${postgresId}`, error);
    }
  }

  /**
   * Manually backup a MySQL database
   * @param mysqlId - The ID of the MySQL instance
   * @returns The backup result
   */
  async manualBackupMySql(mysqlId: string) {
    try {
      const response = await this.client.post('/backup.manualBackupMySql', { mysqlId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to manually backup MySQL instance with ID ${mysqlId}`, error);
    }
  }

  /**
   * List backup files
   * @param backupId - The ID of the backup configuration
   * @returns List of backup files
   */
  async listBackupFiles(backupId: string) {
    try {
      const response = await this.client.get(`/backup.listBackupFiles?backupId=${backupId}`);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to list backup files for backup configuration with ID ${backupId}`, error);
    }
  }
  
  // Registry Management Endpoints
  
  /**
   * Create a registry
   * @param name - The name of the registry
   * @param url - The URL of the registry
   * @param username - The username for the registry
   * @param password - The password for the registry
   * @returns The created registry
   */
  async createRegistry(name: string, url: string, username: string, password: string) {
    try {
      const response = await this.client.post('/registry.create', { name, url, username, password });
      return response.data;
    } catch (error) {
      this.handleError('Failed to create registry', error);
    }
  }

  /**
   * Remove a registry
   * @param registryId - The ID of the registry
   * @returns The removal result
   */
  async removeRegistry(registryId: string) {
    try {
      const response = await this.client.post('/registry.remove', { registryId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to remove registry with ID ${registryId}`, error);
    }
  }

  /**
   * Update a registry
   * @param registryId - The ID of the registry
   * @param updateData - The data to update
   * @returns The update result
   */
  async updateRegistry(registryId: string, updateData: Record<string, any>) {
    try {
      const data = { registryId, ...updateData };
      const response = await this.client.post('/registry.update', data);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to update registry with ID ${registryId}`, error);
    }
  }

  /**
   * Get all registries
   * @returns List of all registries
   */
  async getAllRegistries() {
    try {
      const response = await this.client.get('/registry.all');
      return response.data;
    } catch (error) {
      this.handleError('Failed to get all registries', error);
    }
  }

  /**
   * Get a registry by ID
   * @param registryId - The ID of the registry
   * @returns The registry details
   */
  async getRegistry(registryId: string) {
    try {
      const response = await this.client.get(`/registry.one?registryId=${registryId}`);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to get registry with ID ${registryId}`, error);
    }
  }

  /**
   * Test a registry connection
   * @param registryId - The ID of the registry
   * @returns The test result
   */
  async testRegistry(registryId: string) {
    try {
      const response = await this.client.post('/registry.testRegistry', { registryId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to test registry with ID ${registryId}`, error);
    }
  }
  
  // User Management Endpoints
  
  /**
   * Get all users
   * @returns List of all users
   */
  async getAllUsers() {
    try {
      const response = await this.client.get('/user.all');
      return response.data;
    } catch (error) {
      this.handleError('Failed to get all users', error);
    }
  }

  /**
   * Get a user by ID
   * @param userId - The ID of the user
   * @returns The user details
   */
  async getUser(userId: string) {
    try {
      const response = await this.client.get(`/user.one?userId=${userId}`);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to get user with ID ${userId}`, error);
    }
  }

  /**
   * Get current user
   * @returns The current user details
   */
  async getCurrentUser() {
    try {
      const response = await this.client.get('/user.get');
      return response.data;
    } catch (error) {
      this.handleError('Failed to get current user', error);
    }
  }

  /**
   * Check if user has root access
   * @returns Whether the user has root access
   */
  async haveRootAccess() {
    try {
      const response = await this.client.get('/user.haveRootAccess');
      return response.data;
    } catch (error) {
      this.handleError('Failed to check if user has root access', error);
    }
  }

  /**
   * Update a user
   * @param userId - The ID of the user
   * @param updateData - The data to update
   * @returns The update result
   */
  async updateUser(userId: string, updateData: Record<string, any>) {
    try {
      const data = { userId, ...updateData };
      const response = await this.client.post('/user.update', data);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to update user with ID ${userId}`, error);
    }
  }

  /**
   * Remove a user
   * @param userId - The ID of the user
   * @returns The removal result
   */
  async removeUser(userId: string) {
    try {
      const response = await this.client.post('/user.remove', { userId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to remove user with ID ${userId}`, error);
    }
  }

  /**
   * Assign permissions to a user
   * @param userId - The ID of the user
   * @param permissions - The permissions to assign
   * @returns The assignment result
   */
  async assignPermissions(userId: string, permissions: Record<string, any>) {
    try {
      const data = { userId, ...permissions };
      const response = await this.client.post('/user.assignPermissions', data);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to assign permissions to user with ID ${userId}`, error);
    }
  }

  /**
   * Generate an API token
   * @param name - The name of the token
   * @returns The generated token
   */
  async generateToken(name: string) {
    try {
      const response = await this.client.post('/user.generateToken', { name });
      return response.data;
    } catch (error) {
      this.handleError('Failed to generate API token', error);
    }
  }

  /**
   * Delete an API key
   * @param keyId - The ID of the API key
   * @returns The deletion result
   */
  async deleteApiKey(keyId: string) {
    try {
      const response = await this.client.post('/user.deleteApiKey', { keyId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to delete API key with ID ${keyId}`, error);
    }
  }

  /**
   * Create an API key
   * @param name - The name of the API key
   * @returns The created API key
   */
  async createApiKey(name: string) {
    try {
      const response = await this.client.post('/user.createApiKey', { name });
      return response.data;
    } catch (error) {
      this.handleError('Failed to create API key', error);
    }
  }
  
  // MongoDB Management Endpoints
  
  /**
   * Create a MongoDB instance
   * @param projectId - The ID of the project
   * @param name - The name of the MongoDB instance
   * @param password - The password for the MongoDB instance
   * @returns The created MongoDB instance
   */
  async createMongo(projectId: string, name: string, password: string) {
    try {
      const response = await this.client.post('/mongo.create', { projectId, name, password });
      return response.data;
    } catch (error) {
      this.handleError('Failed to create MongoDB instance', error);
    }
  }

  /**
   * Get a MongoDB instance by ID
   * @param mongoId - The ID of the MongoDB instance
   * @returns The MongoDB instance details
   */
  async getMongo(mongoId: string) {
    try {
      const response = await this.client.get(`/mongo.one?mongoId=${mongoId}`);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to get MongoDB instance with ID ${mongoId}`, error);
    }
  }

  /**
   * Start a MongoDB instance
   * @param mongoId - The ID of the MongoDB instance
   * @returns The start operation result
   */
  async startMongo(mongoId: string) {
    try {
      const response = await this.client.post('/mongo.start', { mongoId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to start MongoDB instance with ID ${mongoId}`, error);
    }
  }

  /**
   * Stop a MongoDB instance
   * @param mongoId - The ID of the MongoDB instance
   * @returns The stop operation result
   */
  async stopMongo(mongoId: string) {
    try {
      const response = await this.client.post('/mongo.stop', { mongoId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to stop MongoDB instance with ID ${mongoId}`, error);
    }
  }

  /**
   * Save external port for a MongoDB instance
   * @param mongoId - The ID of the MongoDB instance
   * @param externalPort - The external port to use
   * @returns The operation result
   */
  async saveMongoExternalPort(mongoId: string, externalPort: number) {
    try {
      const response = await this.client.post('/mongo.saveExternalPort', { mongoId, externalPort });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to save external port for MongoDB instance with ID ${mongoId}`, error);
    }
  }

  /**
   * Deploy a MongoDB instance
   * @param mongoId - The ID of the MongoDB instance
   * @returns The deployment result
   */
  async deployMongo(mongoId: string) {
    try {
      const response = await this.client.post('/mongo.deploy', { mongoId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to deploy MongoDB instance with ID ${mongoId}`, error);
    }
  }

  /**
   * Change status of a MongoDB instance
   * @param mongoId - The ID of the MongoDB instance
   * @param status - The new status
   * @returns The status change result
   */
  async changeMongoStatus(mongoId: string, status: string) {
    try {
      const response = await this.client.post('/mongo.changeStatus', { mongoId, status });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to change status for MongoDB instance with ID ${mongoId}`, error);
    }
  }

  /**
   * Reload a MongoDB instance
   * @param mongoId - The ID of the MongoDB instance
   * @returns The reload operation result
   */
  async reloadMongo(mongoId: string) {
    try {
      const response = await this.client.post('/mongo.reload', { mongoId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to reload MongoDB instance with ID ${mongoId}`, error);
    }
  }

  /**
   * Remove a MongoDB instance
   * @param mongoId - The ID of the MongoDB instance
   * @returns The removal result
   */
  async removeMongo(mongoId: string) {
    try {
      const response = await this.client.post('/mongo.remove', { mongoId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to remove MongoDB instance with ID ${mongoId}`, error);
    }
  }

  /**
   * Save environment variables for a MongoDB instance
   * @param mongoId - The ID of the MongoDB instance
   * @param env - The environment variables
   * @returns The save operation result
   */
  async saveMongoEnvironment(mongoId: string, env: string) {
    try {
      const response = await this.client.post('/mongo.saveEnvironment', { mongoId, env });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to save environment for MongoDB instance with ID ${mongoId}`, error);
    }
  }

  /**
   * Update a MongoDB instance
   * @param mongoId - The ID of the MongoDB instance
   * @param updateData - The data to update
   * @returns The update result
   */
  async updateMongo(mongoId: string, updateData: Record<string, any>) {
    try {
      const data = { mongoId, ...updateData };
      const response = await this.client.post('/mongo.update', data);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to update MongoDB instance with ID ${mongoId}`, error);
    }
  }

  /**
   * Move a MongoDB instance to another project
   * @param mongoId - The ID of the MongoDB instance
   * @param projectId - The ID of the target project
   * @returns The move operation result
   */
  async moveMongo(mongoId: string, projectId: string) {
    try {
      const response = await this.client.post('/mongo.move', { mongoId, projectId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to move MongoDB instance with ID ${mongoId}`, error);
    }
  }

  /**
   * Rebuild a MongoDB instance
   * @param mongoId - The ID of the MongoDB instance
   * @returns The rebuild operation result
   */
  async rebuildMongo(mongoId: string) {
    try {
      const response = await this.client.post('/mongo.rebuild', { mongoId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to rebuild MongoDB instance with ID ${mongoId}`, error);
    }
  }
  
  // MariaDB Management Endpoints
  
  /**
   * Create a MariaDB instance
   * @param projectId - The ID of the project
   * @param name - The name of the MariaDB instance
   * @param password - The password for the MariaDB instance
   * @returns The created MariaDB instance
   */
  /**
   * Create a MariaDB instance
   * @param projectId - The ID of the project
   * @param name - The name of the MariaDB instance
   * @param password - The password for the MariaDB instance
   * @param options - Additional options
   * @returns The created MariaDB instance
   */
  async createMariadb(projectId: string, name: string, password?: string, options: Record<string, any> = {}) {
    try {
      const data: Record<string, any> = { projectId, name, ...options };
      if (password) data.password = password;
      const response = await this.client.post('/mariadb.create', data);
      return response.data;
    } catch (error) {
      this.handleError('Failed to create MariaDB instance', error);
    }
  }

  /**
   * Get a MariaDB instance by ID
   * @param mariadbId - The ID of the MariaDB instance
   * @returns The MariaDB instance details
   */
  async getMariadb(mariadbId: string) {
    try {
      const response = await this.client.get(`/mariadb.one?mariadbId=${mariadbId}`);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to get MariaDB instance with ID ${mariadbId}`, error);
    }
  }

  /**
   * Start a MariaDB instance
   * @param mariadbId - The ID of the MariaDB instance
   * @returns The start operation result
   */
  async startMariadb(mariadbId: string) {
    try {
      const response = await this.client.post('/mariadb.start', { mariadbId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to start MariaDB instance with ID ${mariadbId}`, error);
    }
  }

  /**
   * Stop a MariaDB instance
   * @param mariadbId - The ID of the MariaDB instance
   * @returns The stop operation result
   */
  async stopMariadb(mariadbId: string) {
    try {
      const response = await this.client.post('/mariadb.stop', { mariadbId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to stop MariaDB instance with ID ${mariadbId}`, error);
    }
  }

  /**
   * Save external port for a MariaDB instance
   * @param mariadbId - The ID of the MariaDB instance
   * @param externalPort - The external port to use
   * @returns The operation result
   */
  async saveMariadbExternalPort(mariadbId: string, externalPort: number) {
    try {
      const response = await this.client.post('/mariadb.saveExternalPort', { mariadbId, externalPort });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to save external port for MariaDB instance with ID ${mariadbId}`, error);
    }
  }

  /**
   * Deploy a MariaDB instance
   * @param mariadbId - The ID of the MariaDB instance
   * @returns The deployment result
   */
  async deployMariadb(mariadbId: string) {
    try {
      const response = await this.client.post('/mariadb.deploy', { mariadbId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to deploy MariaDB instance with ID ${mariadbId}`, error);
    }
  }

  /**
   * Change status of a MariaDB instance
   * @param mariadbId - The ID of the MariaDB instance
   * @param status - The new status
   * @returns The status change result
   */
  async changeMariadbStatus(mariadbId: string, status: string) {
    try {
      const response = await this.client.post('/mariadb.changeStatus', { mariadbId, status });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to change status for MariaDB instance with ID ${mariadbId}`, error);
    }
  }

  /**
   * Remove a MariaDB instance
   * @param mariadbId - The ID of the MariaDB instance
   * @returns The removal result
   */
  async removeMariadb(mariadbId: string) {
    try {
      const response = await this.client.post('/mariadb.remove', { mariadbId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to remove MariaDB instance with ID ${mariadbId}`, error);
    }
  }

  /**
   * Save environment variables for a MariaDB instance
   * @param mariadbId - The ID of the MariaDB instance
   * @param env - The environment variables
   * @returns The save operation result
   */
  async saveMariadbEnvironment(mariadbId: string, env: string) {
    try {
      const response = await this.client.post('/mariadb.saveEnvironment', { mariadbId, env });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to save environment for MariaDB instance with ID ${mariadbId}`, error);
    }
  }

  /**
   * Reload a MariaDB instance
   * @param mariadbId - The ID of the MariaDB instance
   * @returns The reload operation result
   */
  async reloadMariadb(mariadbId: string) {
    try {
      const response = await this.client.post('/mariadb.reload', { mariadbId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to reload MariaDB instance with ID ${mariadbId}`, error);
    }
  }

  /**
   * Update a MariaDB instance
   * @param mariadbId - The ID of the MariaDB instance
   * @param updateData - The data to update
   * @returns The update result
   */
  async updateMariadb(mariadbId: string, updateData: Record<string, any>) {
    try {
      const data = { mariadbId, ...updateData };
      const response = await this.client.post('/mariadb.update', data);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to update MariaDB instance with ID ${mariadbId}`, error);
    }
  }

  /**
   * Move a MariaDB instance to another project
   * @param mariadbId - The ID of the MariaDB instance
   * @param projectId - The ID of the target project
   * @returns The move operation result
   */
  async moveMariadb(mariadbId: string, projectId: string) {
    try {
      const response = await this.client.post('/mariadb.move', { mariadbId, projectId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to move MariaDB instance with ID ${mariadbId}`, error);
    }
  }

  /**
   * Rebuild a MariaDB instance
   * @param mariadbId - The ID of the MariaDB instance
   * @returns The rebuild operation result
   */
  async rebuildMariadb(mariadbId: string) {
    try {
      const response = await this.client.post('/mariadb.rebuild', { mariadbId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to rebuild MariaDB instance with ID ${mariadbId}`, error);
    }
  }
  
  // Docker Compose Management Endpoints
  
  /**
   * Create a Docker Compose configuration
   * @param projectId - The ID of the project
   * @param name - The name of the Docker Compose configuration
   * @param composeFile - The Docker Compose file content
   * @returns The created Docker Compose configuration
   */
  async createCompose(projectId: string, name: string, composeFile: string) {
    try {
      const response = await this.client.post('/compose.create', { projectId, name, composeFile });
      return response.data;
    } catch (error) {
      this.handleError('Failed to create Docker Compose configuration', error);
    }
  }

  /**
   * Get a Docker Compose configuration by ID
   * @param composeId - The ID of the Docker Compose configuration
   * @returns The Docker Compose configuration details
   */
  async getCompose(composeId: string) {
    try {
      const response = await this.client.get(`/compose.one?composeId=${composeId}`);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to get Docker Compose configuration with ID ${composeId}`, error);
    }
  }

  /**
   * Update a Docker Compose configuration
   * @param composeId - The ID of the Docker Compose configuration
   * @param updateData - The data to update
   * @returns The update result
   */
  async updateCompose(composeId: string, updateData: Record<string, any>) {
    try {
      const data = { composeId, ...updateData };
      const response = await this.client.post('/compose.update', data);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to update Docker Compose configuration with ID ${composeId}`, error);
    }
  }

  /**
   * Delete a Docker Compose configuration
   * @param composeId - The ID of the Docker Compose configuration
   * @returns The delete operation result
   */
  async deleteCompose(composeId: string) {
    try {
      const response = await this.client.post('/compose.delete', { composeId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to delete Docker Compose configuration with ID ${composeId}`, error);
    }
  }

  /**
   * Clean queues for a Docker Compose configuration
   * @param composeId - The ID of the Docker Compose configuration
   * @returns The clean operation result
   */
  async cleanComposeQueues(composeId: string) {
    try {
      const response = await this.client.post('/compose.cleanQueues', { composeId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to clean queues for Docker Compose configuration with ID ${composeId}`, error);
    }
  }

  /**
   * Load services from a Docker Compose configuration
   * @param composeId - The ID of the Docker Compose configuration
   * @returns The services in the Docker Compose configuration
   */
  async loadComposeServices(composeId: string) {
    try {
      const response = await this.client.get(`/compose.loadServices?composeId=${composeId}`);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to load services for Docker Compose configuration with ID ${composeId}`, error);
    }
  }

  /**
   * Deploy a Docker Compose configuration
   * @param composeId - The ID of the Docker Compose configuration
   * @returns The deployment result
   */
  async deployCompose(composeId: string) {
    try {
      const response = await this.client.post('/compose.deploy', { composeId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to deploy Docker Compose configuration with ID ${composeId}`, error);
    }
  }

  /**
   * Redeploy a Docker Compose configuration
   * @param composeId - The ID of the Docker Compose configuration
   * @returns The redeployment result
   */
  async redeployCompose(composeId: string) {
    try {
      const response = await this.client.post('/compose.redeploy', { composeId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to redeploy Docker Compose configuration with ID ${composeId}`, error);
    }
  }

  /**
   * Stop a Docker Compose configuration
   * @param composeId - The ID of the Docker Compose configuration
   * @returns The stop operation result
   */
  async stopCompose(composeId: string) {
    try {
      const response = await this.client.post('/compose.stop', { composeId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to stop Docker Compose configuration with ID ${composeId}`, error);
    }
  }

  /**
   * Start a Docker Compose configuration
   * @param composeId - The ID of the Docker Compose configuration
   * @returns The start operation result
   */
  async startCompose(composeId: string) {
    try {
      const response = await this.client.post('/compose.start', { composeId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to start Docker Compose configuration with ID ${composeId}`, error);
    }
  }

  /**
   * Get Docker Compose templates
   * @returns List of Docker Compose templates
   */
  async getComposeTemplates() {
    try {
      const response = await this.client.get('/compose.templates');
      return response.data;
    } catch (error) {
      this.handleError('Failed to get Docker Compose templates', error);
    }
  }

  /**
   * Move a Docker Compose configuration to another project
   * @param composeId - The ID of the Docker Compose configuration
   * @param projectId - The ID of the target project
   * @returns The move operation result
   */
  async moveCompose(composeId: string, projectId: string) {
    try {
      const response = await this.client.post('/compose.move', { composeId, projectId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to move Docker Compose configuration with ID ${composeId}`, error);
    }
  }

  /**
   * Import a Docker Compose configuration
   * @param projectId - The ID of the project
   * @param name - The name of the Docker Compose configuration
   * @param composeFile - The Docker Compose file content
   * @returns The import result
   */
  async importCompose(projectId: string, name: string, composeFile: string) {
    try {
      const response = await this.client.post('/compose.import', { projectId, name, composeFile });
      return response.data;
    } catch (error) {
      this.handleError('Failed to import Docker Compose configuration', error);
    }
  }
  
  // Notification Management Endpoints
  
  /**
   * Create a Slack notification channel
   * @param name - The name of the notification channel
   * @param webhookUrl - The Slack webhook URL
   * @returns The created notification channel
   */
  async createSlackNotification(name: string, webhookUrl: string) {
    try {
      const response = await this.client.post('/notification.createSlack', { name, webhookUrl });
      return response.data;
    } catch (error) {
      this.handleError('Failed to create Slack notification channel', error);
    }
  }

  /**
   * Update a Slack notification channel
   * @param notificationId - The ID of the notification channel
   * @param updateData - The data to update
   * @returns The update result
   */
  async updateSlackNotification(notificationId: string, updateData: Record<string, any>) {
    try {
      const data = { notificationId, ...updateData };
      const response = await this.client.post('/notification.updateSlack', data);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to update Slack notification channel with ID ${notificationId}`, error);
    }
  }

  /**
   * Test a Slack notification channel connection
   * @param webhookUrl - The Slack webhook URL
   * @returns The test result
   */
  async testSlackConnection(webhookUrl: string) {
    try {
      const response = await this.client.post('/notification.testSlackConnection', { webhookUrl });
      return response.data;
    } catch (error) {
      this.handleError('Failed to test Slack connection', error);
    }
  }

  /**
   * Create a Discord notification channel
   * @param name - The name of the notification channel
   * @param webhookUrl - The Discord webhook URL
   * @returns The created notification channel
   */
  async createDiscordNotification(name: string, webhookUrl: string) {
    try {
      const response = await this.client.post('/notification.createDiscord', { name, webhookUrl });
      return response.data;
    } catch (error) {
      this.handleError('Failed to create Discord notification channel', error);
    }
  }

  /**
   * Get a notification channel by ID
   * @param notificationId - The ID of the notification channel
   * @returns The notification channel details
   */
  async getNotification(notificationId: string) {
    try {
      const response = await this.client.get(`/notification.one?notificationId=${notificationId}`);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to get notification channel with ID ${notificationId}`, error);
    }
  }

  /**
   * Get all notification channels
   * @returns List of all notification channels
   */
  async getAllNotifications() {
    try {
      const response = await this.client.get('/notification.all');
      return response.data;
    } catch (error) {
      this.handleError('Failed to get all notification channels', error);
    }
  }

  /**
   * Remove a notification channel
   * @param notificationId - The ID of the notification channel
   * @returns The removal result
   */
  async removeNotification(notificationId: string) {
    try {
      const response = await this.client.post('/notification.remove', { notificationId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to remove notification channel with ID ${notificationId}`, error);
    }
  }
  
  // SSH Key Management Endpoints
  
  /**
   * Create an SSH key
   * @param name - The name of the SSH key
   * @param publicKey - The public key content
   * @param privateKey - The private key content (optional)
   * @returns The created SSH key
   */
  async createSshKey(name: string, publicKey: string, privateKey?: string) {
    try {
      const data: Record<string, any> = { name, publicKey };
      if (privateKey) data.privateKey = privateKey;
      const response = await this.client.post('/sshKey.create', data);
      return response.data;
    } catch (error) {
      this.handleError('Failed to create SSH key', error);
    }
  }

  /**
   * Get an SSH key by ID
   * @param sshKeyId - The ID of the SSH key
   * @returns The SSH key details
   */
  async getSshKey(sshKeyId: string) {
    try {
      const response = await this.client.get(`/sshKey.one?sshKeyId=${sshKeyId}`);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to get SSH key with ID ${sshKeyId}`, error);
    }
  }

  /**
   * Get all SSH keys
   * @returns List of all SSH keys
   */
  async getAllSshKeys() {
    try {
      const response = await this.client.get('/sshKey.all');
      return response.data;
    } catch (error) {
      this.handleError('Failed to get all SSH keys', error);
    }
  }

  /**
   * Generate a new SSH key pair
   * @param name - The name of the SSH key
   * @returns The generated SSH key pair
   */
  async generateSshKey(name: string) {
    try {
      const response = await this.client.post('/sshKey.generate', { name });
      return response.data;
    } catch (error) {
      this.handleError('Failed to generate SSH key', error);
    }
  }

  /**
   * Update an SSH key
   * @param sshKeyId - The ID of the SSH key
   * @param updateData - The data to update
   * @returns The update result
   */
  async updateSshKey(sshKeyId: string, updateData: Record<string, any>) {
    try {
      const data = { sshKeyId, ...updateData };
      const response = await this.client.post('/sshKey.update', data);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to update SSH key with ID ${sshKeyId}`, error);
    }
  }

  /**
   * Remove an SSH key
   * @param sshKeyId - The ID of the SSH key
   * @returns The removal result
   */
  async removeSshKey(sshKeyId: string) {
    try {
      const response = await this.client.post('/sshKey.remove', { sshKeyId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to remove SSH key with ID ${sshKeyId}`, error);
    }
  }
  
  // Server Management Endpoints
  
  /**
   * Create a server
   * @param name - The name of the server
   * @param ip - The IP address of the server
   * @param sshKeyId - The ID of the SSH key to use
   * @param options - Additional options
   * @returns The created server
   */
  async createServer(name: string, ip: string, sshKeyId: string, options: Record<string, any> = {}) {
    try {
      const data = { name, ip, sshKeyId, ...options };
      const response = await this.client.post('/server.create', data);
      return response.data;
    } catch (error) {
      this.handleError('Failed to create server', error);
    }
  }

  /**
   * Get a server by ID
   * @param serverId - The ID of the server
   * @returns The server details
   */
  async getServer(serverId: string) {
    try {
      const response = await this.client.get(`/server.one?serverId=${serverId}`);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to get server with ID ${serverId}`, error);
    }
  }

  /**
   * Get all servers
   * @returns List of all servers
   */
  async getAllServers() {
    try {
      const response = await this.client.get('/server.all');
      return response.data;
    } catch (error) {
      this.handleError('Failed to get all servers', error);
    }
  }

  /**
   * Count servers
   * @returns The number of servers
   */
  async countServers() {
    try {
      const response = await this.client.get('/server.count');
      return response.data;
    } catch (error) {
      this.handleError('Failed to count servers', error);
    }
  }

  /**
   * Setup a server
   * @param serverId - The ID of the server
   * @returns The setup result
   */
  async setupServer(serverId: string) {
    try {
      const response = await this.client.post('/server.setup', { serverId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to setup server with ID ${serverId}`, error);
    }
  }

  /**
   * Validate a server connection
   * @param serverId - The ID of the server
   * @returns The validation result
   */
  async validateServer(serverId: string) {
    try {
      const response = await this.client.get(`/server.validate?serverId=${serverId}`);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to validate server with ID ${serverId}`, error);
    }
  }

  /**
   * Check server security
   * @param serverId - The ID of the server
   * @returns The security check result
   */
  async checkServerSecurity(serverId: string) {
    try {
      const response = await this.client.get(`/server.security?serverId=${serverId}`);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to check security for server with ID ${serverId}`, error);
    }
  }

  /**
   * Setup monitoring for a server
   * @param serverId - The ID of the server
   * @returns The setup result
   */
  async setupServerMonitoring(serverId: string) {
    try {
      const response = await this.client.post('/server.setupMonitoring', { serverId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to setup monitoring for server with ID ${serverId}`, error);
    }
  }

  /**
   * Remove a server
   * @param serverId - The ID of the server
   * @returns The removal result
   */
  async removeServer(serverId: string) {
    try {
      const response = await this.client.post('/server.remove', { serverId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to remove server with ID ${serverId}`, error);
    }
  }

  /**
   * Update a server
   * @param serverId - The ID of the server
   * @param updateData - The data to update
   * @returns The update result
   */
  async updateServer(serverId: string, updateData: Record<string, any>) {
    try {
      const data = { serverId, ...updateData };
      const response = await this.client.post('/server.update', data);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to update server with ID ${serverId}`, error);
    }
  }

  /**
   * Get server public IP
   * @param serverId - The ID of the server
   * @returns The server's public IP
   */
  async getServerPublicIp(serverId: string) {
    try {
      const response = await this.client.get(`/server.publicIp?serverId=${serverId}`);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to get public IP for server with ID ${serverId}`, error);
    }
  }

  /**
   * Get server metrics
   * @param serverId - The ID of the server
   * @returns The server metrics
   */
  async getServerMetrics(serverId: string) {
    try {
      const response = await this.client.get(`/server.getServerMetrics?serverId=${serverId}`);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to get metrics for server with ID ${serverId}`, error);
    }
  }
  
  // Admin Endpoints
  
  /**
   * Setup monitoring for the admin dashboard
   * @param serverId - The ID of the server
   * @returns The setup result
   */
  async setupAdminMonitoring(serverId: string) {
    try {
      const response = await this.client.post('/admin.setupMonitoring', { serverId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to setup admin monitoring for server with ID ${serverId}`, error);
    }
  }
  
  // Webhook Endpoints
  
  /**
   * Create a webhook
   * @param name - The name of the webhook
   * @param url - The webhook URL
   * @param events - Array of events to trigger the webhook
   * @param options - Additional options
   * @returns The created webhook
   */
  async createWebhook(name: string, url: string, events: string[], options: Record<string, any> = {}) {
    try {
      const data = { name, url, events, ...options };
      const response = await this.client.post('/webhook.create', data);
      return response.data;
    } catch (error) {
      this.handleError('Failed to create webhook', error);
    }
  }

  /**
   * Get a webhook by ID
   * @param webhookId - The ID of the webhook
   * @returns The webhook details
   */
  /**
   * Get a webhook by ID
   * @param webhookId - The ID of the webhook
   * @returns The webhook details
   */
  async getWebhook(webhookId: string) {
    try {
      const response = await this.client.get(`/webhook.one?webhookId=${webhookId}`);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to get webhook with ID ${webhookId}`, error);
    }
  }

  /**
   * Get all webhooks
   * @returns List of all webhooks
   */
  async getAllWebhooks() {
    try {
      const response = await this.client.get('/webhook.all');
      return response.data;
    } catch (error) {
      this.handleError('Failed to get all webhooks', error);
    }
  }

  /**
   * Update a webhook
   * @param webhookId - The ID of the webhook
   * @param updateData - The data to update
   * @returns The update result
   */
  async updateWebhook(webhookId: string, updateData: Record<string, any>) {
    try {
      const data = { webhookId, ...updateData };
      const response = await this.client.post('/webhook.update', data);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to update webhook with ID ${webhookId}`, error);
    }
  }

  /**
   * Remove a webhook
   * @param webhookId - The ID of the webhook
   * @returns The removal result
   */
  async removeWebhook(webhookId: string) {
    try {
      const response = await this.client.post('/webhook.remove', { webhookId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to remove webhook with ID ${webhookId}`, error);
    }
  }
  
  // Volume Management Endpoints
  
  /**
   * Create a volume
   * @param name - The name of the volume
   * @param serverId - The ID of the server
   * @param options - Additional options
   * @returns The created volume
   */
  async createVolume(name: string, serverId: string, options: Record<string, any> = {}) {
    try {
      const data = { name, serverId, ...options };
      const response = await this.client.post('/volume.create', data);
      return response.data;
    } catch (error) {
      this.handleError('Failed to create volume', error);
    }
  }

  /**
   * Get a volume by ID
   * @param volumeId - The ID of the volume
   * @returns The volume details
   */
  async getVolume(volumeId: string) {
    try {
      const response = await this.client.get(`/volume.one?volumeId=${volumeId}`);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to get volume with ID ${volumeId}`, error);
    }
  }

  /**
   * Get all volumes
   * @param serverId - Optional server ID to filter by
   * @returns List of volumes
   */
  async getAllVolumes(serverId?: string) {
    try {
      const url = serverId ? `/volume.all?serverId=${serverId}` : '/volume.all';
      const response = await this.client.get(url);
      return response.data;
    } catch (error) {
      this.handleError('Failed to get all volumes', error);
    }
  }

  /**
   * Remove a volume
   * @param volumeId - The ID of the volume
   * @returns The removal result
   */
  async removeVolume(volumeId: string) {
    try {
      const response = await this.client.post('/volume.remove', { volumeId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to remove volume with ID ${volumeId}`, error);
    }
  }
  
  // Cron Job Management Endpoints
  
  /**
   * Create a cron job
   * @param name - The name of the cron job
   * @param schedule - The cron schedule expression
   * @param command - The command to execute
   * @param serverId - The ID of the server
   * @param options - Additional options
   * @returns The created cron job
   */
  async createCronJob(name: string, schedule: string, command: string, serverId: string, options: Record<string, any> = {}) {
    try {
      const data = { name, schedule, command, serverId, ...options };
      const response = await this.client.post('/cron.create', data);
      return response.data;
    } catch (error) {
      this.handleError('Failed to create cron job', error);
    }
  }

  // Removed duplicate functions - these are already defined elsewhere in the class

  /**
   * Update a cron job
   * @param cronId - The ID of the cron job
   * @param updateData - The data to update
   * @returns The update result
   */
  async updateCronJob(cronId: string, updateData: Record<string, any>) {
    try {
      const data = { cronId, ...updateData };
      const response = await this.client.post('/cron.update', data);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to update cron job with ID ${cronId}`, error);
    }
  }

  /**
   * Remove a cron job
   * @param cronId - The ID of the cron job
   * @returns The removal result
   */
  async removeCronJob(cronId: string) {
    try {
      const response = await this.client.post('/cron.remove', { cronId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to remove cron job with ID ${cronId}`, error);
    }
  }
  
  // Logs Management Endpoints
  
  /**
   * Get application logs
   * @param applicationId - The ID of the application
   * @param options - Additional options like limit, offset, etc.
   * @returns The application logs
   */
  /**
   * Get application logs
   * @param applicationId - The ID of the application
   * @param options - Additional options like limit, offset, lines, etc.
   * @param useLogsEndpoint - Whether to use the logs.application endpoint (true) or application.logs endpoint (false)
   * @returns The application logs
   */
  async getApplicationLogs(applicationId: string, options: Record<string, any> = {}, useLogsEndpoint: boolean = true) {
    try {
      if (useLogsEndpoint) {
        // Use the logs.application endpoint (from the logs management section)
        const params = new URLSearchParams({ applicationId, ...options }).toString();
        const response = await this.client.get(`/logs.application?${params}`);
        return response.data;
      } else {
        // Use the application.logs endpoint (from the application management section)
        const params: Record<string, any> = { applicationId };
        Object.assign(params, options);
        const response = await this.client.get('/application.logs', { params });
        return response.data;
      }
    } catch (error) {
      this.handleError(`Failed to get logs for application with ID ${applicationId}`, error);
    }
  }

  /**
   * Get server logs
   * @param serverId - The ID of the server
   * @param options - Additional options like limit, offset, etc.
   * @returns The server logs
   */
  async getServerLogs(serverId: string, options: Record<string, any> = {}) {
    try {
      const params = new URLSearchParams({ serverId, ...options }).toString();
      const response = await this.client.get(`/logs.server?${params}`);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to get logs for server with ID ${serverId}`, error);
    }
  }

  /**
   * Get system logs
   * @param options - Options like limit, offset, etc.
   * @returns The system logs
   */
  async getSystemLogs(options: Record<string, any> = {}) {
    try {
      const params = new URLSearchParams(options).toString();
      const response = await this.client.get(`/logs.system?${params}`);
      return response.data;
    } catch (error) {
      this.handleError('Failed to get system logs', error);
    }
  }
  
  // Web Server Management Endpoints
  
  /**
   * Create a web server configuration
   * @param name - The name of the web server
   * @param serverId - The ID of the server
   * @param options - Additional options
   * @returns The created web server configuration
   */
  async createWebServer(name: string, serverId: string, options: Record<string, any> = {}) {
    try {
      const data = { name, serverId, ...options };
      const response = await this.client.post('/webserver.create', data);
      return response.data;
    } catch (error) {
      this.handleError('Failed to create web server configuration', error);
    }
  }

  // Removed duplicate functions - these are already defined elsewhere in the class

  /**
   * Update a web server configuration
   * @param webserverId - The ID of the web server configuration
   * @param updateData - The data to update
   * @returns The update result
   */
  async updateWebServer(webserverId: string, updateData: Record<string, any>) {
    try {
      const data = { webserverId, ...updateData };
      const response = await this.client.post('/webserver.update', data);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to update web server configuration with ID ${webserverId}`, error);
    }
  }

  /**
   * Remove a web server configuration
   * @param webserverId - The ID of the web server configuration
   * @returns The removal result
   */
  async removeWebServer(webserverId: string) {
    try {
      const response = await this.client.post('/webserver.remove', { webserverId });
      return response.data;
    } catch (error) {
      this.handleError(`Failed to remove web server configuration with ID ${webserverId}`, error);
    }
  }
  // Note: MariaDB Management Endpoints are already implemented earlier in the file
  
  /**
   * Get Docker containers
   * @param serverId - Optional server ID
   * @returns List of Docker containers
   */
  async getDockerContainers(serverId?: string) {
    try {
      const params: Record<string, string> = {};
      if (serverId) {
        params.serverId = serverId;
      }
      const response = await this.client.get('/docker.getContainers', { params });
      return response.data;
    } catch (error) {
      this.handleError('Failed to get Docker containers', error);
    }
  }

  /**
   * Restart Docker container
   * @param containerId - The ID of the container to restart
   * @returns Restart result
   */
  async restartDockerContainer(containerId: string) {
    try {
      const response = await this.client.post('/docker.restartContainer', { containerId });
      return response.data;
    } catch (error) {
      this.handleError('Failed to restart Docker container', error);
    }
  }

  /**
   * Get Docker configuration
   * @param containerId - The ID of the container
   * @param serverId - Optional server ID
   * @returns Docker configuration
   */
  async getDockerConfig(containerId: string, serverId?: string) {
    try {
      const params: Record<string, string> = { containerId };
      if (serverId) {
        params.serverId = serverId;
      }
      const response = await this.client.get('/docker.getConfig', { params });
      return response.data;
    } catch (error) {
      this.handleError('Failed to get Docker configuration', error);
    }
  }

  /**
   * Get Docker containers by application name match
   * @param appName - The name of the application
   * @param appType - Optional application type
   * @param serverId - Optional server ID
   * @returns Docker containers
   */
  async getDockerContainersByAppNameMatch(appName: string, appType?: string, serverId?: string) {
    try {
      const params: Record<string, string> = { appName };
      if (appType) {
        params.appType = appType;
      }
      if (serverId) {
        params.serverId = serverId;
      }
      const response = await this.client.get('/docker.getContainersByAppNameMatch', { params });
      return response.data;
    } catch (error) {
      this.handleError('Failed to get Docker containers by application name match', error);
    }
  }

  /**
   * Get Docker containers by application label
   * @param appName - The name of the application
   * @param type - The type of container (e.g., 'standalone')
   * @param serverId - Optional server ID
   * @returns Docker containers
   */
  async getDockerContainersByAppLabel(appName: string, type: string, serverId?: string) {
    try {
      const params: Record<string, string> = { appName, type };
      if (serverId) {
        params.serverId = serverId;
      }
      const response = await this.client.get('/docker.getContainersByAppLabel', { params });
      return response.data;
    } catch (error) {
      this.handleError('Failed to get Docker containers by application label', error);
    }
  }

  /**
   * Get stack containers by application name
   * @param appName - The name of the application
   * @param serverId - Optional server ID
   * @returns Docker containers
   */
  async getStackContainersByAppName(appName: string, serverId?: string) {
    try {
      const params: Record<string, string> = { appName };
      if (serverId) {
        params.serverId = serverId;
      }
      const response = await this.client.get('/docker.getStackContainersByAppName', { params });
      return response.data;
    } catch (error) {
      this.handleError('Failed to get stack containers by application name', error);
    }
  }
  
  // Admin Endpoints
  
  /**
   * Setup monitoring
   * @param metricsConfig - Metrics configuration
   * @returns Setup result
   */
  async setupMonitoring(metricsConfig: Record<string, any> = {}) {
    try {
      const response = await this.client.post('/admin.setupMonitoring', { metricsConfig });
      return response.data;
    } catch (error) {
      this.handleError('Failed to setup monitoring', error);
    }
  }
  
  // Diagnostic Endpoints
  
  /**
   * Test an endpoint to check if it's responding correctly
   * @param url - The URL to test
   * @returns Response status and headers
   */
  async testEndpoint(url: string) {
    try {
      const response = await axios.head(url, {
        validateStatus: () => true, // Accept any status code
        timeout: 10000 // 10 second timeout
      });
      
      return {
        url,
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
        error: null
      };
    } catch (error) {
      return {
        url,
        status: null,
        statusText: null,
        headers: null,
        error: axios.isAxiosError(error) ? error.message : String(error)
      };
    }
  }

  /**
   * Diagnose a 502 Bad Gateway error by testing multiple endpoints and checking connectivity
   * @param domain - The domain experiencing 502 errors
   * @returns Diagnostic information
   */
  async diagnose502Error(domain: string) {
    const results: Record<string, any> = {};
    
    // Test main domain and common endpoints
    const endpoints = [
      `https://${domain}`,
      `https://${domain}/api`,
      `https://${domain}/login`,
      `https://${domain}/health`,
      `https://${domain}/status`
    ];
    
    for (const endpoint of endpoints) {
      results[endpoint] = await this.testEndpoint(endpoint);
    }
    
    return {
      domain,
      timestamp: new Date().toISOString(),
      endpointTests: results,
      recommendations: this.generate502Recommendations(results)
    };
  }

  /**
   * Get application logs
   * @param applicationId - The ID of the application
   * @param lines - Number of log lines to retrieve (optional)
   * @returns Application logs
   */
  // This method has been merged with the getApplicationLogs implementation above

  /**
   * Get application status
   * @param applicationId - The ID of the application
   * @returns Application status
   */
  async getApplicationStatus(applicationId: string) {
    try {
      const response = await this.client.get(`/application.status?applicationId=${applicationId}`);
      return response.data;
    } catch (error) {
      this.handleError(`Failed to get status for application ${applicationId}`, error);
    }
  }

  /**
   * Generate recommendations based on 502 error test results
   * @param results - Test results from diagnose502Error
   * @returns Recommendations for fixing the issue
   */
  private generate502Recommendations(results: any) {
    const allEndpoints502 = Object.values(results).every((result: any) => 
      result.status === 502 || (result.error && result.error.includes('502'))
    );
    
    if (allEndpoints502) {
      return [
        'All endpoints are returning 502 Bad Gateway errors, which suggests:',
        '1. The backend application might not be running',
        '2. There could be a proxy configuration issue in Traefik/Caddy',
        '3. Network connectivity between the proxy and backend might be broken',
        '4. Check application logs on the remote server',
        '5. Verify the application is listening on the expected port',
        '6. Restart the application and/or proxy service'
      ];
    }
    
    // Add more specific recommendations based on patterns in the results
    return [
      'Some endpoints are returning 502 errors, which suggests:',
      '1. Check specific route handlers in your application',
      '2. Look for partial outages or resource constraints',
      '3. Check application logs for specific endpoint errors'
    ];
  }
  
  /**
   * Handle errors from API calls
   * @param message - Error message
   * @param error - Error object
   * @param throwError - Whether to throw an error (default: true)
   * @returns null if throwError is false, otherwise throws an error
   */
  private handleError(message: string, error: any, throwError: boolean = true) {
    console.error(message);
    if (error.response) {
      console.error(`Status: ${error.response.status}`);
      console.error(`Data: ${JSON.stringify(error.response.data)}`);
      
      // Provide more specific error messages based on status code
      if (error.response.status === 401) {
        console.error('Authentication failed. Please check your API key.');
      } else if (error.response.status === 403) {
        console.error('Permission denied. Your API key may not have access to this resource.');
      } else if (error.response.status === 404) {
        console.error('Resource not found. Please check the endpoint URL.');
      } else if (error.response.status >= 500) {
        console.error('Server error. The Dokploy API may be experiencing issues.');
      }
    } else if (error.request) {
      console.error('No response received. The Dokploy API may be unreachable.');
    } else {
      console.error(`Error: ${error.message}`);
    }
    
    if (throwError) {
      throw new Error(message);
    }
    
    return null;
  }
}
