```
 ____   ___  _  ______  _     _____   __  __  ____ ____  
|  _ \ / _ \| |/ /  _ \| |   / _ \ \ / / |  \/  |/ ___|  _ \ 
| | | | | | | ' /| |_) | |  | | | \ V /  | |\/| | |   | |_) |
| |_| | |_| | . \|  __/| |__| |_| || |   | |  | | |___|  __/ 
|____/ \___/|_|\_\_|   |_____\___/ |_|   |_|  |_|\____|_|    
                                                          
```

# 🚀 DOKPLOY MCP SERVER 🚀

> *The ultimate AI-powered interface to the Dokploy universe*

A next-generation Model Context Protocol (MCP) server that bridges the gap between AI assistants and the powerful Dokploy infrastructure management platform. This middleware translates natural language into API calls, enabling seamless control over your entire cloud infrastructure through conversation.

## ✨ CAPABILITIES MATRIX ✨

| DOMAIN | CAPABILITIES |
|--------|-------------|
| 🐳 **DOCKER** | Container management, configuration, lifecycle control |
| 🔄 **PROJECTS** | Multi-project workflows, organization, role-based access |
| 🚢 **APPLICATIONS** | Deployment, scaling, monitoring, logs |
| 💾 **DATABASES** | MySQL, PostgreSQL, MongoDB, Redis, MariaDB |
| 🔐 **SECURITY** | SSH keys, certificates, registry credentials |
| 🌐 **NETWORKING** | Domain management, endpoint testing, diagnostics |
| 🤖 **AI** | Model deployment, inference, prompt management |
| 📊 **MONITORING** | Status checks, logs, metrics, diagnostics |
| 🔧 **ADMIN** | User management, server setup, monitoring |

## 🔮 THE FUTURE OF INFRASTRUCTURE MANAGEMENT

```
+-------------------+        +--------------------+        +------------------+
|                   |        |                    |        |                  |
|  AI ASSISTANTS    |------->|  DOKPLOY MCP       |------->|  CLOUD INFRA     |
| (GPT, Claude, etc)|<-------|  (You are here)    |<-------|  (The world)     |
|                   |        |                    |        |                  |
+-------------------+        +--------------------+        +------------------+
```

Seamlessly control your entire infrastructure through natural language. The Dokploy MCP Server acts as a universal translator between AI and your cloud systems.

## 🧠 INTELLIGENT FEATURES

- **API Gateway**: 200+ API endpoints unified under a single intelligent interface
- **Context-Aware Processing**: Understands complex, multi-step infrastructure operations
- **Error Recovery**: Sophisticated error handling with automatic recovery suggestions
- **Security-First Design**: Zero-trust architecture with comprehensive access controls
- **Real-Time Updates**: Streaming updates from long-running operations

## 🔥 QUICKSTART

```bash
# Clone the dimensional portal
git clone https://github.com/your-username/dokploy-mcp.git

# Enter the vortex
cd dokploy-mcp

# Install the quantum dependencies
npm install

# Compile the codebase
npm run build

# Launch the server on PORT 3000
npm start
```

Configure your dimensional gateway in `.env`:
```
DOKPLOY_API_URL=https://your-dokploy-instance.com/api
DOKPLOY_API_KEY=your-galactic-access-key
PORT=3000
```

## 🌌 UNIVERSAL API

### Primary Interface
```http
POST / HTTP/1.1
Content-Type: application/json

{
  "name": "dokploy_operation_name",
  "params": {
    "key1": "value1",
    "key2": "value2"
  }
}
```

### Command Catalog
```http
GET /tools HTTP/1.1
```

### System Status
```http
GET /health HTTP/1.1
```

## 🛸 OPERATION CAPABILITIES

### 🐳 Docker Control Module
- **Container Lifecycle Management**: Start, stop, restart, inspect
- **Configuration Analysis**: Deep inspection of container configurations
- **Intelligent Matching**: Find containers by app name or label patterns
- **Stack Management**: Handle complex multi-container applications

### 🏗️ Project Orchestration
- **Multi-Project Management**: Create, update, duplicate, delete projects
- **Environment Configuration**: Manage environment variables securely
- **Role-Based Access**: Fine-grained permission controls
- **Resource Allocation**: Efficient resource distribution

### 🚀 Application Deployment System
- **Continuous Deployment**: Automated application deployment
- **Scaling Operations**: Scale applications up or down
- **Environment Management**: Control application environments
- **Status Monitoring**: Real-time application health checks

### 🗄️ Database Command Center
- **Multi-Engine Support**: MySQL, PostgreSQL, MongoDB, Redis, MariaDB
- **Instance Management**: Create, configure, backup, restore
- **Performance Tuning**: Optimize database performance
- **Security Controls**: User management, password policies

### 🔐 Security Operations
- **Certificate Management**: Create, deploy, and rotate TLS certificates
- **SSH Key Control**: Generate and manage SSH keys
- **Registry Credentials**: Secure Docker registry integration
- **User Access Control**: Comprehensive user permission system

