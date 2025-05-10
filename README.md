# Dokploy MCP Server

This is a Model Context Protocol (MCP) server for interacting with the Dokploy API directly from Windsurf AI chat.

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
     PORT=3001
     ```

4. Start the server:
   ```
   npm start
   ```

## Adding to Windsurf Configuration

Add the following to your Windsurf MCP configuration file:

```json
{
  "mcpServers": {
    "dokploy-mcp-server": {
      "command": "node",
      "args": [
        "/Users/andrewpeltekci/Documents/dokploy-mcp/dist/index.js"
      ],
      "env": {
        "DOKPLOY_API_URL": "https://your-dokploy-instance.com/api",
        "DOKPLOY_API_KEY": "your-api-key"
      },
      "disabled": false,
      "alwaysAllow": []
    }
  }
}
```

## Available Functions

- `dokploy_list_projects`: List all projects
- `dokploy_get_project`: Get project details by ID
- `dokploy_create_project`: Create a new project
- `dokploy_delete_project`: Delete a project
- `dokploy_list_applications`: List all applications for a project
- `dokploy_get_application`: Get application details by ID
- `dokploy_create_application`: Create a new application
- `dokploy_delete_application`: Delete an application
- `dokploy_restart_application`: Restart an application
- `dokploy_get_application_logs`: Get application logs
- `dokploy_get_application_status`: Get application status
