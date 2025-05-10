# Dokploy MCP Server

A Model Context Protocol (MCP) server that provides a standardized interface for interacting with the Dokploy API directly from LLMs and AI assistants like Windsurf AI. This server acts as a middleware that translates API requests into a format that can be understood by the Dokploy platform.

## Features

- **Comprehensive API Coverage**: Provides access to all Dokploy API endpoints through a simplified interface
- **Categorized Tool Groups**: Tools are organized by function (Docker, Projects, Applications, Databases, etc.)
- **Parameter Validation**: Built-in validation for required parameters 
- **Error Handling**: Detailed error messages for troubleshooting
- **Health Endpoint**: Simple status check endpoint at /health

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Build the project:
   ```
   npm run build
   ```

3. Configure environment variables:
   - Create a `.env` file in the project root with:
     ```
     DOKPLOY_API_URL=https://your-dokploy-instance.com/api
     DOKPLOY_API_KEY=your-api-key
     PORT=3000
     ```

4. Start the server:
   ```
   npm start
   ```

The server will run on port 3000 by default (configurable via the PORT environment variable).

## API Endpoints

### Main Endpoints
- **GET /tools**: Lists all available tools with their descriptions, parameters, and categories
- **POST /**: Main endpoint for tool execution
- **GET /health**: Server health check endpoint

### Request Format
To execute a tool, send a POST request to the root endpoint with the following JSON structure:

```json
{
  "name": "tool_name",
  "params": {
    "param1": "value1",
    "param2": "value2"
  }
}
```

### Response Format
The server will respond with a JSON object containing either a result or an error:

```json
{
  "result": { ... } // Tool execution result
}
```

or

```json
{
  "error": "Error message" // Error description
}
```

## Adding to Windsurf Configuration

Add the following to your Windsurf MCP configuration file:

```json
{
  "mcpServers": {
    "dokploy-mcp-server": {
      "command": "node",
      "args": [
        "/path/to/dokploy-mcp/dist/index.js"
      ],
      "env": {
        "DOKPLOY_API_URL": "https://your-dokploy-instance.com/api",
        "DOKPLOY_API_KEY": "your-api-key",
        "PORT": "3000"
      },
      "disabled": false,
      "alwaysAllow": []
    }
  }
}
```

## Available Functions

### Docker Management
- `dokploy_docker_get_containers`: Get all Docker containers
- `dokploy_docker_restart_container`: Restart a Docker container
- `dokploy_docker_get_config`: Get Docker configuration
- `dokploy_docker_get_containers_by_app_name_match`: Get Docker containers by application name match
- `dokploy_docker_get_containers_by_app_label`: Get Docker containers by application label
- `dokploy_docker_get_stack_containers_by_app_name`: Get Docker stack containers by application name

### Project Management
- `dokploy_list_projects`: List all projects
- `dokploy_get_project`: Get project details by ID
- `dokploy_create_project`: Create a new project
- `dokploy_delete_project`: Delete a project

### Application Management
- `dokploy_list_applications`: List all applications for a project
- `dokploy_get_application`: Get application details by ID
- `dokploy_create_application`: Create a new application
- `dokploy_delete_application`: Delete an application
- `dokploy_restart_application`: Restart an application

### Monitoring and Diagnostics
- `dokploy_get_application_status`: Get application status
- `dokploy_get_application_logs`: Get application logs
- `dokploy_test_endpoint`: Test if an endpoint is responding correctly
- `dokploy_diagnose_502`: Diagnose 502 Bad Gateway errors for a domain

### Admin Functions
- `dokploy_admin_setup_monitoring`: Setup monitoring for admin

## Development

### Testing
To test the API client implementation:
```
npm run dev -- test-client.ts
```

To test specific endpoints:
```
npm run dev -- endpoint-test.ts
```

### Project Structure
- `src/index.ts`: Main server implementation
- `src/dokploy-client.ts`: API client for Dokploy
- `test-client.ts`: Test script for the API client
- `endpoint-test.ts`: Test script for API endpoints

## License

ISC