### 🌐 Network Intelligence
- **Domain Management**: Register, configure, validate domains
- **Traffic Analysis**: Endpoint testing and diagnostics
- **Load Balancing**: Distribute traffic efficiently
- **SSL/TLS Automation**: Automatic certificate provisioning

### 🤖 AI Operations
- **Model Deployment**: Deploy AI models within your infrastructure
- **Inference Endpoints**: Create and manage prediction APIs
- **Model Management**: Version control for AI models
- **Resource Optimization**: Efficiently allocate GPU/TPU resources

### 🔍 Diagnostics & Monitoring
- **Log Analysis**: Real-time log streaming and analysis
- **Error Diagnosis**: Automatic detection and diagnosis of issues
- **Performance Metrics**: Comprehensive system performance monitoring
- **Health Checks**: Continuous application and service health monitoring

### 🔧 System Administration
- **User Management**: Create, update, delete users and permissions
- **Server Setup**: Automated server provisioning and configuration
- **Backup Systems**: Scheduled backup and restore operations
- **Alert Configuration**: Set up notifications for system events

## 💫 ADVANCED INTEGRATION

### Windsurf AI Integration

```json
{
  "mcpServers": {
    "dokploy-command-center": {
      "command": "node",
      "args": [
        "/path/to/dokploy-mcp/dist/index.js"
      ],
      "env": {
        "DOKPLOY_API_URL": "https://your-dokploy-instance.com/api",
        "DOKPLOY_API_KEY": "your-galactic-access-key",
        "PORT": "3000"
      },
      "disabled": false,
      "alwaysAllow": []
    }
  }
}
```

### CLI Access Portal

Communicate directly with the MCP server from your terminal:

```bash
curl -X POST http://localhost:3000 \
  -H "Content-Type: application/json" \
  -d '{"name":"dokploy_list_projects","params":{}}'
```

## 🧪 DEVELOPER QUANTUM REALM

```
npm run dev -- quantum-testing.ts  # Test the fabric of reality
```

### Directory Structure
```
/src
├── index.ts              # The singularity point
├── dokploy-client.ts     # The universal translator
└── quantum-connector.ts  # Spacetime fabric connector
```

## 🌠 JOIN THE FUTURE

The Dokploy MCP Server represents the next evolution in infrastructure management - where AI meets cloud operations to create something greater than the sum of its parts.

```
    /\__/\    DOKPLOY MCP: Where infrastructure
   /`    '\   becomes conversation and cloud
 === 0  0 ===  management becomes effortless.
   \  --  /    
  /        \   
 /          \  
|            | 
 \  ||  ||  /  
  \_oo__oo_/   
```

## 📜 LICENSE

ISC - Free to use in your dimension

## 🧠 CONSOLIDATED TOOL ARCHITECTURE

The Dokploy MCP uses a powerful consolidated tool architecture that provides comprehensive functionality through a smaller set of high-level tools. This makes it easier for AI assistants to understand and utilize the full capabilities while reducing cognitive load.

### Consolidated Tools

Instead of exposing 200+ individual API endpoints as separate tools, the MCP consolidates functionality into these powerful primary tools:

| TOOL | DESCRIPTION | CAPABILITIES |
|------|-------------|--------------|
| `dokploy_project` | Project management | list, get, create, update, delete |
| `dokploy_application` | Application operations | list, get, create, update, delete, deploy, restart, stop, start |
| `dokploy_server` | Server management | list, get, create, update, delete, setup, validate, security |
| `dokploy_docker` | Docker container operations | list, restart, get_config, find_by_app, find_by_label, find_stack |
| `dokploy_domain` | Domain & certificate management | list, get, create, update, delete, validate, generate |
| `dokploy_monitoring` | Monitoring & logging | app_status, app_logs, server_metrics, setup |
| `dokploy_diagnostics` | Diagnostic utilities | test_endpoint, diagnose_502, check_security |
| `dokploy_deployment` | Deployment operations | deploy, redeploy, rollback |
| `dokploy_database` | Unified database interface | create, get, start, stop, deploy, update, delete, move, reload, rebuild |
| `dokploy_backup` | Backup management | create, get, list, update, delete, manual |
| `dokploy_system` | MCP system management | status, clear_cache, reset_circuit_breaker, metrics |

### How It Works

Each consolidated tool follows a consistent action-based pattern:

```json
{
  "name": "dokploy_application",
  "params": {
    "action": "restart",
    "applicationId": "app-123456"
  }
}
```

The server intelligently maps these high-level actions to the appropriate low-level API calls, handling parameter validation and providing helpful error messages.

### Benefits

- **Simplified Mental Model**: LLMs can more easily understand and remember a small set of powerful tools
- **Consistent Interface**: All tools follow the same action-based pattern
- **Reduced Token Usage**: Fewer tool descriptions means more tokens available for reasoning
- **Better Context Management**: Easier to keep track of related operations within the same tool
- **Enhanced Middleware Capabilities**: The middleware layer can provide advanced features like caching, retries, and circuit breaking
