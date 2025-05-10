/**
 * Consolidated Tools Schema
 * 
 * This file defines a smaller set of consolidated tools that can handle multiple operations
 * through middleware, making it easier for LLMs to understand and use the API.
 */

// Define tool categories for better organization
export const toolCategories = {
  core: 'Core management tools for projects, applications, and infrastructure',
  infrastructure: 'Tools for managing servers, services, and resources',
  operations: 'Operational tools for deploying, monitoring, and maintaining applications',
  data: 'Tools for working with databases and data services',
  system: 'System management and diagnostics for the MCP itself'
};

// Define a smaller set of more powerful consolidated tools
export const toolSchemas = {
  /**
   * CORE MANAGEMENT TOOLS (Projects & Applications)
   */
  dokploy_project: {
    description: 'Manage projects in Dokploy (list, get, create, update, delete)',
    category: 'core',
    parameters: {
      action: 'Action to perform: list, get, create, update, delete',
      projectId: 'Required for get, update, delete: ID of the project',
      name: 'Required for create: Name of the project',
      description: 'Optional for create/update: Description of the project',
      env: 'Optional for create/update: Environment variables'
    }
  },
  
  dokploy_application: {
    description: 'Manage applications within projects (list, get, create, update, delete, deploy, restart, stop, start)',
    category: 'core',
    parameters: {
      action: 'Action to perform: list, get, create, update, delete, deploy, restart, stop, start, redeploy',
      projectId: 'Required for list: ID of the project containing applications',
      applicationId: 'Required for most actions: ID of the application',
      name: 'Required for create: Name of the application',
      appName: 'Required for create: Application identifier name',
      description: 'Optional for create/update: Description of the application',
      serverId: 'Optional for create: Server ID to deploy to',
      env: 'Optional for create/update: Environment variables'
    }
  },
  
  /**
   * INFRASTRUCTURE TOOLS (Servers, Docker, Volumes)
   */
  dokploy_server: {
    description: 'Manage Dokploy servers (list, get, create, update, delete, setup, validate)',
    category: 'infrastructure',
    parameters: {
      action: 'Action to perform: list, get, create, update, delete, setup, validate, security',
      serverId: 'Required for most actions: ID of the server',
      name: 'Required for create: Name of the server',
      ip: 'Required for create: IP address of the server',
      sshKeyId: 'Required for create: ID of the SSH key to use',
      adminUsername: 'Optional for create: Admin username'
    }
  },
  
  dokploy_docker: {
    description: 'Manage Docker containers and resources',
    category: 'infrastructure',
    parameters: {
      action: 'Action to perform: list, restart, get_config, find_by_app, find_by_label, find_stack',
      serverId: 'Optional: Server ID to target',
      containerId: 'Required for restart/get_config: Container ID',
      appName: 'Required for find operations: Application name to search for',
      type: 'Required for find_by_label: Type of container to find',
      appType: 'Optional for find_by_app: Application type'
    }
  },
  
  dokploy_domain: {
    description: 'Manage domains and certificates',
    category: 'infrastructure',
    parameters: {
      action: 'Action to perform on domains: list, get, create, update, delete, validate, generate',
      domainId: 'Required for get, update, delete: Domain ID',
      applicationId: 'Required for create: Application ID to associate domain with',
      domain: 'Required for create/validate: Domain name',
      certId: 'Optional: Certificate ID to use'
    }
  },
  
  /**
   * OPERATIONS TOOLS (Monitoring, Logs, Diagnostics)
   */
  dokploy_monitoring: {
    description: 'Monitor applications, servers, and resources',
    category: 'operations',
    parameters: {
      action: 'Action to perform: app_status, app_logs, server_metrics, setup',
      applicationId: 'Required for app operations: Application ID',
      serverId: 'Required for server operations: Server ID',
      lines: 'Optional for logs: Number of log lines to retrieve',
      metricsConfig: 'Optional for setup: Metrics configuration'
    }
  },
  
  dokploy_diagnostics: {
    description: 'Diagnostic tools for troubleshooting',
    category: 'operations',
    parameters: {
      action: 'Action to perform: test_endpoint, diagnose_502, check_security',
      url: 'Required for test_endpoint: URL to test',
      domain: 'Required for diagnose_502: Domain experiencing errors',
      serverId: 'Required for check_security: Server ID to check'
    }
  },
  
  dokploy_deployment: {
    description: 'Deployment and CI/CD operations',
    category: 'operations',
    parameters: {
      action: 'Action to perform: deploy, redeploy, rollback',
      resourceType: 'Type of resource: application, database, compose',
      resourceId: 'ID of the resource to deploy',
      version: 'Optional for rollback: Version to roll back to'
    }
  },
  
  /**
   * DATA SERVICES (Databases and Storage)
   */
  dokploy_database: {
    description: 'Unified interface for managing all database types (MySQL, PostgreSQL, MongoDB, Redis, MariaDB)',
    category: 'data',
    parameters: {
      action: 'Action to perform: create, get, start, stop, deploy, update, delete, move, reload, rebuild',
      type: 'Database type: mysql, postgres, mongo, redis, mariadb',
      databaseId: 'Required for most actions: Database ID',
      projectId: 'Required for create/move: Project ID',
      name: 'Required for create: Database name',
      password: 'Optional for create: Database password',
      externalPort: 'Optional: External port for database access'
    }
  },
  
  dokploy_backup: {
    description: 'Manage database backups',
    category: 'data',
    parameters: {
      action: 'Action to perform: create, get, list, update, delete, manual',
      backupId: 'Required for get, update, delete: Backup ID',
      databaseId: 'Required for manual: Database ID to backup',
      databaseType: 'Required for manual: Type of database (mysql, postgres, etc.)',
      projectId: 'Required for create: Project ID',
      name: 'Required for create: Backup name'
    }
  },
  
  /**
   * SYSTEM TOOLS (MCP Management)
   */
  dokploy_system: {
    description: 'System management tools for the MCP itself',
    category: 'system',
    parameters: {
      action: 'Action to perform: status, clear_cache, reset_circuit_breaker, metrics',
      detail: 'Optional: Level of detail to include (basic, full)'
    }
  }
};
