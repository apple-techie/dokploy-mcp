# Dokploy API cURL Cheatsheet

Base URL: `https://dokploy.dashstache.com/api`

## POST /admin.setupMonitoring
**Operation ID:** `admin-setupMonitoring`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/admin.setupMonitoring' -H 'Content-Type: application/json' -d '{"metricsConfig": {}}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "metricsConfig": {}
}
```

Schema details:
  - `metricsConfig` (object):  (Required: True)

---

## GET /docker.getContainers
**Operation ID:** `docker-getContainers`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/docker.getContainers?serverId=YOUR_SERVERID'
```

**Query Parameters:**
* `serverId` (string): No description. (Required: False). Example: `YOUR_SERVERID`

---

## POST /docker.restartContainer
**Operation ID:** `docker-restartContainer`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/docker.restartContainer' -H 'Content-Type: application/json' -d '{"containerId": "example_containerId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "containerId": "example_containerId"
}
```

Schema details:
  - `containerId` (string):  (Required: True)

---

## GET /docker.getConfig
**Operation ID:** `docker-getConfig`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/docker.getConfig?containerId=YOUR_CONTAINERID&serverId=YOUR_SERVERID'
```

**Query Parameters:**
* `containerId` (string): No description. (Required: True). Example: `YOUR_CONTAINERID`
* `serverId` (string): No description. (Required: False). Example: `YOUR_SERVERID`

---

## GET /docker.getContainersByAppNameMatch
**Operation ID:** `docker-getContainersByAppNameMatch`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/docker.getContainersByAppNameMatch?appType=YOUR_APPTYPE&appName=YOUR_APPNAME&serverId=YOUR_SERVERID'
```

**Query Parameters:**
* `appType` (string): No description. (Required: False). Example: `YOUR_APPTYPE`
* `appName` (string): No description. (Required: True). Example: `YOUR_APPNAME`
* `serverId` (string): No description. (Required: False). Example: `YOUR_SERVERID`

---

## GET /docker.getContainersByAppLabel
**Operation ID:** `docker-getContainersByAppLabel`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/docker.getContainersByAppLabel?appName=YOUR_APPNAME&serverId=YOUR_SERVERID&type=standalone'
```

**Query Parameters:**
* `appName` (string): No description. (Required: True). Example: `YOUR_APPNAME`
* `serverId` (string): No description. (Required: False). Example: `YOUR_SERVERID`
* `type` (string): No description. (Required: True). Example: `standalone`

---

## GET /docker.getStackContainersByAppName
**Operation ID:** `docker-getStackContainersByAppName`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/docker.getStackContainersByAppName?appName=YOUR_APPNAME&serverId=YOUR_SERVERID'
```

**Query Parameters:**
* `appName` (string): No description. (Required: True). Example: `YOUR_APPNAME`
* `serverId` (string): No description. (Required: False). Example: `YOUR_SERVERID`

---

## GET /docker.getServiceContainersByAppName
**Operation ID:** `docker-getServiceContainersByAppName`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/docker.getServiceContainersByAppName?appName=YOUR_APPNAME&serverId=YOUR_SERVERID'
```

**Query Parameters:**
* `appName` (string): No description. (Required: True). Example: `YOUR_APPNAME`
* `serverId` (string): No description. (Required: False). Example: `YOUR_SERVERID`

---

## POST /project.create
**Operation ID:** `project-create`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/project.create' -H 'Content-Type: application/json' -d '{"name": "example_name", "description": "example_description", "env": "example_env"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "name": "example_name",
  "description": "example_description",
  "env": "example_env"
}
```

Schema details:
  - `name` (string):  (Required: True)
  - `description` (string):  (Required: False)
  - `env` (string):  (Required: False)

---

## GET /project.one
**Operation ID:** `project-one`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/project.one?projectId=YOUR_PROJECTID'
```

**Query Parameters:**
* `projectId` (string): No description. (Required: True). Example: `YOUR_PROJECTID`

---

## GET /project.all
**Operation ID:** `project-all`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/project.all'
```

---

## POST /project.remove
**Operation ID:** `project-remove`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/project.remove' -H 'Content-Type: application/json' -d '{"projectId": "example_projectId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "projectId": "example_projectId"
}
```

Schema details:
  - `projectId` (string):  (Required: True)

---

## POST /project.update
**Operation ID:** `project-update`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/project.update' -H 'Content-Type: application/json' -d '{"projectId": "example_projectId", "name": "example_name", "description": "example_description", "createdAt": "example_createdAt", "organizationId": "example_organizationId", "env": "example_env"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "projectId": "example_projectId",
  "name": "example_name",
  "description": "example_description",
  "createdAt": "example_createdAt",
  "organizationId": "example_organizationId",
  "env": "example_env"
}
```

Schema details:
  - `projectId` (string):  (Required: True)
  - `name` (string):  (Required: False)
  - `description` (string):  (Required: False)
  - `createdAt` (string):  (Required: False)
  - `organizationId` (string):  (Required: False)
  - `env` (string):  (Required: False)

---

## POST /project.duplicate
**Operation ID:** `project-duplicate`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/project.duplicate' -H 'Content-Type: application/json' -d '{"sourceProjectId": "example_sourceProjectId", "name": "example_name", "description": "example_description", "includeServices": true, "selectedServices": []}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "sourceProjectId": "example_sourceProjectId",
  "name": "example_name",
  "description": "example_description",
  "includeServices": true,
  "selectedServices": []
}
```

Schema details:
  - `sourceProjectId` (string):  (Required: True)
  - `name` (string):  (Required: True)
  - `description` (string):  (Required: False)
  - `includeServices` (boolean) (Default: `True`):  (Required: False)
  - `selectedServices` (array):  (Required: False)

---

## POST /application.create
**Operation ID:** `application-create`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/application.create' -H 'Content-Type: application/json' -d '{"name": "example_name", "appName": "example_appName", "description": "example_description", "projectId": "example_projectId", "serverId": "example_serverId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "name": "example_name",
  "appName": "example_appName",
  "description": "example_description",
  "projectId": "example_projectId",
  "serverId": "example_serverId"
}
```

Schema details:
  - `name` (string):  (Required: True)
  - `appName` (string):  (Required: False)
  - `description` (string):  (Required: False)
  - `projectId` (string):  (Required: True)
  - `serverId` (string):  (Required: False)

---

## GET /application.one
**Operation ID:** `application-one`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/application.one?applicationId=YOUR_APPLICATIONID'
```

**Query Parameters:**
* `applicationId` (string): No description. (Required: True). Example: `YOUR_APPLICATIONID`

---

## POST /application.reload
**Operation ID:** `application-reload`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/application.reload' -H 'Content-Type: application/json' -d '{"appName": "example_appName", "applicationId": "example_applicationId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "appName": "example_appName",
  "applicationId": "example_applicationId"
}
```

Schema details:
  - `appName` (string):  (Required: True)
  - `applicationId` (string):  (Required: True)

---

## POST /application.delete
**Operation ID:** `application-delete`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/application.delete' -H 'Content-Type: application/json' -d '{"applicationId": "example_applicationId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "applicationId": "example_applicationId"
}
```

Schema details:
  - `applicationId` (string):  (Required: True)

---

## POST /application.stop
**Operation ID:** `application-stop`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/application.stop' -H 'Content-Type: application/json' -d '{"applicationId": "example_applicationId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "applicationId": "example_applicationId"
}
```

Schema details:
  - `applicationId` (string):  (Required: True)

---

## POST /application.start
**Operation ID:** `application-start`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/application.start' -H 'Content-Type: application/json' -d '{"applicationId": "example_applicationId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "applicationId": "example_applicationId"
}
```

Schema details:
  - `applicationId` (string):  (Required: True)

---

## POST /application.redeploy
**Operation ID:** `application-redeploy`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/application.redeploy' -H 'Content-Type: application/json' -d '{"applicationId": "example_applicationId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "applicationId": "example_applicationId"
}
```

Schema details:
  - `applicationId` (string):  (Required: True)

---

## POST /application.saveEnvironment
**Operation ID:** `application-saveEnvironment`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/application.saveEnvironment' -H 'Content-Type: application/json' -d '{"applicationId": "example_applicationId", "env": "example_env", "buildArgs": "example_buildArgs"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "applicationId": "example_applicationId",
  "env": "example_env",
  "buildArgs": "example_buildArgs"
}
```

Schema details:
  - `applicationId` (string):  (Required: True)
  - `env` (string):  (Required: False)
  - `buildArgs` (string):  (Required: False)

---

## POST /application.saveBuildType
**Operation ID:** `application-saveBuildType`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/application.saveBuildType' -H 'Content-Type: application/json' -d '{"applicationId": "example_applicationId", "buildType": "dockerfile", "dockerfile": "example_dockerfile", "dockerContextPath": "example_dockerContextPath", "dockerBuildStage": "example_dockerBuildStage", "herokuVersion": "example_herokuVersion", "publishDirectory": "example_publishDirectory"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "applicationId": "example_applicationId",
  "buildType": "dockerfile",
  "dockerfile": "example_dockerfile",
  "dockerContextPath": "example_dockerContextPath",
  "dockerBuildStage": "example_dockerBuildStage",
  "herokuVersion": "example_herokuVersion",
  "publishDirectory": "example_publishDirectory"
}
```

Schema details:
  - `applicationId` (string):  (Required: True)
  - `buildType` (string) (Enum: ['dockerfile', 'heroku_buildpacks', 'paketo_buildpacks', 'nixpacks', 'static', 'railpack']):  (Required: True)
  - `dockerfile` (string):  (Required: False)
  - `dockerContextPath` (string):  (Required: True)
  - `dockerBuildStage` (string):  (Required: True)
  - `herokuVersion` (string):  (Required: False)
  - `publishDirectory` (string):  (Required: False)

---

## POST /application.saveGithubProvider
**Operation ID:** `application-saveGithubProvider`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/application.saveGithubProvider' -H 'Content-Type: application/json' -d '{"applicationId": "example_applicationId", "repository": "example_repository", "branch": "example_branch", "owner": "example_owner", "buildPath": "example_buildPath", "githubId": "example_githubId", "watchPaths": [], "enableSubmodules": false, "triggerType": "push"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "applicationId": "example_applicationId",
  "repository": "example_repository",
  "branch": "example_branch",
  "owner": "example_owner",
  "buildPath": "example_buildPath",
  "githubId": "example_githubId",
  "watchPaths": [],
  "enableSubmodules": false,
  "triggerType": "push"
}
```

Schema details:
  - `applicationId` (string):  (Required: True)
  - `repository` (string):  (Required: False)
  - `branch` (string):  (Required: False)
  - `owner` (string):  (Required: True)
  - `buildPath` (string):  (Required: False)
  - `githubId` (string):  (Required: True)
  - `watchPaths` (array):  (Required: False)
  - `enableSubmodules` (boolean):  (Required: True)
  - `triggerType` (string) (Enum: ['push', 'tag']) (Default: `push`):  (Required: False)

---

## POST /application.saveGitlabProvider
**Operation ID:** `application-saveGitlabProvider`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/application.saveGitlabProvider' -H 'Content-Type: application/json' -d '{"applicationId": "example_applicationId", "gitlabBranch": "example_gitlabBranch", "gitlabBuildPath": "example_gitlabBuildPath", "gitlabOwner": "example_gitlabOwner", "gitlabRepository": "example_gitlabRepository", "gitlabId": "example_gitlabId", "gitlabProjectId": 0, "gitlabPathNamespace": "example_gitlabPathNamespace", "watchPaths": [], "enableSubmodules": false}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "applicationId": "example_applicationId",
  "gitlabBranch": "example_gitlabBranch",
  "gitlabBuildPath": "example_gitlabBuildPath",
  "gitlabOwner": "example_gitlabOwner",
  "gitlabRepository": "example_gitlabRepository",
  "gitlabId": "example_gitlabId",
  "gitlabProjectId": 0,
  "gitlabPathNamespace": "example_gitlabPathNamespace",
  "watchPaths": [],
  "enableSubmodules": false
}
```

Schema details:
  - `applicationId` (string):  (Required: True)
  - `gitlabBranch` (string):  (Required: True)
  - `gitlabBuildPath` (string):  (Required: True)
  - `gitlabOwner` (string):  (Required: True)
  - `gitlabRepository` (string):  (Required: True)
  - `gitlabId` (string):  (Required: True)
  - `gitlabProjectId` (number):  (Required: True)
  - `gitlabPathNamespace` (string):  (Required: True)
  - `watchPaths` (array):  (Required: False)
  - `enableSubmodules` (boolean):  (Required: True)

---

## POST /application.saveBitbucketProvider
**Operation ID:** `application-saveBitbucketProvider`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/application.saveBitbucketProvider' -H 'Content-Type: application/json' -d '{"bitbucketBranch": "example_bitbucketBranch", "bitbucketBuildPath": "example_bitbucketBuildPath", "bitbucketOwner": "example_bitbucketOwner", "bitbucketRepository": "example_bitbucketRepository", "bitbucketId": "example_bitbucketId", "applicationId": "example_applicationId", "watchPaths": [], "enableSubmodules": false}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "bitbucketBranch": "example_bitbucketBranch",
  "bitbucketBuildPath": "example_bitbucketBuildPath",
  "bitbucketOwner": "example_bitbucketOwner",
  "bitbucketRepository": "example_bitbucketRepository",
  "bitbucketId": "example_bitbucketId",
  "applicationId": "example_applicationId",
  "watchPaths": [],
  "enableSubmodules": false
}
```

Schema details:
  - `bitbucketBranch` (string):  (Required: True)
  - `bitbucketBuildPath` (string):  (Required: True)
  - `bitbucketOwner` (string):  (Required: True)
  - `bitbucketRepository` (string):  (Required: True)
  - `bitbucketId` (string):  (Required: True)
  - `applicationId` (string):  (Required: True)
  - `watchPaths` (array):  (Required: False)
  - `enableSubmodules` (boolean):  (Required: True)

---

## POST /application.saveGiteaProvider
**Operation ID:** `application-saveGiteaProvider`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/application.saveGiteaProvider' -H 'Content-Type: application/json' -d '{"applicationId": "example_applicationId", "giteaBranch": "example_giteaBranch", "giteaBuildPath": "example_giteaBuildPath", "giteaOwner": "example_giteaOwner", "giteaRepository": "example_giteaRepository", "giteaId": "example_giteaId", "watchPaths": [], "enableSubmodules": false}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "applicationId": "example_applicationId",
  "giteaBranch": "example_giteaBranch",
  "giteaBuildPath": "example_giteaBuildPath",
  "giteaOwner": "example_giteaOwner",
  "giteaRepository": "example_giteaRepository",
  "giteaId": "example_giteaId",
  "watchPaths": [],
  "enableSubmodules": false
}
```

Schema details:
  - `applicationId` (string):  (Required: True)
  - `giteaBranch` (string):  (Required: True)
  - `giteaBuildPath` (string):  (Required: True)
  - `giteaOwner` (string):  (Required: True)
  - `giteaRepository` (string):  (Required: True)
  - `giteaId` (string):  (Required: True)
  - `watchPaths` (array):  (Required: False)
  - `enableSubmodules` (boolean):  (Required: True)

---

## POST /application.saveDockerProvider
**Operation ID:** `application-saveDockerProvider`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/application.saveDockerProvider' -H 'Content-Type: application/json' -d '{"dockerImage": "example_dockerImage", "applicationId": "example_applicationId", "username": "example_username", "password": "example_password", "registryUrl": "example_registryUrl"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "dockerImage": "example_dockerImage",
  "applicationId": "example_applicationId",
  "username": "example_username",
  "password": "example_password",
  "registryUrl": "example_registryUrl"
}
```

Schema details:
  - `dockerImage` (string):  (Required: False)
  - `applicationId` (string):  (Required: True)
  - `username` (string):  (Required: False)
  - `password` (string):  (Required: False)
  - `registryUrl` (string):  (Required: False)

---

## POST /application.saveGitProdiver
**Operation ID:** `application-saveGitProdiver`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/application.saveGitProdiver' -H 'Content-Type: application/json' -d '{"customGitBranch": "example_customGitBranch", "applicationId": "example_applicationId", "customGitBuildPath": "example_customGitBuildPath", "customGitUrl": "example_customGitUrl", "watchPaths": [], "enableSubmodules": false, "customGitSSHKeyId": "example_customGitSSHKeyId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "customGitBranch": "example_customGitBranch",
  "applicationId": "example_applicationId",
  "customGitBuildPath": "example_customGitBuildPath",
  "customGitUrl": "example_customGitUrl",
  "watchPaths": [],
  "enableSubmodules": false,
  "customGitSSHKeyId": "example_customGitSSHKeyId"
}
```

Schema details:
  - `customGitBranch` (string):  (Required: False)
  - `applicationId` (string):  (Required: True)
  - `customGitBuildPath` (string):  (Required: False)
  - `customGitUrl` (string):  (Required: False)
  - `watchPaths` (array):  (Required: False)
  - `enableSubmodules` (boolean):  (Required: True)
  - `customGitSSHKeyId` (string):  (Required: False)

---

## POST /application.markRunning
**Operation ID:** `application-markRunning`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/application.markRunning' -H 'Content-Type: application/json' -d '{"applicationId": "example_applicationId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "applicationId": "example_applicationId"
}
```

Schema details:
  - `applicationId` (string):  (Required: True)

---

## POST /application.update
**Operation ID:** `application-update`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/application.update' -H 'Content-Type: application/json' -d '{"applicationId": "example_applicationId", "name": "example_name", "appName": "example_appName", "description": "example_description", "env": "example_env", "previewEnv": "example_previewEnv", "watchPaths": [], "previewBuildArgs": "example_previewBuildArgs", "previewWildcard": "example_previewWildcard", "previewPort": 0, "previewHttps": false, "previewPath": "example_previewPath", "previewCertificateType": "letsencrypt", "previewCustomCertResolver": "example_previewCustomCertResolver", "previewLimit": 0, "isPreviewDeploymentsActive": false, "buildArgs": "example_buildArgs", "memoryReservation": "example_memoryReservation", "memoryLimit": "example_memoryLimit", "cpuReservation": "example_cpuReservation", "cpuLimit": "example_cpuLimit", "title": "example_title", "enabled": false, "subtitle": "example_subtitle", "command": "example_command", "refreshToken": "example_refreshToken", "sourceType": "github", "cleanCache": false, "repository": "example_repository", "owner": "example_owner", "branch": "example_branch", "buildPath": "example_buildPath", "triggerType": "push", "autoDeploy": false, "gitlabProjectId": 0, "gitlabRepository": "example_gitlabRepository", "gitlabOwner": "example_gitlabOwner", "gitlabBranch": "example_gitlabBranch", "gitlabBuildPath": "example_gitlabBuildPath", "gitlabPathNamespace": "example_gitlabPathNamespace", "giteaRepository": "example_giteaRepository", "giteaOwner": "example_giteaOwner", "giteaBranch": "example_giteaBranch", "giteaBuildPath": "example_giteaBuildPath", "bitbucketRepository": "example_bitbucketRepository", "bitbucketOwner": "example_bitbucketOwner", "bitbucketBranch": "example_bitbucketBranch", "bitbucketBuildPath": "example_bitbucketBuildPath", "username": "example_username", "password": "example_password", "dockerImage": "example_dockerImage", "registryUrl": "example_registryUrl", "customGitUrl": "example_customGitUrl", "customGitBranch": "example_customGitBranch", "customGitBuildPath": "example_customGitBuildPath", "customGitSSHKeyId": "example_customGitSSHKeyId", "enableSubmodules": false, "dockerfile": "example_dockerfile", "dockerContextPath": "example_dockerContextPath", "dockerBuildStage": "example_dockerBuildStage", "dropBuildPath": "example_dropBuildPath", "healthCheckSwarm": {}, "restartPolicySwarm": {}, "placementSwarm": {}, "updateConfigSwarm": {}, "rollbackConfigSwarm": {}, "modeSwarm": {}, "labelsSwarm": {}, "networkSwarm": [], "replicas": 0, "applicationStatus": "idle", "buildType": "dockerfile", "herokuVersion": "example_herokuVersion", "publishDirectory": "example_publishDirectory", "createdAt": "example_createdAt", "registryId": "example_registryId", "projectId": "example_projectId", "githubId": "example_githubId", "gitlabId": "example_gitlabId", "giteaId": "example_giteaId", "bitbucketId": "example_bitbucketId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "applicationId": "example_applicationId",
  "name": "example_name",
  "appName": "example_appName",
  "description": "example_description",
  "env": "example_env",
  "previewEnv": "example_previewEnv",
  "watchPaths": [],
  "previewBuildArgs": "example_previewBuildArgs",
  "previewWildcard": "example_previewWildcard",
  "previewPort": 0,
  "previewHttps": false,
  "previewPath": "example_previewPath",
  "previewCertificateType": "letsencrypt",
  "previewCustomCertResolver": "example_previewCustomCertResolver",
  "previewLimit": 0,
  "isPreviewDeploymentsActive": false,
  "buildArgs": "example_buildArgs",
  "memoryReservation": "example_memoryReservation",
  "memoryLimit": "example_memoryLimit",
  "cpuReservation": "example_cpuReservation",
  "cpuLimit": "example_cpuLimit",
  "title": "example_title",
  "enabled": false,
  "subtitle": "example_subtitle",
  "command": "example_command",
  "refreshToken": "example_refreshToken",
  "sourceType": "github",
  "cleanCache": false,
  "repository": "example_repository",
  "owner": "example_owner",
  "branch": "example_branch",
  "buildPath": "example_buildPath",
  "triggerType": "push",
  "autoDeploy": false,
  "gitlabProjectId": 0,
  "gitlabRepository": "example_gitlabRepository",
  "gitlabOwner": "example_gitlabOwner",
  "gitlabBranch": "example_gitlabBranch",
  "gitlabBuildPath": "example_gitlabBuildPath",
  "gitlabPathNamespace": "example_gitlabPathNamespace",
  "giteaRepository": "example_giteaRepository",
  "giteaOwner": "example_giteaOwner",
  "giteaBranch": "example_giteaBranch",
  "giteaBuildPath": "example_giteaBuildPath",
  "bitbucketRepository": "example_bitbucketRepository",
  "bitbucketOwner": "example_bitbucketOwner",
  "bitbucketBranch": "example_bitbucketBranch",
  "bitbucketBuildPath": "example_bitbucketBuildPath",
  "username": "example_username",
  "password": "example_password",
  "dockerImage": "example_dockerImage",
  "registryUrl": "example_registryUrl",
  "customGitUrl": "example_customGitUrl",
  "customGitBranch": "example_customGitBranch",
  "customGitBuildPath": "example_customGitBuildPath",
  "customGitSSHKeyId": "example_customGitSSHKeyId",
  "enableSubmodules": false,
  "dockerfile": "example_dockerfile",
  "dockerContextPath": "example_dockerContextPath",
  "dockerBuildStage": "example_dockerBuildStage",
  "dropBuildPath": "example_dropBuildPath",
  "healthCheckSwarm": {},
  "restartPolicySwarm": {},
  "placementSwarm": {},
  "updateConfigSwarm": {},
  "rollbackConfigSwarm": {},
  "modeSwarm": {},
  "labelsSwarm": {},
  "networkSwarm": [],
  "replicas": 0,
  "applicationStatus": "idle",
  "buildType": "dockerfile",
  "herokuVersion": "example_herokuVersion",
  "publishDirectory": "example_publishDirectory",
  "createdAt": "example_createdAt",
  "registryId": "example_registryId",
  "projectId": "example_projectId",
  "githubId": "example_githubId",
  "gitlabId": "example_gitlabId",
  "giteaId": "example_giteaId",
  "bitbucketId": "example_bitbucketId"
}
```

Schema details:
  - `applicationId` (string):  (Required: True)
  - `name` (string):  (Required: False)
  - `appName` (string):  (Required: False)
  - `description` (string):  (Required: False)
  - `env` (string):  (Required: False)
  - `previewEnv` (string):  (Required: False)
  - `watchPaths` (array):  (Required: False)
  - `previewBuildArgs` (string):  (Required: False)
  - `previewWildcard` (string):  (Required: False)
  - `previewPort` (number):  (Required: False)
  - `previewHttps` (boolean):  (Required: False)
  - `previewPath` (string):  (Required: False)
  - `previewCertificateType` (string) (Enum: ['letsencrypt', 'none', 'custom']):  (Required: False)
  - `previewCustomCertResolver` (string):  (Required: False)
  - `previewLimit` (number):  (Required: False)
  - `isPreviewDeploymentsActive` (boolean):  (Required: False)
  - `buildArgs` (string):  (Required: False)
  - `memoryReservation` (string):  (Required: False)
  - `memoryLimit` (string):  (Required: False)
  - `cpuReservation` (string):  (Required: False)
  - `cpuLimit` (string):  (Required: False)
  - `title` (string):  (Required: False)
  - `enabled` (boolean):  (Required: False)
  - `subtitle` (string):  (Required: False)
  - `command` (string):  (Required: False)
  - `refreshToken` (string):  (Required: False)
  - `sourceType` (string) (Enum: ['github', 'docker', 'git', 'gitlab', 'bitbucket', 'gitea', 'drop']):  (Required: False)
  - `cleanCache` (boolean):  (Required: False)
  - `repository` (string):  (Required: False)
  - `owner` (string):  (Required: False)
  - `branch` (string):  (Required: False)
  - `buildPath` (string):  (Required: False)
  - `triggerType` (string) (Enum: ['push', 'tag']):  (Required: False)
  - `autoDeploy` (boolean):  (Required: False)
  - `gitlabProjectId` (number):  (Required: False)
  - `gitlabRepository` (string):  (Required: False)
  - `gitlabOwner` (string):  (Required: False)
  - `gitlabBranch` (string):  (Required: False)
  - `gitlabBuildPath` (string):  (Required: False)
  - `gitlabPathNamespace` (string):  (Required: False)
  - `giteaRepository` (string):  (Required: False)
  - `giteaOwner` (string):  (Required: False)
  - `giteaBranch` (string):  (Required: False)
  - `giteaBuildPath` (string):  (Required: False)
  - `bitbucketRepository` (string):  (Required: False)
  - `bitbucketOwner` (string):  (Required: False)
  - `bitbucketBranch` (string):  (Required: False)
  - `bitbucketBuildPath` (string):  (Required: False)
  - `username` (string):  (Required: False)
  - `password` (string):  (Required: False)
  - `dockerImage` (string):  (Required: False)
  - `registryUrl` (string):  (Required: False)
  - `customGitUrl` (string):  (Required: False)
  - `customGitBranch` (string):  (Required: False)
  - `customGitBuildPath` (string):  (Required: False)
  - `customGitSSHKeyId` (string):  (Required: False)
  - `enableSubmodules` (boolean):  (Required: False)
  - `dockerfile` (string):  (Required: False)
  - `dockerContextPath` (string):  (Required: False)
  - `dockerBuildStage` (string):  (Required: False)
  - `dropBuildPath` (string):  (Required: False)
  - `healthCheckSwarm` (object):  (Required: False)
  - `restartPolicySwarm` (object):  (Required: False)
  - `placementSwarm` (object):  (Required: False)
  - `updateConfigSwarm` (object):  (Required: False)
  - `rollbackConfigSwarm` (object):  (Required: False)
  - `modeSwarm` (object):  (Required: False)
  - `labelsSwarm` (object):  (Required: False)
  - `networkSwarm` (array):  (Required: False)
  - `replicas` (number):  (Required: False)
  - `applicationStatus` (string) (Enum: ['idle', 'running', 'done', 'error']):  (Required: False)
  - `buildType` (string) (Enum: ['dockerfile', 'heroku_buildpacks', 'paketo_buildpacks', 'nixpacks', 'static', 'railpack']):  (Required: False)
  - `herokuVersion` (string):  (Required: False)
  - `publishDirectory` (string):  (Required: False)
  - `createdAt` (string):  (Required: False)
  - `registryId` (string):  (Required: False)
  - `projectId` (string):  (Required: False)
  - `githubId` (string):  (Required: False)
  - `gitlabId` (string):  (Required: False)
  - `giteaId` (string):  (Required: False)
  - `bitbucketId` (string):  (Required: False)

---

## POST /application.refreshToken
**Operation ID:** `application-refreshToken`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/application.refreshToken' -H 'Content-Type: application/json' -d '{"applicationId": "example_applicationId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "applicationId": "example_applicationId"
}
```

Schema details:
  - `applicationId` (string):  (Required: True)

---

## POST /application.deploy
**Operation ID:** `application-deploy`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/application.deploy' -H 'Content-Type: application/json' -d '{"applicationId": "example_applicationId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "applicationId": "example_applicationId"
}
```

Schema details:
  - `applicationId` (string):  (Required: True)

---

## POST /application.cleanQueues
**Operation ID:** `application-cleanQueues`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/application.cleanQueues' -H 'Content-Type: application/json' -d '{"applicationId": "example_applicationId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "applicationId": "example_applicationId"
}
```

Schema details:
  - `applicationId` (string):  (Required: True)

---

## GET /application.readTraefikConfig
**Operation ID:** `application-readTraefikConfig`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/application.readTraefikConfig?applicationId=YOUR_APPLICATIONID'
```

**Query Parameters:**
* `applicationId` (string): No description. (Required: True). Example: `YOUR_APPLICATIONID`

---

## POST /application.updateTraefikConfig
**Operation ID:** `application-updateTraefikConfig`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/application.updateTraefikConfig' -H 'Content-Type: application/json' -d '{"applicationId": "example_applicationId", "traefikConfig": "example_traefikConfig"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "applicationId": "example_applicationId",
  "traefikConfig": "example_traefikConfig"
}
```

Schema details:
  - `applicationId` (string):  (Required: True)
  - `traefikConfig` (string):  (Required: True)

---

## GET /application.readAppMonitoring
**Operation ID:** `application-readAppMonitoring`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/application.readAppMonitoring?appName=YOUR_APPNAME'
```

**Query Parameters:**
* `appName` (string): No description. (Required: True). Example: `YOUR_APPNAME`

---

## POST /application.move
**Operation ID:** `application-move`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/application.move' -H 'Content-Type: application/json' -d '{"applicationId": "example_applicationId", "targetProjectId": "example_targetProjectId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "applicationId": "example_applicationId",
  "targetProjectId": "example_targetProjectId"
}
```

Schema details:
  - `applicationId` (string):  (Required: True)
  - `targetProjectId` (string):  (Required: True)

---

## POST /mysql.create
**Operation ID:** `mysql-create`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/mysql.create' -H 'Content-Type: application/json' -d '{"name": "example_name", "appName": "example_appName", "dockerImage": "mysql:8", "projectId": "example_projectId", "description": "example_description", "databaseName": "example_databaseName", "databaseUser": "example_databaseUser", "databasePassword": "example_databasePassword", "databaseRootPassword": "example_databaseRootPassword", "serverId": "example_serverId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "name": "example_name",
  "appName": "example_appName",
  "dockerImage": "mysql:8",
  "projectId": "example_projectId",
  "description": "example_description",
  "databaseName": "example_databaseName",
  "databaseUser": "example_databaseUser",
  "databasePassword": "example_databasePassword",
  "databaseRootPassword": "example_databaseRootPassword",
  "serverId": "example_serverId"
}
```

Schema details:
  - `name` (string):  (Required: True)
  - `appName` (string):  (Required: True)
  - `dockerImage` (string) (Default: `mysql:8`):  (Required: False)
  - `projectId` (string):  (Required: True)
  - `description` (string):  (Required: False)
  - `databaseName` (string):  (Required: True)
  - `databaseUser` (string):  (Required: True)
  - `databasePassword` (string):  (Required: True)
  - `databaseRootPassword` (string):  (Required: True)
  - `serverId` (string):  (Required: False)

---

## GET /mysql.one
**Operation ID:** `mysql-one`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/mysql.one?mysqlId=YOUR_MYSQLID'
```

**Query Parameters:**
* `mysqlId` (string): No description. (Required: True). Example: `YOUR_MYSQLID`

---

## POST /mysql.start
**Operation ID:** `mysql-start`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/mysql.start' -H 'Content-Type: application/json' -d '{"mysqlId": "example_mysqlId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "mysqlId": "example_mysqlId"
}
```

Schema details:
  - `mysqlId` (string):  (Required: True)

---

## POST /mysql.stop
**Operation ID:** `mysql-stop`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/mysql.stop' -H 'Content-Type: application/json' -d '{"mysqlId": "example_mysqlId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "mysqlId": "example_mysqlId"
}
```

Schema details:
  - `mysqlId` (string):  (Required: True)

---

## POST /mysql.saveExternalPort
**Operation ID:** `mysql-saveExternalPort`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/mysql.saveExternalPort' -H 'Content-Type: application/json' -d '{"mysqlId": "example_mysqlId", "externalPort": 0}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "mysqlId": "example_mysqlId",
  "externalPort": 0
}
```

Schema details:
  - `mysqlId` (string):  (Required: True)
  - `externalPort` (number):  (Required: True)

---

## POST /mysql.deploy
**Operation ID:** `mysql-deploy`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/mysql.deploy' -H 'Content-Type: application/json' -d '{"mysqlId": "example_mysqlId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "mysqlId": "example_mysqlId"
}
```

Schema details:
  - `mysqlId` (string):  (Required: True)

---

## POST /mysql.changeStatus
**Operation ID:** `mysql-changeStatus`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/mysql.changeStatus' -H 'Content-Type: application/json' -d '{"mysqlId": "example_mysqlId", "applicationStatus": "idle"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "mysqlId": "example_mysqlId",
  "applicationStatus": "idle"
}
```

Schema details:
  - `mysqlId` (string):  (Required: True)
  - `applicationStatus` (string) (Enum: ['idle', 'running', 'done', 'error']):  (Required: True)

---

## POST /mysql.reload
**Operation ID:** `mysql-reload`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/mysql.reload' -H 'Content-Type: application/json' -d '{"mysqlId": "example_mysqlId", "appName": "example_appName"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "mysqlId": "example_mysqlId",
  "appName": "example_appName"
}
```

Schema details:
  - `mysqlId` (string):  (Required: True)
  - `appName` (string):  (Required: True)

---

## POST /mysql.remove
**Operation ID:** `mysql-remove`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/mysql.remove' -H 'Content-Type: application/json' -d '{"mysqlId": "example_mysqlId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "mysqlId": "example_mysqlId"
}
```

Schema details:
  - `mysqlId` (string):  (Required: True)

---

## POST /mysql.saveEnvironment
**Operation ID:** `mysql-saveEnvironment`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/mysql.saveEnvironment' -H 'Content-Type: application/json' -d '{"mysqlId": "example_mysqlId", "env": "example_env"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "mysqlId": "example_mysqlId",
  "env": "example_env"
}
```

Schema details:
  - `mysqlId` (string):  (Required: True)
  - `env` (string):  (Required: False)

---

## POST /mysql.update
**Operation ID:** `mysql-update`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/mysql.update' -H 'Content-Type: application/json' -d '{"mysqlId": "example_mysqlId", "name": "example_name", "appName": "example_appName", "description": "example_description", "databaseName": "example_databaseName", "databaseUser": "example_databaseUser", "databasePassword": "example_databasePassword", "databaseRootPassword": "example_databaseRootPassword", "dockerImage": "mysql:8", "command": "example_command", "env": "example_env", "memoryReservation": "example_memoryReservation", "memoryLimit": "example_memoryLimit", "cpuReservation": "example_cpuReservation", "cpuLimit": "example_cpuLimit", "externalPort": 0, "applicationStatus": "idle", "createdAt": "example_createdAt", "projectId": "example_projectId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "mysqlId": "example_mysqlId",
  "name": "example_name",
  "appName": "example_appName",
  "description": "example_description",
  "databaseName": "example_databaseName",
  "databaseUser": "example_databaseUser",
  "databasePassword": "example_databasePassword",
  "databaseRootPassword": "example_databaseRootPassword",
  "dockerImage": "mysql:8",
  "command": "example_command",
  "env": "example_env",
  "memoryReservation": "example_memoryReservation",
  "memoryLimit": "example_memoryLimit",
  "cpuReservation": "example_cpuReservation",
  "cpuLimit": "example_cpuLimit",
  "externalPort": 0,
  "applicationStatus": "idle",
  "createdAt": "example_createdAt",
  "projectId": "example_projectId"
}
```

Schema details:
  - `mysqlId` (string):  (Required: True)
  - `name` (string):  (Required: False)
  - `appName` (string):  (Required: False)
  - `description` (string):  (Required: False)
  - `databaseName` (string):  (Required: False)
  - `databaseUser` (string):  (Required: False)
  - `databasePassword` (string):  (Required: False)
  - `databaseRootPassword` (string):  (Required: False)
  - `dockerImage` (string) (Default: `mysql:8`):  (Required: False)
  - `command` (string):  (Required: False)
  - `env` (string):  (Required: False)
  - `memoryReservation` (string):  (Required: False)
  - `memoryLimit` (string):  (Required: False)
  - `cpuReservation` (string):  (Required: False)
  - `cpuLimit` (string):  (Required: False)
  - `externalPort` (number):  (Required: False)
  - `applicationStatus` (string) (Enum: ['idle', 'running', 'done', 'error']):  (Required: False)
  - `createdAt` (string):  (Required: False)
  - `projectId` (string):  (Required: False)

---

## POST /mysql.move
**Operation ID:** `mysql-move`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/mysql.move' -H 'Content-Type: application/json' -d '{"mysqlId": "example_mysqlId", "targetProjectId": "example_targetProjectId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "mysqlId": "example_mysqlId",
  "targetProjectId": "example_targetProjectId"
}
```

Schema details:
  - `mysqlId` (string):  (Required: True)
  - `targetProjectId` (string):  (Required: True)

---

## POST /mysql.rebuild
**Operation ID:** `mysql-rebuild`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/mysql.rebuild' -H 'Content-Type: application/json' -d '{"mysqlId": "example_mysqlId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "mysqlId": "example_mysqlId"
}
```

Schema details:
  - `mysqlId` (string):  (Required: True)

---

## POST /postgres.create
**Operation ID:** `postgres-create`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/postgres.create' -H 'Content-Type: application/json' -d '{"name": "example_name", "appName": "example_appName", "databaseName": "example_databaseName", "databaseUser": "example_databaseUser", "databasePassword": "example_databasePassword", "dockerImage": "postgres:15", "projectId": "example_projectId", "description": "example_description", "serverId": "example_serverId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "name": "example_name",
  "appName": "example_appName",
  "databaseName": "example_databaseName",
  "databaseUser": "example_databaseUser",
  "databasePassword": "example_databasePassword",
  "dockerImage": "postgres:15",
  "projectId": "example_projectId",
  "description": "example_description",
  "serverId": "example_serverId"
}
```

Schema details:
  - `name` (string):  (Required: True)
  - `appName` (string):  (Required: True)
  - `databaseName` (string):  (Required: True)
  - `databaseUser` (string):  (Required: True)
  - `databasePassword` (string):  (Required: True)
  - `dockerImage` (string) (Default: `postgres:15`):  (Required: False)
  - `projectId` (string):  (Required: True)
  - `description` (string):  (Required: False)
  - `serverId` (string):  (Required: False)

---

## GET /postgres.one
**Operation ID:** `postgres-one`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/postgres.one?postgresId=YOUR_POSTGRESID'
```

**Query Parameters:**
* `postgresId` (string): No description. (Required: True). Example: `YOUR_POSTGRESID`

---

## POST /postgres.start
**Operation ID:** `postgres-start`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/postgres.start' -H 'Content-Type: application/json' -d '{"postgresId": "example_postgresId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "postgresId": "example_postgresId"
}
```

Schema details:
  - `postgresId` (string):  (Required: True)

---

## POST /postgres.stop
**Operation ID:** `postgres-stop`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/postgres.stop' -H 'Content-Type: application/json' -d '{"postgresId": "example_postgresId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "postgresId": "example_postgresId"
}
```

Schema details:
  - `postgresId` (string):  (Required: True)

---

## POST /postgres.saveExternalPort
**Operation ID:** `postgres-saveExternalPort`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/postgres.saveExternalPort' -H 'Content-Type: application/json' -d '{"postgresId": "example_postgresId", "externalPort": 0}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "postgresId": "example_postgresId",
  "externalPort": 0
}
```

Schema details:
  - `postgresId` (string):  (Required: True)
  - `externalPort` (number):  (Required: True)

---

## POST /postgres.deploy
**Operation ID:** `postgres-deploy`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/postgres.deploy' -H 'Content-Type: application/json' -d '{"postgresId": "example_postgresId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "postgresId": "example_postgresId"
}
```

Schema details:
  - `postgresId` (string):  (Required: True)

---

## POST /postgres.changeStatus
**Operation ID:** `postgres-changeStatus`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/postgres.changeStatus' -H 'Content-Type: application/json' -d '{"postgresId": "example_postgresId", "applicationStatus": "idle"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "postgresId": "example_postgresId",
  "applicationStatus": "idle"
}
```

Schema details:
  - `postgresId` (string):  (Required: True)
  - `applicationStatus` (string) (Enum: ['idle', 'running', 'done', 'error']):  (Required: True)

---

## POST /postgres.remove
**Operation ID:** `postgres-remove`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/postgres.remove' -H 'Content-Type: application/json' -d '{"postgresId": "example_postgresId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "postgresId": "example_postgresId"
}
```

Schema details:
  - `postgresId` (string):  (Required: True)

---

## POST /postgres.saveEnvironment
**Operation ID:** `postgres-saveEnvironment`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/postgres.saveEnvironment' -H 'Content-Type: application/json' -d '{"postgresId": "example_postgresId", "env": "example_env"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "postgresId": "example_postgresId",
  "env": "example_env"
}
```

Schema details:
  - `postgresId` (string):  (Required: True)
  - `env` (string):  (Required: False)

---

## POST /postgres.reload
**Operation ID:** `postgres-reload`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/postgres.reload' -H 'Content-Type: application/json' -d '{"postgresId": "example_postgresId", "appName": "example_appName"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "postgresId": "example_postgresId",
  "appName": "example_appName"
}
```

Schema details:
  - `postgresId` (string):  (Required: True)
  - `appName` (string):  (Required: True)

---

## POST /postgres.update
**Operation ID:** `postgres-update`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/postgres.update' -H 'Content-Type: application/json' -d '{"postgresId": "example_postgresId", "name": "example_name", "appName": "example_appName", "databaseName": "example_databaseName", "databaseUser": "example_databaseUser", "databasePassword": "example_databasePassword", "description": "example_description", "dockerImage": "postgres:15", "command": "example_command", "env": "example_env", "memoryReservation": "example_memoryReservation", "externalPort": 0, "memoryLimit": "example_memoryLimit", "cpuReservation": "example_cpuReservation", "cpuLimit": "example_cpuLimit", "applicationStatus": "idle", "createdAt": "example_createdAt", "projectId": "example_projectId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "postgresId": "example_postgresId",
  "name": "example_name",
  "appName": "example_appName",
  "databaseName": "example_databaseName",
  "databaseUser": "example_databaseUser",
  "databasePassword": "example_databasePassword",
  "description": "example_description",
  "dockerImage": "postgres:15",
  "command": "example_command",
  "env": "example_env",
  "memoryReservation": "example_memoryReservation",
  "externalPort": 0,
  "memoryLimit": "example_memoryLimit",
  "cpuReservation": "example_cpuReservation",
  "cpuLimit": "example_cpuLimit",
  "applicationStatus": "idle",
  "createdAt": "example_createdAt",
  "projectId": "example_projectId"
}
```

Schema details:
  - `postgresId` (string):  (Required: True)
  - `name` (string):  (Required: False)
  - `appName` (string):  (Required: False)
  - `databaseName` (string):  (Required: False)
  - `databaseUser` (string):  (Required: False)
  - `databasePassword` (string):  (Required: False)
  - `description` (string):  (Required: False)
  - `dockerImage` (string) (Default: `postgres:15`):  (Required: False)
  - `command` (string):  (Required: False)
  - `env` (string):  (Required: False)
  - `memoryReservation` (string):  (Required: False)
  - `externalPort` (number):  (Required: False)
  - `memoryLimit` (string):  (Required: False)
  - `cpuReservation` (string):  (Required: False)
  - `cpuLimit` (string):  (Required: False)
  - `applicationStatus` (string) (Enum: ['idle', 'running', 'done', 'error']):  (Required: False)
  - `createdAt` (string):  (Required: False)
  - `projectId` (string):  (Required: False)

---

## POST /postgres.move
**Operation ID:** `postgres-move`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/postgres.move' -H 'Content-Type: application/json' -d '{"postgresId": "example_postgresId", "targetProjectId": "example_targetProjectId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "postgresId": "example_postgresId",
  "targetProjectId": "example_targetProjectId"
}
```

Schema details:
  - `postgresId` (string):  (Required: True)
  - `targetProjectId` (string):  (Required: True)

---

## POST /postgres.rebuild
**Operation ID:** `postgres-rebuild`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/postgres.rebuild' -H 'Content-Type: application/json' -d '{"postgresId": "example_postgresId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "postgresId": "example_postgresId"
}
```

Schema details:
  - `postgresId` (string):  (Required: True)

---

## POST /redis.create
**Operation ID:** `redis-create`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/redis.create' -H 'Content-Type: application/json' -d '{"name": "example_name", "appName": "example_appName", "databasePassword": "example_databasePassword", "dockerImage": "redis:8", "projectId": "example_projectId", "description": "example_description", "serverId": "example_serverId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "name": "example_name",
  "appName": "example_appName",
  "databasePassword": "example_databasePassword",
  "dockerImage": "redis:8",
  "projectId": "example_projectId",
  "description": "example_description",
  "serverId": "example_serverId"
}
```

Schema details:
  - `name` (string):  (Required: True)
  - `appName` (string):  (Required: True)
  - `databasePassword` (string):  (Required: True)
  - `dockerImage` (string) (Default: `redis:8`):  (Required: False)
  - `projectId` (string):  (Required: True)
  - `description` (string):  (Required: False)
  - `serverId` (string):  (Required: False)

---

## GET /redis.one
**Operation ID:** `redis-one`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/redis.one?redisId=YOUR_REDISID'
```

**Query Parameters:**
* `redisId` (string): No description. (Required: True). Example: `YOUR_REDISID`

---

## POST /redis.start
**Operation ID:** `redis-start`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/redis.start' -H 'Content-Type: application/json' -d '{"redisId": "example_redisId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "redisId": "example_redisId"
}
```

Schema details:
  - `redisId` (string):  (Required: True)

---

## POST /redis.reload
**Operation ID:** `redis-reload`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/redis.reload' -H 'Content-Type: application/json' -d '{"redisId": "example_redisId", "appName": "example_appName"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "redisId": "example_redisId",
  "appName": "example_appName"
}
```

Schema details:
  - `redisId` (string):  (Required: True)
  - `appName` (string):  (Required: True)

---

## POST /redis.stop
**Operation ID:** `redis-stop`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/redis.stop' -H 'Content-Type: application/json' -d '{"redisId": "example_redisId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "redisId": "example_redisId"
}
```

Schema details:
  - `redisId` (string):  (Required: True)

---

## POST /redis.saveExternalPort
**Operation ID:** `redis-saveExternalPort`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/redis.saveExternalPort' -H 'Content-Type: application/json' -d '{"redisId": "example_redisId", "externalPort": 0}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "redisId": "example_redisId",
  "externalPort": 0
}
```

Schema details:
  - `redisId` (string):  (Required: True)
  - `externalPort` (number):  (Required: True)

---

## POST /redis.deploy
**Operation ID:** `redis-deploy`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/redis.deploy' -H 'Content-Type: application/json' -d '{"redisId": "example_redisId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "redisId": "example_redisId"
}
```

Schema details:
  - `redisId` (string):  (Required: True)

---

## POST /redis.changeStatus
**Operation ID:** `redis-changeStatus`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/redis.changeStatus' -H 'Content-Type: application/json' -d '{"redisId": "example_redisId", "applicationStatus": "idle"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "redisId": "example_redisId",
  "applicationStatus": "idle"
}
```

Schema details:
  - `redisId` (string):  (Required: True)
  - `applicationStatus` (string) (Enum: ['idle', 'running', 'done', 'error']):  (Required: True)

---

## POST /redis.remove
**Operation ID:** `redis-remove`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/redis.remove' -H 'Content-Type: application/json' -d '{"redisId": "example_redisId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "redisId": "example_redisId"
}
```

Schema details:
  - `redisId` (string):  (Required: True)

---

## POST /redis.saveEnvironment
**Operation ID:** `redis-saveEnvironment`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/redis.saveEnvironment' -H 'Content-Type: application/json' -d '{"redisId": "example_redisId", "env": "example_env"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "redisId": "example_redisId",
  "env": "example_env"
}
```

Schema details:
  - `redisId` (string):  (Required: True)
  - `env` (string):  (Required: False)

---

## POST /redis.update
**Operation ID:** `redis-update`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/redis.update' -H 'Content-Type: application/json' -d '{"redisId": "example_redisId", "name": "example_name", "appName": "example_appName", "description": "example_description", "databasePassword": "example_databasePassword", "dockerImage": "redis:8", "command": "example_command", "env": "example_env", "memoryReservation": "example_memoryReservation", "memoryLimit": "example_memoryLimit", "cpuReservation": "example_cpuReservation", "cpuLimit": "example_cpuLimit", "externalPort": 0, "createdAt": "example_createdAt", "applicationStatus": "idle", "projectId": "example_projectId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "redisId": "example_redisId",
  "name": "example_name",
  "appName": "example_appName",
  "description": "example_description",
  "databasePassword": "example_databasePassword",
  "dockerImage": "redis:8",
  "command": "example_command",
  "env": "example_env",
  "memoryReservation": "example_memoryReservation",
  "memoryLimit": "example_memoryLimit",
  "cpuReservation": "example_cpuReservation",
  "cpuLimit": "example_cpuLimit",
  "externalPort": 0,
  "createdAt": "example_createdAt",
  "applicationStatus": "idle",
  "projectId": "example_projectId"
}
```

Schema details:
  - `redisId` (string):  (Required: True)
  - `name` (string):  (Required: False)
  - `appName` (string):  (Required: False)
  - `description` (string):  (Required: False)
  - `databasePassword` (string):  (Required: False)
  - `dockerImage` (string) (Default: `redis:8`):  (Required: False)
  - `command` (string):  (Required: False)
  - `env` (string):  (Required: False)
  - `memoryReservation` (string):  (Required: False)
  - `memoryLimit` (string):  (Required: False)
  - `cpuReservation` (string):  (Required: False)
  - `cpuLimit` (string):  (Required: False)
  - `externalPort` (number):  (Required: False)
  - `createdAt` (string):  (Required: False)
  - `applicationStatus` (string) (Enum: ['idle', 'running', 'done', 'error']):  (Required: False)
  - `projectId` (string):  (Required: False)

---

## POST /redis.move
**Operation ID:** `redis-move`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/redis.move' -H 'Content-Type: application/json' -d '{"redisId": "example_redisId", "targetProjectId": "example_targetProjectId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "redisId": "example_redisId",
  "targetProjectId": "example_targetProjectId"
}
```

Schema details:
  - `redisId` (string):  (Required: True)
  - `targetProjectId` (string):  (Required: True)

---

## POST /redis.rebuild
**Operation ID:** `redis-rebuild`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/redis.rebuild' -H 'Content-Type: application/json' -d '{"redisId": "example_redisId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "redisId": "example_redisId"
}
```

Schema details:
  - `redisId` (string):  (Required: True)

---

## POST /mongo.create
**Operation ID:** `mongo-create`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/mongo.create' -H 'Content-Type: application/json' -d '{"name": "example_name", "appName": "example_appName", "dockerImage": "mongo:15", "projectId": "example_projectId", "description": "example_description", "databaseUser": "example_databaseUser", "databasePassword": "example_databasePassword", "serverId": "example_serverId", "replicaSets": false}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "name": "example_name",
  "appName": "example_appName",
  "dockerImage": "mongo:15",
  "projectId": "example_projectId",
  "description": "example_description",
  "databaseUser": "example_databaseUser",
  "databasePassword": "example_databasePassword",
  "serverId": "example_serverId",
  "replicaSets": false
}
```

Schema details:
  - `name` (string):  (Required: True)
  - `appName` (string):  (Required: True)
  - `dockerImage` (string) (Default: `mongo:15`):  (Required: False)
  - `projectId` (string):  (Required: True)
  - `description` (string):  (Required: False)
  - `databaseUser` (string):  (Required: True)
  - `databasePassword` (string):  (Required: True)
  - `serverId` (string):  (Required: False)
  - `replicaSets` (boolean) (Default: `False`):  (Required: False)

---

## GET /mongo.one
**Operation ID:** `mongo-one`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/mongo.one?mongoId=YOUR_MONGOID'
```

**Query Parameters:**
* `mongoId` (string): No description. (Required: True). Example: `YOUR_MONGOID`

---

## POST /mongo.start
**Operation ID:** `mongo-start`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/mongo.start' -H 'Content-Type: application/json' -d '{"mongoId": "example_mongoId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "mongoId": "example_mongoId"
}
```

Schema details:
  - `mongoId` (string):  (Required: True)

---

## POST /mongo.stop
**Operation ID:** `mongo-stop`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/mongo.stop' -H 'Content-Type: application/json' -d '{"mongoId": "example_mongoId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "mongoId": "example_mongoId"
}
```

Schema details:
  - `mongoId` (string):  (Required: True)

---

## POST /mongo.saveExternalPort
**Operation ID:** `mongo-saveExternalPort`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/mongo.saveExternalPort' -H 'Content-Type: application/json' -d '{"mongoId": "example_mongoId", "externalPort": 0}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "mongoId": "example_mongoId",
  "externalPort": 0
}
```

Schema details:
  - `mongoId` (string):  (Required: True)
  - `externalPort` (number):  (Required: True)

---

## POST /mongo.deploy
**Operation ID:** `mongo-deploy`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/mongo.deploy' -H 'Content-Type: application/json' -d '{"mongoId": "example_mongoId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "mongoId": "example_mongoId"
}
```

Schema details:
  - `mongoId` (string):  (Required: True)

---

## POST /mongo.changeStatus
**Operation ID:** `mongo-changeStatus`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/mongo.changeStatus' -H 'Content-Type: application/json' -d '{"mongoId": "example_mongoId", "applicationStatus": "idle"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "mongoId": "example_mongoId",
  "applicationStatus": "idle"
}
```

Schema details:
  - `mongoId` (string):  (Required: True)
  - `applicationStatus` (string) (Enum: ['idle', 'running', 'done', 'error']):  (Required: True)

---

## POST /mongo.reload
**Operation ID:** `mongo-reload`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/mongo.reload' -H 'Content-Type: application/json' -d '{"mongoId": "example_mongoId", "appName": "example_appName"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "mongoId": "example_mongoId",
  "appName": "example_appName"
}
```

Schema details:
  - `mongoId` (string):  (Required: True)
  - `appName` (string):  (Required: True)

---

## POST /mongo.remove
**Operation ID:** `mongo-remove`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/mongo.remove' -H 'Content-Type: application/json' -d '{"mongoId": "example_mongoId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "mongoId": "example_mongoId"
}
```

Schema details:
  - `mongoId` (string):  (Required: True)

---

## POST /mongo.saveEnvironment
**Operation ID:** `mongo-saveEnvironment`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/mongo.saveEnvironment' -H 'Content-Type: application/json' -d '{"mongoId": "example_mongoId", "env": "example_env"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "mongoId": "example_mongoId",
  "env": "example_env"
}
```

Schema details:
  - `mongoId` (string):  (Required: True)
  - `env` (string):  (Required: False)

---

## POST /mongo.update
**Operation ID:** `mongo-update`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/mongo.update' -H 'Content-Type: application/json' -d '{"mongoId": "example_mongoId", "name": "example_name", "appName": "example_appName", "description": "example_description", "databaseUser": "example_databaseUser", "databasePassword": "example_databasePassword", "dockerImage": "mongo:15", "command": "example_command", "env": "example_env", "memoryReservation": "example_memoryReservation", "memoryLimit": "example_memoryLimit", "cpuReservation": "example_cpuReservation", "cpuLimit": "example_cpuLimit", "externalPort": 0, "applicationStatus": "idle", "createdAt": "example_createdAt", "projectId": "example_projectId", "replicaSets": false}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "mongoId": "example_mongoId",
  "name": "example_name",
  "appName": "example_appName",
  "description": "example_description",
  "databaseUser": "example_databaseUser",
  "databasePassword": "example_databasePassword",
  "dockerImage": "mongo:15",
  "command": "example_command",
  "env": "example_env",
  "memoryReservation": "example_memoryReservation",
  "memoryLimit": "example_memoryLimit",
  "cpuReservation": "example_cpuReservation",
  "cpuLimit": "example_cpuLimit",
  "externalPort": 0,
  "applicationStatus": "idle",
  "createdAt": "example_createdAt",
  "projectId": "example_projectId",
  "replicaSets": false
}
```

Schema details:
  - `mongoId` (string):  (Required: True)
  - `name` (string):  (Required: False)
  - `appName` (string):  (Required: False)
  - `description` (string):  (Required: False)
  - `databaseUser` (string):  (Required: False)
  - `databasePassword` (string):  (Required: False)
  - `dockerImage` (string) (Default: `mongo:15`):  (Required: False)
  - `command` (string):  (Required: False)
  - `env` (string):  (Required: False)
  - `memoryReservation` (string):  (Required: False)
  - `memoryLimit` (string):  (Required: False)
  - `cpuReservation` (string):  (Required: False)
  - `cpuLimit` (string):  (Required: False)
  - `externalPort` (number):  (Required: False)
  - `applicationStatus` (string) (Enum: ['idle', 'running', 'done', 'error']):  (Required: False)
  - `createdAt` (string):  (Required: False)
  - `projectId` (string):  (Required: False)
  - `replicaSets` (boolean) (Default: `False`):  (Required: False)

---

## POST /mongo.move
**Operation ID:** `mongo-move`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/mongo.move' -H 'Content-Type: application/json' -d '{"mongoId": "example_mongoId", "targetProjectId": "example_targetProjectId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "mongoId": "example_mongoId",
  "targetProjectId": "example_targetProjectId"
}
```

Schema details:
  - `mongoId` (string):  (Required: True)
  - `targetProjectId` (string):  (Required: True)

---

## POST /mongo.rebuild
**Operation ID:** `mongo-rebuild`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/mongo.rebuild' -H 'Content-Type: application/json' -d '{"mongoId": "example_mongoId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "mongoId": "example_mongoId"
}
```

Schema details:
  - `mongoId` (string):  (Required: True)

---

## POST /mariadb.create
**Operation ID:** `mariadb-create`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/mariadb.create' -H 'Content-Type: application/json' -d '{"name": "example_name", "appName": "example_appName", "dockerImage": "mariadb:6", "databaseRootPassword": "example_databaseRootPassword", "projectId": "example_projectId", "description": "example_description", "databaseName": "example_databaseName", "databaseUser": "example_databaseUser", "databasePassword": "example_databasePassword", "serverId": "example_serverId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "name": "example_name",
  "appName": "example_appName",
  "dockerImage": "mariadb:6",
  "databaseRootPassword": "example_databaseRootPassword",
  "projectId": "example_projectId",
  "description": "example_description",
  "databaseName": "example_databaseName",
  "databaseUser": "example_databaseUser",
  "databasePassword": "example_databasePassword",
  "serverId": "example_serverId"
}
```

Schema details:
  - `name` (string):  (Required: True)
  - `appName` (string):  (Required: True)
  - `dockerImage` (string) (Default: `mariadb:6`):  (Required: False)
  - `databaseRootPassword` (string):  (Required: True)
  - `projectId` (string):  (Required: True)
  - `description` (string):  (Required: False)
  - `databaseName` (string):  (Required: True)
  - `databaseUser` (string):  (Required: True)
  - `databasePassword` (string):  (Required: True)
  - `serverId` (string):  (Required: False)

---

## GET /mariadb.one
**Operation ID:** `mariadb-one`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/mariadb.one?mariadbId=YOUR_MARIADBID'
```

**Query Parameters:**
* `mariadbId` (string): No description. (Required: True). Example: `YOUR_MARIADBID`

---

## POST /mariadb.start
**Operation ID:** `mariadb-start`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/mariadb.start' -H 'Content-Type: application/json' -d '{"mariadbId": "example_mariadbId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "mariadbId": "example_mariadbId"
}
```

Schema details:
  - `mariadbId` (string):  (Required: True)

---

## POST /mariadb.stop
**Operation ID:** `mariadb-stop`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/mariadb.stop' -H 'Content-Type: application/json' -d '{"mariadbId": "example_mariadbId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "mariadbId": "example_mariadbId"
}
```

Schema details:
  - `mariadbId` (string):  (Required: True)

---

## POST /mariadb.saveExternalPort
**Operation ID:** `mariadb-saveExternalPort`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/mariadb.saveExternalPort' -H 'Content-Type: application/json' -d '{"mariadbId": "example_mariadbId", "externalPort": 0}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "mariadbId": "example_mariadbId",
  "externalPort": 0
}
```

Schema details:
  - `mariadbId` (string):  (Required: True)
  - `externalPort` (number):  (Required: True)

---

## POST /mariadb.deploy
**Operation ID:** `mariadb-deploy`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/mariadb.deploy' -H 'Content-Type: application/json' -d '{"mariadbId": "example_mariadbId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "mariadbId": "example_mariadbId"
}
```

Schema details:
  - `mariadbId` (string):  (Required: True)

---

## POST /mariadb.changeStatus
**Operation ID:** `mariadb-changeStatus`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/mariadb.changeStatus' -H 'Content-Type: application/json' -d '{"mariadbId": "example_mariadbId", "applicationStatus": "idle"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "mariadbId": "example_mariadbId",
  "applicationStatus": "idle"
}
```

Schema details:
  - `mariadbId` (string):  (Required: True)
  - `applicationStatus` (string) (Enum: ['idle', 'running', 'done', 'error']):  (Required: True)

---

## POST /mariadb.remove
**Operation ID:** `mariadb-remove`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/mariadb.remove' -H 'Content-Type: application/json' -d '{"mariadbId": "example_mariadbId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "mariadbId": "example_mariadbId"
}
```

Schema details:
  - `mariadbId` (string):  (Required: True)

---

## POST /mariadb.saveEnvironment
**Operation ID:** `mariadb-saveEnvironment`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/mariadb.saveEnvironment' -H 'Content-Type: application/json' -d '{"mariadbId": "example_mariadbId", "env": "example_env"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "mariadbId": "example_mariadbId",
  "env": "example_env"
}
```

Schema details:
  - `mariadbId` (string):  (Required: True)
  - `env` (string):  (Required: False)

---

## POST /mariadb.reload
**Operation ID:** `mariadb-reload`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/mariadb.reload' -H 'Content-Type: application/json' -d '{"mariadbId": "example_mariadbId", "appName": "example_appName"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "mariadbId": "example_mariadbId",
  "appName": "example_appName"
}
```

Schema details:
  - `mariadbId` (string):  (Required: True)
  - `appName` (string):  (Required: True)

---

## POST /mariadb.update
**Operation ID:** `mariadb-update`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/mariadb.update' -H 'Content-Type: application/json' -d '{"mariadbId": "example_mariadbId", "name": "example_name", "appName": "example_appName", "description": "example_description", "databaseName": "example_databaseName", "databaseUser": "example_databaseUser", "databasePassword": "example_databasePassword", "databaseRootPassword": "example_databaseRootPassword", "dockerImage": "mariadb:6", "command": "example_command", "env": "example_env", "memoryReservation": "example_memoryReservation", "memoryLimit": "example_memoryLimit", "cpuReservation": "example_cpuReservation", "cpuLimit": "example_cpuLimit", "externalPort": 0, "applicationStatus": "idle", "createdAt": "example_createdAt", "projectId": "example_projectId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "mariadbId": "example_mariadbId",
  "name": "example_name",
  "appName": "example_appName",
  "description": "example_description",
  "databaseName": "example_databaseName",
  "databaseUser": "example_databaseUser",
  "databasePassword": "example_databasePassword",
  "databaseRootPassword": "example_databaseRootPassword",
  "dockerImage": "mariadb:6",
  "command": "example_command",
  "env": "example_env",
  "memoryReservation": "example_memoryReservation",
  "memoryLimit": "example_memoryLimit",
  "cpuReservation": "example_cpuReservation",
  "cpuLimit": "example_cpuLimit",
  "externalPort": 0,
  "applicationStatus": "idle",
  "createdAt": "example_createdAt",
  "projectId": "example_projectId"
}
```

Schema details:
  - `mariadbId` (string):  (Required: True)
  - `name` (string):  (Required: False)
  - `appName` (string):  (Required: False)
  - `description` (string):  (Required: False)
  - `databaseName` (string):  (Required: False)
  - `databaseUser` (string):  (Required: False)
  - `databasePassword` (string):  (Required: False)
  - `databaseRootPassword` (string):  (Required: False)
  - `dockerImage` (string) (Default: `mariadb:6`):  (Required: False)
  - `command` (string):  (Required: False)
  - `env` (string):  (Required: False)
  - `memoryReservation` (string):  (Required: False)
  - `memoryLimit` (string):  (Required: False)
  - `cpuReservation` (string):  (Required: False)
  - `cpuLimit` (string):  (Required: False)
  - `externalPort` (number):  (Required: False)
  - `applicationStatus` (string) (Enum: ['idle', 'running', 'done', 'error']):  (Required: False)
  - `createdAt` (string):  (Required: False)
  - `projectId` (string):  (Required: False)

---

## POST /mariadb.move
**Operation ID:** `mariadb-move`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/mariadb.move' -H 'Content-Type: application/json' -d '{"mariadbId": "example_mariadbId", "targetProjectId": "example_targetProjectId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "mariadbId": "example_mariadbId",
  "targetProjectId": "example_targetProjectId"
}
```

Schema details:
  - `mariadbId` (string):  (Required: True)
  - `targetProjectId` (string):  (Required: True)

---

## POST /mariadb.rebuild
**Operation ID:** `mariadb-rebuild`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/mariadb.rebuild' -H 'Content-Type: application/json' -d '{"mariadbId": "example_mariadbId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "mariadbId": "example_mariadbId"
}
```

Schema details:
  - `mariadbId` (string):  (Required: True)

---

## POST /compose.create
**Operation ID:** `compose-create`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/compose.create' -H 'Content-Type: application/json' -d '{"name": "example_name", "description": "example_description", "projectId": "example_projectId", "composeType": "docker-compose", "appName": "example_appName", "serverId": "example_serverId", "composeFile": "example_composeFile"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "name": "example_name",
  "description": "example_description",
  "projectId": "example_projectId",
  "composeType": "docker-compose",
  "appName": "example_appName",
  "serverId": "example_serverId",
  "composeFile": "example_composeFile"
}
```

Schema details:
  - `name` (string):  (Required: True)
  - `description` (string):  (Required: False)
  - `projectId` (string):  (Required: True)
  - `composeType` (string) (Enum: ['docker-compose', 'stack']):  (Required: False)
  - `appName` (string):  (Required: False)
  - `serverId` (string):  (Required: False)
  - `composeFile` (string):  (Required: False)

---

## GET /compose.one
**Operation ID:** `compose-one`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/compose.one?composeId=YOUR_COMPOSEID'
```

**Query Parameters:**
* `composeId` (string): No description. (Required: True). Example: `YOUR_COMPOSEID`

---

## POST /compose.update
**Operation ID:** `compose-update`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/compose.update' -H 'Content-Type: application/json' -d '{"composeId": "example_composeId", "name": "example_name", "appName": "example_appName", "description": "example_description", "env": "example_env", "composeFile": "example_composeFile", "refreshToken": "example_refreshToken", "sourceType": "git", "composeType": "docker-compose", "repository": "example_repository", "owner": "example_owner", "branch": "example_branch", "autoDeploy": false, "gitlabProjectId": 0, "gitlabRepository": "example_gitlabRepository", "gitlabOwner": "example_gitlabOwner", "gitlabBranch": "example_gitlabBranch", "gitlabPathNamespace": "example_gitlabPathNamespace", "bitbucketRepository": "example_bitbucketRepository", "bitbucketOwner": "example_bitbucketOwner", "bitbucketBranch": "example_bitbucketBranch", "giteaRepository": "example_giteaRepository", "giteaOwner": "example_giteaOwner", "giteaBranch": "example_giteaBranch", "customGitUrl": "example_customGitUrl", "customGitBranch": "example_customGitBranch", "customGitSSHKeyId": "example_customGitSSHKeyId", "command": "example_command", "enableSubmodules": false, "composePath": "example_composePath", "suffix": "example_suffix", "randomize": false, "isolatedDeployment": false, "triggerType": "push", "composeStatus": "idle", "projectId": "example_projectId", "createdAt": "example_createdAt", "watchPaths": [], "githubId": "example_githubId", "gitlabId": "example_gitlabId", "bitbucketId": "example_bitbucketId", "giteaId": "example_giteaId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "composeId": "example_composeId",
  "name": "example_name",
  "appName": "example_appName",
  "description": "example_description",
  "env": "example_env",
  "composeFile": "example_composeFile",
  "refreshToken": "example_refreshToken",
  "sourceType": "git",
  "composeType": "docker-compose",
  "repository": "example_repository",
  "owner": "example_owner",
  "branch": "example_branch",
  "autoDeploy": false,
  "gitlabProjectId": 0,
  "gitlabRepository": "example_gitlabRepository",
  "gitlabOwner": "example_gitlabOwner",
  "gitlabBranch": "example_gitlabBranch",
  "gitlabPathNamespace": "example_gitlabPathNamespace",
  "bitbucketRepository": "example_bitbucketRepository",
  "bitbucketOwner": "example_bitbucketOwner",
  "bitbucketBranch": "example_bitbucketBranch",
  "giteaRepository": "example_giteaRepository",
  "giteaOwner": "example_giteaOwner",
  "giteaBranch": "example_giteaBranch",
  "customGitUrl": "example_customGitUrl",
  "customGitBranch": "example_customGitBranch",
  "customGitSSHKeyId": "example_customGitSSHKeyId",
  "command": "example_command",
  "enableSubmodules": false,
  "composePath": "example_composePath",
  "suffix": "example_suffix",
  "randomize": false,
  "isolatedDeployment": false,
  "triggerType": "push",
  "composeStatus": "idle",
  "projectId": "example_projectId",
  "createdAt": "example_createdAt",
  "watchPaths": [],
  "githubId": "example_githubId",
  "gitlabId": "example_gitlabId",
  "bitbucketId": "example_bitbucketId",
  "giteaId": "example_giteaId"
}
```

Schema details:
  - `composeId` (string):  (Required: True)
  - `name` (string):  (Required: False)
  - `appName` (string):  (Required: False)
  - `description` (string):  (Required: False)
  - `env` (string):  (Required: False)
  - `composeFile` (string):  (Required: False)
  - `refreshToken` (string):  (Required: False)
  - `sourceType` (string) (Enum: ['git', 'github', 'gitlab', 'bitbucket', 'gitea', 'raw']):  (Required: False)
  - `composeType` (string) (Enum: ['docker-compose', 'stack']):  (Required: False)
  - `repository` (string):  (Required: False)
  - `owner` (string):  (Required: False)
  - `branch` (string):  (Required: False)
  - `autoDeploy` (boolean):  (Required: False)
  - `gitlabProjectId` (number):  (Required: False)
  - `gitlabRepository` (string):  (Required: False)
  - `gitlabOwner` (string):  (Required: False)
  - `gitlabBranch` (string):  (Required: False)
  - `gitlabPathNamespace` (string):  (Required: False)
  - `bitbucketRepository` (string):  (Required: False)
  - `bitbucketOwner` (string):  (Required: False)
  - `bitbucketBranch` (string):  (Required: False)
  - `giteaRepository` (string):  (Required: False)
  - `giteaOwner` (string):  (Required: False)
  - `giteaBranch` (string):  (Required: False)
  - `customGitUrl` (string):  (Required: False)
  - `customGitBranch` (string):  (Required: False)
  - `customGitSSHKeyId` (string):  (Required: False)
  - `command` (string):  (Required: False)
  - `enableSubmodules` (boolean):  (Required: False)
  - `composePath` (string):  (Required: False)
  - `suffix` (string):  (Required: False)
  - `randomize` (boolean):  (Required: False)
  - `isolatedDeployment` (boolean):  (Required: False)
  - `triggerType` (string) (Enum: ['push', 'tag']):  (Required: False)
  - `composeStatus` (string) (Enum: ['idle', 'running', 'done', 'error']):  (Required: False)
  - `projectId` (string):  (Required: False)
  - `createdAt` (string):  (Required: False)
  - `watchPaths` (array):  (Required: False)
  - `githubId` (string):  (Required: False)
  - `gitlabId` (string):  (Required: False)
  - `bitbucketId` (string):  (Required: False)
  - `giteaId` (string):  (Required: False)

---

## POST /compose.delete
**Operation ID:** `compose-delete`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/compose.delete' -H 'Content-Type: application/json' -d '{"composeId": "example_composeId", "deleteVolumes": false}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "composeId": "example_composeId",
  "deleteVolumes": false
}
```

Schema details:
  - `composeId` (string):  (Required: True)
  - `deleteVolumes` (boolean):  (Required: True)

---

## POST /compose.cleanQueues
**Operation ID:** `compose-cleanQueues`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/compose.cleanQueues' -H 'Content-Type: application/json' -d '{"composeId": "example_composeId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "composeId": "example_composeId"
}
```

Schema details:
  - `composeId` (string):  (Required: True)

---

## GET /compose.loadServices
**Operation ID:** `compose-loadServices`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/compose.loadServices?composeId=YOUR_COMPOSEID&type=cache'
```

**Query Parameters:**
* `composeId` (string): No description. (Required: True). Example: `YOUR_COMPOSEID`
* `type` (string): No description. (Required: False). Example: `cache`

---

## POST /compose.fetchSourceType
**Operation ID:** `compose-fetchSourceType`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/compose.fetchSourceType' -H 'Content-Type: application/json' -d '{"composeId": "example_composeId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "composeId": "example_composeId"
}
```

Schema details:
  - `composeId` (string):  (Required: True)

---

## POST /compose.randomizeCompose
**Operation ID:** `compose-randomizeCompose`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/compose.randomizeCompose' -H 'Content-Type: application/json' -d '{"composeId": "example_composeId", "suffix": "example_suffix"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "composeId": "example_composeId",
  "suffix": "example_suffix"
}
```

Schema details:
  - `composeId` (string):  (Required: True)
  - `suffix` (string):  (Required: False)

---

## POST /compose.isolatedDeployment
**Operation ID:** `compose-isolatedDeployment`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/compose.isolatedDeployment' -H 'Content-Type: application/json' -d '{"composeId": "example_composeId", "suffix": "example_suffix"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "composeId": "example_composeId",
  "suffix": "example_suffix"
}
```

Schema details:
  - `composeId` (string):  (Required: True)
  - `suffix` (string):  (Required: False)

---

## GET /compose.getConvertedCompose
**Operation ID:** `compose-getConvertedCompose`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/compose.getConvertedCompose?composeId=YOUR_COMPOSEID'
```

**Query Parameters:**
* `composeId` (string): No description. (Required: True). Example: `YOUR_COMPOSEID`

---

## POST /compose.deploy
**Operation ID:** `compose-deploy`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/compose.deploy' -H 'Content-Type: application/json' -d '{"composeId": "example_composeId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "composeId": "example_composeId"
}
```

Schema details:
  - `composeId` (string):  (Required: True)

---

## POST /compose.redeploy
**Operation ID:** `compose-redeploy`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/compose.redeploy' -H 'Content-Type: application/json' -d '{"composeId": "example_composeId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "composeId": "example_composeId"
}
```

Schema details:
  - `composeId` (string):  (Required: True)

---

## POST /compose.stop
**Operation ID:** `compose-stop`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/compose.stop' -H 'Content-Type: application/json' -d '{"composeId": "example_composeId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "composeId": "example_composeId"
}
```

Schema details:
  - `composeId` (string):  (Required: True)

---

## POST /compose.start
**Operation ID:** `compose-start`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/compose.start' -H 'Content-Type: application/json' -d '{"composeId": "example_composeId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "composeId": "example_composeId"
}
```

Schema details:
  - `composeId` (string):  (Required: True)

---

## GET /compose.getDefaultCommand
**Operation ID:** `compose-getDefaultCommand`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/compose.getDefaultCommand?composeId=YOUR_COMPOSEID'
```

**Query Parameters:**
* `composeId` (string): No description. (Required: True). Example: `YOUR_COMPOSEID`

---

## POST /compose.refreshToken
**Operation ID:** `compose-refreshToken`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/compose.refreshToken' -H 'Content-Type: application/json' -d '{"composeId": "example_composeId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "composeId": "example_composeId"
}
```

Schema details:
  - `composeId` (string):  (Required: True)

---

## POST /compose.deployTemplate
**Operation ID:** `compose-deployTemplate`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/compose.deployTemplate' -H 'Content-Type: application/json' -d '{"projectId": "example_projectId", "serverId": "example_serverId", "id": "example_id", "baseUrl": "example_baseUrl"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "projectId": "example_projectId",
  "serverId": "example_serverId",
  "id": "example_id",
  "baseUrl": "example_baseUrl"
}
```

Schema details:
  - `projectId` (string):  (Required: True)
  - `serverId` (string):  (Required: False)
  - `id` (string):  (Required: True)
  - `baseUrl` (string):  (Required: False)

---

## GET /compose.templates
**Operation ID:** `compose-templates`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/compose.templates?baseUrl=YOUR_BASEURL'
```

**Query Parameters:**
* `baseUrl` (string): No description. (Required: False). Example: `YOUR_BASEURL`

---

## GET /compose.getTags
**Operation ID:** `compose-getTags`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/compose.getTags?baseUrl=YOUR_BASEURL'
```

**Query Parameters:**
* `baseUrl` (string): No description. (Required: False). Example: `YOUR_BASEURL`

---

## POST /compose.move
**Operation ID:** `compose-move`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/compose.move' -H 'Content-Type: application/json' -d '{"composeId": "example_composeId", "targetProjectId": "example_targetProjectId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "composeId": "example_composeId",
  "targetProjectId": "example_targetProjectId"
}
```

Schema details:
  - `composeId` (string):  (Required: True)
  - `targetProjectId` (string):  (Required: True)

---

## POST /compose.processTemplate
**Operation ID:** `compose-processTemplate`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/compose.processTemplate' -H 'Content-Type: application/json' -d '{"base64": "example_base64", "composeId": "example_composeId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "base64": "example_base64",
  "composeId": "example_composeId"
}
```

Schema details:
  - `base64` (string):  (Required: True)
  - `composeId` (string):  (Required: True)

---

## POST /compose.import
**Operation ID:** `compose-import`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/compose.import' -H 'Content-Type: application/json' -d '{"base64": "example_base64", "composeId": "example_composeId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "base64": "example_base64",
  "composeId": "example_composeId"
}
```

Schema details:
  - `base64` (string):  (Required: True)
  - `composeId` (string):  (Required: True)

---

## GET /user.all
**Operation ID:** `user-all`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/user.all'
```

---

## GET /user.one
**Operation ID:** `user-one`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/user.one?userId=YOUR_USERID'
```

**Query Parameters:**
* `userId` (string): No description. (Required: True). Example: `YOUR_USERID`

---

## GET /user.get
**Operation ID:** `user-get`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/user.get'
```

---

## GET /user.haveRootAccess
**Operation ID:** `user-haveRootAccess`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/user.haveRootAccess'
```

---

## GET /user.getBackups
**Operation ID:** `user-getBackups`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/user.getBackups'
```

---

## GET /user.getServerMetrics
**Operation ID:** `user-getServerMetrics`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/user.getServerMetrics'
```

---

## POST /user.update
**Operation ID:** `user-update`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/user.update' -H 'Content-Type: application/json' -d '{"id": "example_id", "name": "example_name", "isRegistered": false, "expirationDate": "example_expirationDate", "createdAt2": "example_createdAt2", "createdAt": "example_createdAt", "twoFactorEnabled": false, "email": "example_email", "emailVerified": false, "image": "example_image", "banned": false, "banReason": "example_banReason", "banExpires": "example_banExpires", "updatedAt": "example_updatedAt", "serverIp": "example_serverIp", "certificateType": "letsencrypt", "https": false, "host": "example_host", "letsEncryptEmail": "example_letsEncryptEmail", "sshPrivateKey": "example_sshPrivateKey", "enableDockerCleanup": false, "logCleanupCron": "example_logCleanupCron", "enablePaidFeatures": false, "allowImpersonation": false, "metricsConfig": {}, "cleanupCacheApplications": false, "cleanupCacheOnPreviews": false, "cleanupCacheOnCompose": false, "stripeCustomerId": "example_stripeCustomerId", "stripeSubscriptionId": "example_stripeSubscriptionId", "serversQuantity": 0, "password": "example_password", "currentPassword": "example_currentPassword"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "id": "example_id",
  "name": "example_name",
  "isRegistered": false,
  "expirationDate": "example_expirationDate",
  "createdAt2": "example_createdAt2",
  "createdAt": "example_createdAt",
  "twoFactorEnabled": false,
  "email": "example_email",
  "emailVerified": false,
  "image": "example_image",
  "banned": false,
  "banReason": "example_banReason",
  "banExpires": "example_banExpires",
  "updatedAt": "example_updatedAt",
  "serverIp": "example_serverIp",
  "certificateType": "letsencrypt",
  "https": false,
  "host": "example_host",
  "letsEncryptEmail": "example_letsEncryptEmail",
  "sshPrivateKey": "example_sshPrivateKey",
  "enableDockerCleanup": false,
  "logCleanupCron": "example_logCleanupCron",
  "enablePaidFeatures": false,
  "allowImpersonation": false,
  "metricsConfig": {},
  "cleanupCacheApplications": false,
  "cleanupCacheOnPreviews": false,
  "cleanupCacheOnCompose": false,
  "stripeCustomerId": "example_stripeCustomerId",
  "stripeSubscriptionId": "example_stripeSubscriptionId",
  "serversQuantity": 0,
  "password": "example_password",
  "currentPassword": "example_currentPassword"
}
```

Schema details:
  - `id` (string):  (Required: False)
  - `name` (string):  (Required: False)
  - `isRegistered` (boolean):  (Required: False)
  - `expirationDate` (string):  (Required: False)
  - `createdAt2` (string):  (Required: False)
  - `createdAt` (string):  (Required: False)
  - `twoFactorEnabled` (boolean):  (Required: False)
  - `email` (string):  (Required: False)
  - `emailVerified` (boolean):  (Required: False)
  - `image` (string):  (Required: False)
  - `banned` (boolean):  (Required: False)
  - `banReason` (string):  (Required: False)
  - `banExpires` (string):  (Required: False)
  - `updatedAt` (string):  (Required: False)
  - `serverIp` (string):  (Required: False)
  - `certificateType` (string) (Enum: ['letsencrypt', 'none', 'custom']):  (Required: False)
  - `https` (boolean):  (Required: False)
  - `host` (string):  (Required: False)
  - `letsEncryptEmail` (string):  (Required: False)
  - `sshPrivateKey` (string):  (Required: False)
  - `enableDockerCleanup` (boolean):  (Required: False)
  - `logCleanupCron` (string):  (Required: False)
  - `enablePaidFeatures` (boolean):  (Required: False)
  - `allowImpersonation` (boolean):  (Required: False)
  - `metricsConfig` (object):  (Required: False)
  - `cleanupCacheApplications` (boolean):  (Required: False)
  - `cleanupCacheOnPreviews` (boolean):  (Required: False)
  - `cleanupCacheOnCompose` (boolean):  (Required: False)
  - `stripeCustomerId` (string):  (Required: False)
  - `stripeSubscriptionId` (string):  (Required: False)
  - `serversQuantity` (number):  (Required: False)
  - `password` (string):  (Required: False)
  - `currentPassword` (string):  (Required: False)

---

## GET /user.getUserByToken
**Operation ID:** `user-getUserByToken`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/user.getUserByToken?token=YOUR_TOKEN'
```

**Query Parameters:**
* `token` (string): No description. (Required: True). Example: `YOUR_TOKEN`

---

## GET /user.getMetricsToken
**Operation ID:** `user-getMetricsToken`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/user.getMetricsToken'
```

---

## POST /user.remove
**Operation ID:** `user-remove`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/user.remove' -H 'Content-Type: application/json' -d '{"userId": "example_userId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "userId": "example_userId"
}
```

Schema details:
  - `userId` (string):  (Required: True)

---

## POST /user.assignPermissions
**Operation ID:** `user-assignPermissions`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/user.assignPermissions' -H 'Content-Type: application/json' -d '{"id": "example_id", "accessedProjects": [], "accessedServices": [], "canCreateProjects": false, "canCreateServices": false, "canDeleteProjects": false, "canDeleteServices": false, "canAccessToDocker": false, "canAccessToTraefikFiles": false, "canAccessToAPI": false, "canAccessToSSHKeys": false, "canAccessToGitProviders": false}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "id": "example_id",
  "accessedProjects": [],
  "accessedServices": [],
  "canCreateProjects": false,
  "canCreateServices": false,
  "canDeleteProjects": false,
  "canDeleteServices": false,
  "canAccessToDocker": false,
  "canAccessToTraefikFiles": false,
  "canAccessToAPI": false,
  "canAccessToSSHKeys": false,
  "canAccessToGitProviders": false
}
```

Schema details:
  - `id` (string):  (Required: True)
  - `accessedProjects` (array):  (Required: True)
  - `accessedServices` (array):  (Required: True)
  - `canCreateProjects` (boolean):  (Required: True)
  - `canCreateServices` (boolean):  (Required: True)
  - `canDeleteProjects` (boolean):  (Required: True)
  - `canDeleteServices` (boolean):  (Required: True)
  - `canAccessToDocker` (boolean):  (Required: True)
  - `canAccessToTraefikFiles` (boolean):  (Required: True)
  - `canAccessToAPI` (boolean):  (Required: True)
  - `canAccessToSSHKeys` (boolean):  (Required: True)
  - `canAccessToGitProviders` (boolean):  (Required: True)

---

## GET /user.getInvitations
**Operation ID:** `user-getInvitations`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/user.getInvitations'
```

---

## GET /user.getContainerMetrics
**Operation ID:** `user-getContainerMetrics`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/user.getContainerMetrics?url=YOUR_URL&token=YOUR_TOKEN&appName=YOUR_APPNAME&dataPoints=YOUR_DATAPOINTS'
```

**Query Parameters:**
* `url` (string): No description. (Required: True). Example: `YOUR_URL`
* `token` (string): No description. (Required: True). Example: `YOUR_TOKEN`
* `appName` (string): No description. (Required: True). Example: `YOUR_APPNAME`
* `dataPoints` (string): No description. (Required: True). Example: `YOUR_DATAPOINTS`

---

## POST /user.generateToken
**Operation ID:** `user-generateToken`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/user.generateToken'
```

---

## POST /user.deleteApiKey
**Operation ID:** `user-deleteApiKey`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/user.deleteApiKey' -H 'Content-Type: application/json' -d '{"apiKeyId": "example_apiKeyId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "apiKeyId": "example_apiKeyId"
}
```

Schema details:
  - `apiKeyId` (string):  (Required: True)

---

## POST /user.createApiKey
**Operation ID:** `user-createApiKey`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/user.createApiKey' -H 'Content-Type: application/json' -d '{"name": "example_name", "prefix": "example_prefix", "expiresIn": 0, "metadata": {}, "rateLimitEnabled": false, "rateLimitTimeWindow": 0, "rateLimitMax": 0, "remaining": 0, "refillAmount": 0, "refillInterval": 0}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "name": "example_name",
  "prefix": "example_prefix",
  "expiresIn": 0,
  "metadata": {},
  "rateLimitEnabled": false,
  "rateLimitTimeWindow": 0,
  "rateLimitMax": 0,
  "remaining": 0,
  "refillAmount": 0,
  "refillInterval": 0
}
```

Schema details:
  - `name` (string):  (Required: True)
  - `prefix` (string):  (Required: False)
  - `expiresIn` (number):  (Required: False)
  - `metadata` (object):  (Required: True)
  - `rateLimitEnabled` (boolean):  (Required: False)
  - `rateLimitTimeWindow` (number):  (Required: False)
  - `rateLimitMax` (number):  (Required: False)
  - `remaining` (number):  (Required: False)
  - `refillAmount` (number):  (Required: False)
  - `refillInterval` (number):  (Required: False)

---

## GET /user.checkUserOrganizations
**Operation ID:** `user-checkUserOrganizations`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/user.checkUserOrganizations?userId=YOUR_USERID'
```

**Query Parameters:**
* `userId` (string): No description. (Required: True). Example: `YOUR_USERID`

---

## POST /domain.create
**Operation ID:** `domain-create`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/domain.create' -H 'Content-Type: application/json' -d '{"host": "example_host", "path": "example_path", "port": 0, "https": false, "applicationId": "example_applicationId", "certificateType": "letsencrypt", "customCertResolver": "example_customCertResolver", "composeId": "example_composeId", "serviceName": "example_serviceName", "domainType": "compose", "previewDeploymentId": "example_previewDeploymentId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "host": "example_host",
  "path": "example_path",
  "port": 0,
  "https": false,
  "applicationId": "example_applicationId",
  "certificateType": "letsencrypt",
  "customCertResolver": "example_customCertResolver",
  "composeId": "example_composeId",
  "serviceName": "example_serviceName",
  "domainType": "compose",
  "previewDeploymentId": "example_previewDeploymentId"
}
```

Schema details:
  - `host` (string):  (Required: True)
  - `path` (string):  (Required: False)
  - `port` (number):  (Required: False)
  - `https` (boolean):  (Required: False)
  - `applicationId` (string):  (Required: False)
  - `certificateType` (string) (Enum: ['letsencrypt', 'none', 'custom']):  (Required: False)
  - `customCertResolver` (string):  (Required: False)
  - `composeId` (string):  (Required: False)
  - `serviceName` (string):  (Required: False)
  - `domainType` (string) (Enum: ['compose', 'application', 'preview']):  (Required: False)
  - `previewDeploymentId` (string):  (Required: False)

---

## GET /domain.byApplicationId
**Operation ID:** `domain-byApplicationId`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/domain.byApplicationId?applicationId=YOUR_APPLICATIONID'
```

**Query Parameters:**
* `applicationId` (string): No description. (Required: True). Example: `YOUR_APPLICATIONID`

---

## GET /domain.byComposeId
**Operation ID:** `domain-byComposeId`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/domain.byComposeId?composeId=YOUR_COMPOSEID'
```

**Query Parameters:**
* `composeId` (string): No description. (Required: True). Example: `YOUR_COMPOSEID`

---

## POST /domain.generateDomain
**Operation ID:** `domain-generateDomain`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/domain.generateDomain' -H 'Content-Type: application/json' -d '{"appName": "example_appName", "serverId": "example_serverId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "appName": "example_appName",
  "serverId": "example_serverId"
}
```

Schema details:
  - `appName` (string):  (Required: True)
  - `serverId` (string):  (Required: False)

---

## GET /domain.canGenerateTraefikMeDomains
**Operation ID:** `domain-canGenerateTraefikMeDomains`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/domain.canGenerateTraefikMeDomains?serverId=YOUR_SERVERID'
```

**Query Parameters:**
* `serverId` (string): No description. (Required: True). Example: `YOUR_SERVERID`

---

## POST /domain.update
**Operation ID:** `domain-update`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/domain.update' -H 'Content-Type: application/json' -d '{"host": "example_host", "path": "example_path", "port": 0, "https": false, "certificateType": "letsencrypt", "customCertResolver": "example_customCertResolver", "serviceName": "example_serviceName", "domainType": "compose", "domainId": "example_domainId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "host": "example_host",
  "path": "example_path",
  "port": 0,
  "https": false,
  "certificateType": "letsencrypt",
  "customCertResolver": "example_customCertResolver",
  "serviceName": "example_serviceName",
  "domainType": "compose",
  "domainId": "example_domainId"
}
```

Schema details:
  - `host` (string):  (Required: True)
  - `path` (string):  (Required: False)
  - `port` (number):  (Required: False)
  - `https` (boolean):  (Required: False)
  - `certificateType` (string) (Enum: ['letsencrypt', 'none', 'custom']):  (Required: False)
  - `customCertResolver` (string):  (Required: False)
  - `serviceName` (string):  (Required: False)
  - `domainType` (string) (Enum: ['compose', 'application', 'preview']):  (Required: False)
  - `domainId` (string):  (Required: True)

---

## GET /domain.one
**Operation ID:** `domain-one`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/domain.one?domainId=YOUR_DOMAINID'
```

**Query Parameters:**
* `domainId` (string): No description. (Required: True). Example: `YOUR_DOMAINID`

---

## POST /domain.delete
**Operation ID:** `domain-delete`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/domain.delete' -H 'Content-Type: application/json' -d '{"domainId": "example_domainId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "domainId": "example_domainId"
}
```

Schema details:
  - `domainId` (string):  (Required: True)

---

## POST /domain.validateDomain
**Operation ID:** `domain-validateDomain`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/domain.validateDomain' -H 'Content-Type: application/json' -d '{"domain": "example_domain", "serverIp": "example_serverIp"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "domain": "example_domain",
  "serverIp": "example_serverIp"
}
```

Schema details:
  - `domain` (string):  (Required: True)
  - `serverIp` (string):  (Required: False)

---

## POST /destination.create
**Operation ID:** `destination-create`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/destination.create' -H 'Content-Type: application/json' -d '{"name": "example_name", "provider": "example_provider", "accessKey": "example_accessKey", "bucket": "example_bucket", "region": "example_region", "endpoint": "example_endpoint", "secretAccessKey": "example_secretAccessKey", "serverId": "example_serverId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "name": "example_name",
  "provider": "example_provider",
  "accessKey": "example_accessKey",
  "bucket": "example_bucket",
  "region": "example_region",
  "endpoint": "example_endpoint",
  "secretAccessKey": "example_secretAccessKey",
  "serverId": "example_serverId"
}
```

Schema details:
  - `name` (string):  (Required: True)
  - `provider` (string):  (Required: True)
  - `accessKey` (string):  (Required: True)
  - `bucket` (string):  (Required: True)
  - `region` (string):  (Required: True)
  - `endpoint` (string):  (Required: True)
  - `secretAccessKey` (string):  (Required: True)
  - `serverId` (string):  (Required: False)

---

## POST /destination.testConnection
**Operation ID:** `destination-testConnection`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/destination.testConnection' -H 'Content-Type: application/json' -d '{"name": "example_name", "provider": "example_provider", "accessKey": "example_accessKey", "bucket": "example_bucket", "region": "example_region", "endpoint": "example_endpoint", "secretAccessKey": "example_secretAccessKey", "serverId": "example_serverId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "name": "example_name",
  "provider": "example_provider",
  "accessKey": "example_accessKey",
  "bucket": "example_bucket",
  "region": "example_region",
  "endpoint": "example_endpoint",
  "secretAccessKey": "example_secretAccessKey",
  "serverId": "example_serverId"
}
```

Schema details:
  - `name` (string):  (Required: True)
  - `provider` (string):  (Required: True)
  - `accessKey` (string):  (Required: True)
  - `bucket` (string):  (Required: True)
  - `region` (string):  (Required: True)
  - `endpoint` (string):  (Required: True)
  - `secretAccessKey` (string):  (Required: True)
  - `serverId` (string):  (Required: False)

---

## GET /destination.one
**Operation ID:** `destination-one`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/destination.one?destinationId=YOUR_DESTINATIONID'
```

**Query Parameters:**
* `destinationId` (string): No description. (Required: True). Example: `YOUR_DESTINATIONID`

---

## GET /destination.all
**Operation ID:** `destination-all`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/destination.all'
```

---

## POST /destination.remove
**Operation ID:** `destination-remove`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/destination.remove' -H 'Content-Type: application/json' -d '{"destinationId": "example_destinationId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "destinationId": "example_destinationId"
}
```

Schema details:
  - `destinationId` (string):  (Required: True)

---

## POST /destination.update
**Operation ID:** `destination-update`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/destination.update' -H 'Content-Type: application/json' -d '{"name": "example_name", "accessKey": "example_accessKey", "bucket": "example_bucket", "region": "example_region", "endpoint": "example_endpoint", "secretAccessKey": "example_secretAccessKey", "destinationId": "example_destinationId", "provider": "example_provider", "serverId": "example_serverId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "name": "example_name",
  "accessKey": "example_accessKey",
  "bucket": "example_bucket",
  "region": "example_region",
  "endpoint": "example_endpoint",
  "secretAccessKey": "example_secretAccessKey",
  "destinationId": "example_destinationId",
  "provider": "example_provider",
  "serverId": "example_serverId"
}
```

Schema details:
  - `name` (string):  (Required: True)
  - `accessKey` (string):  (Required: True)
  - `bucket` (string):  (Required: True)
  - `region` (string):  (Required: True)
  - `endpoint` (string):  (Required: True)
  - `secretAccessKey` (string):  (Required: True)
  - `destinationId` (string):  (Required: True)
  - `provider` (string):  (Required: True)
  - `serverId` (string):  (Required: False)

---

## POST /backup.create
**Operation ID:** `backup-create`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/backup.create' -H 'Content-Type: application/json' -d '{"schedule": "example_schedule", "enabled": false, "prefix": "example_prefix", "destinationId": "example_destinationId", "keepLatestCount": 0, "database": "example_database", "mariadbId": "example_mariadbId", "mysqlId": "example_mysqlId", "postgresId": "example_postgresId", "mongoId": "example_mongoId", "databaseType": "postgres", "userId": "example_userId", "backupType": "database", "composeId": "example_composeId", "serviceName": "example_serviceName", "metadata": "your_value"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "schedule": "example_schedule",
  "enabled": false,
  "prefix": "example_prefix",
  "destinationId": "example_destinationId",
  "keepLatestCount": 0,
  "database": "example_database",
  "mariadbId": "example_mariadbId",
  "mysqlId": "example_mysqlId",
  "postgresId": "example_postgresId",
  "mongoId": "example_mongoId",
  "databaseType": "postgres",
  "userId": "example_userId",
  "backupType": "database",
  "composeId": "example_composeId",
  "serviceName": "example_serviceName",
  "metadata": "your_value"
}
```

Schema details:
  - `schedule` (string):  (Required: True)
  - `enabled` (boolean):  (Required: False)
  - `prefix` (string):  (Required: True)
  - `destinationId` (string):  (Required: True)
  - `keepLatestCount` (number):  (Required: False)
  - `database` (string):  (Required: True)
  - `mariadbId` (string):  (Required: False)
  - `mysqlId` (string):  (Required: False)
  - `postgresId` (string):  (Required: False)
  - `mongoId` (string):  (Required: False)
  - `databaseType` (string) (Enum: ['postgres', 'mariadb', 'mysql', 'mongo', 'web-server']):  (Required: True)
  - `userId` (string):  (Required: False)
  - `backupType` (string) (Enum: ['database', 'compose']):  (Required: False)
  - `composeId` (string):  (Required: False)
  - `serviceName` (string):  (Required: False)
  - `metadata` (any):  (Required: False)

---

## GET /backup.one
**Operation ID:** `backup-one`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/backup.one?backupId=YOUR_BACKUPID'
```

**Query Parameters:**
* `backupId` (string): No description. (Required: True). Example: `YOUR_BACKUPID`

---

## POST /backup.update
**Operation ID:** `backup-update`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/backup.update' -H 'Content-Type: application/json' -d '{"schedule": "example_schedule", "enabled": false, "prefix": "example_prefix", "backupId": "example_backupId", "destinationId": "example_destinationId", "database": "example_database", "keepLatestCount": 0, "serviceName": "example_serviceName", "metadata": "your_value", "databaseType": "postgres"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "schedule": "example_schedule",
  "enabled": false,
  "prefix": "example_prefix",
  "backupId": "example_backupId",
  "destinationId": "example_destinationId",
  "database": "example_database",
  "keepLatestCount": 0,
  "serviceName": "example_serviceName",
  "metadata": "your_value",
  "databaseType": "postgres"
}
```

Schema details:
  - `schedule` (string):  (Required: True)
  - `enabled` (boolean):  (Required: False)
  - `prefix` (string):  (Required: True)
  - `backupId` (string):  (Required: True)
  - `destinationId` (string):  (Required: True)
  - `database` (string):  (Required: True)
  - `keepLatestCount` (number):  (Required: False)
  - `serviceName` (string):  (Required: True)
  - `metadata` (any):  (Required: False)
  - `databaseType` (string) (Enum: ['postgres', 'mariadb', 'mysql', 'mongo', 'web-server']):  (Required: True)

---

## POST /backup.remove
**Operation ID:** `backup-remove`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/backup.remove' -H 'Content-Type: application/json' -d '{"backupId": "example_backupId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "backupId": "example_backupId"
}
```

Schema details:
  - `backupId` (string):  (Required: True)

---

## POST /backup.manualBackupPostgres
**Operation ID:** `backup-manualBackupPostgres`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/backup.manualBackupPostgres' -H 'Content-Type: application/json' -d '{"backupId": "example_backupId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "backupId": "example_backupId"
}
```

Schema details:
  - `backupId` (string):  (Required: True)

---

## POST /backup.manualBackupMySql
**Operation ID:** `backup-manualBackupMySql`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/backup.manualBackupMySql' -H 'Content-Type: application/json' -d '{"backupId": "example_backupId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "backupId": "example_backupId"
}
```

Schema details:
  - `backupId` (string):  (Required: True)

---

## POST /backup.manualBackupMariadb
**Operation ID:** `backup-manualBackupMariadb`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/backup.manualBackupMariadb' -H 'Content-Type: application/json' -d '{"backupId": "example_backupId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "backupId": "example_backupId"
}
```

Schema details:
  - `backupId` (string):  (Required: True)

---

## POST /backup.manualBackupCompose
**Operation ID:** `backup-manualBackupCompose`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/backup.manualBackupCompose' -H 'Content-Type: application/json' -d '{"backupId": "example_backupId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "backupId": "example_backupId"
}
```

Schema details:
  - `backupId` (string):  (Required: True)

---

## POST /backup.manualBackupMongo
**Operation ID:** `backup-manualBackupMongo`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/backup.manualBackupMongo' -H 'Content-Type: application/json' -d '{"backupId": "example_backupId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "backupId": "example_backupId"
}
```

Schema details:
  - `backupId` (string):  (Required: True)

---

## POST /backup.manualBackupWebServer
**Operation ID:** `backup-manualBackupWebServer`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/backup.manualBackupWebServer' -H 'Content-Type: application/json' -d '{"backupId": "example_backupId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "backupId": "example_backupId"
}
```

Schema details:
  - `backupId` (string):  (Required: True)

---

## GET /backup.listBackupFiles
**Operation ID:** `backup-listBackupFiles`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/backup.listBackupFiles?destinationId=YOUR_DESTINATIONID&search=YOUR_SEARCH&serverId=YOUR_SERVERID'
```

**Query Parameters:**
* `destinationId` (string): No description. (Required: True). Example: `YOUR_DESTINATIONID`
* `search` (string): No description. (Required: True). Example: `YOUR_SEARCH`
* `serverId` (string): No description. (Required: False). Example: `YOUR_SERVERID`

---

## GET /deployment.all
**Operation ID:** `deployment-all`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/deployment.all?applicationId=YOUR_APPLICATIONID'
```

**Query Parameters:**
* `applicationId` (string): No description. (Required: True). Example: `YOUR_APPLICATIONID`

---

## GET /deployment.allByCompose
**Operation ID:** `deployment-allByCompose`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/deployment.allByCompose?composeId=YOUR_COMPOSEID'
```

**Query Parameters:**
* `composeId` (string): No description. (Required: True). Example: `YOUR_COMPOSEID`

---

## GET /deployment.allByServer
**Operation ID:** `deployment-allByServer`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/deployment.allByServer?serverId=YOUR_SERVERID'
```

**Query Parameters:**
* `serverId` (string): No description. (Required: True). Example: `YOUR_SERVERID`

---

## GET /deployment.allByType
**Operation ID:** `deployment-allByType`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/deployment.allByType?id=YOUR_ID&type=application'
```

**Query Parameters:**
* `id` (string): No description. (Required: True). Example: `YOUR_ID`
* `type` (string): No description. (Required: True). Example: `application`

---

## GET /previewDeployment.all
**Operation ID:** `previewDeployment-all`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/previewDeployment.all?applicationId=YOUR_APPLICATIONID'
```

**Query Parameters:**
* `applicationId` (string): No description. (Required: True). Example: `YOUR_APPLICATIONID`

---

## POST /previewDeployment.delete
**Operation ID:** `previewDeployment-delete`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/previewDeployment.delete' -H 'Content-Type: application/json' -d '{"previewDeploymentId": "example_previewDeploymentId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "previewDeploymentId": "example_previewDeploymentId"
}
```

Schema details:
  - `previewDeploymentId` (string):  (Required: True)

---

## GET /previewDeployment.one
**Operation ID:** `previewDeployment-one`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/previewDeployment.one?previewDeploymentId=YOUR_PREVIEWDEPLOYMENTID'
```

**Query Parameters:**
* `previewDeploymentId` (string): No description. (Required: True). Example: `YOUR_PREVIEWDEPLOYMENTID`

---

## POST /mounts.create
**Operation ID:** `mounts-create`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/mounts.create' -H 'Content-Type: application/json' -d '{"type": "bind", "hostPath": "example_hostPath", "volumeName": "example_volumeName", "content": "example_content", "mountPath": "example_mountPath", "serviceType": "application", "filePath": "example_filePath", "serviceId": "example_serviceId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "type": "bind",
  "hostPath": "example_hostPath",
  "volumeName": "example_volumeName",
  "content": "example_content",
  "mountPath": "example_mountPath",
  "serviceType": "application",
  "filePath": "example_filePath",
  "serviceId": "example_serviceId"
}
```

Schema details:
  - `type` (string) (Enum: ['bind', 'volume', 'file']):  (Required: True)
  - `hostPath` (string):  (Required: False)
  - `volumeName` (string):  (Required: False)
  - `content` (string):  (Required: False)
  - `mountPath` (string):  (Required: True)
  - `serviceType` (string) (Enum: ['application', 'postgres', 'mysql', 'mariadb', 'mongo', 'redis', 'compose']) (Default: `application`):  (Required: False)
  - `filePath` (string):  (Required: False)
  - `serviceId` (string):  (Required: True)

---

## POST /mounts.remove
**Operation ID:** `mounts-remove`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/mounts.remove' -H 'Content-Type: application/json' -d '{"mountId": "example_mountId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "mountId": "example_mountId"
}
```

Schema details:
  - `mountId` (string):  (Required: True)

---

## GET /mounts.one
**Operation ID:** `mounts-one`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/mounts.one?mountId=YOUR_MOUNTID'
```

**Query Parameters:**
* `mountId` (string): No description. (Required: True). Example: `YOUR_MOUNTID`

---

## POST /mounts.update
**Operation ID:** `mounts-update`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/mounts.update' -H 'Content-Type: application/json' -d '{"mountId": "example_mountId", "type": "bind", "hostPath": "example_hostPath", "volumeName": "example_volumeName", "filePath": "example_filePath", "content": "example_content", "serviceType": "application", "mountPath": "example_mountPath", "applicationId": "example_applicationId", "postgresId": "example_postgresId", "mariadbId": "example_mariadbId", "mongoId": "example_mongoId", "mysqlId": "example_mysqlId", "redisId": "example_redisId", "composeId": "example_composeId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "mountId": "example_mountId",
  "type": "bind",
  "hostPath": "example_hostPath",
  "volumeName": "example_volumeName",
  "filePath": "example_filePath",
  "content": "example_content",
  "serviceType": "application",
  "mountPath": "example_mountPath",
  "applicationId": "example_applicationId",
  "postgresId": "example_postgresId",
  "mariadbId": "example_mariadbId",
  "mongoId": "example_mongoId",
  "mysqlId": "example_mysqlId",
  "redisId": "example_redisId",
  "composeId": "example_composeId"
}
```

Schema details:
  - `mountId` (string):  (Required: True)
  - `type` (string) (Enum: ['bind', 'volume', 'file']):  (Required: False)
  - `hostPath` (string):  (Required: False)
  - `volumeName` (string):  (Required: False)
  - `filePath` (string):  (Required: False)
  - `content` (string):  (Required: False)
  - `serviceType` (string) (Enum: ['application', 'postgres', 'mysql', 'mariadb', 'mongo', 'redis', 'compose']) (Default: `application`):  (Required: False)
  - `mountPath` (string):  (Required: False)
  - `applicationId` (string):  (Required: False)
  - `postgresId` (string):  (Required: False)
  - `mariadbId` (string):  (Required: False)
  - `mongoId` (string):  (Required: False)
  - `mysqlId` (string):  (Required: False)
  - `redisId` (string):  (Required: False)
  - `composeId` (string):  (Required: False)

---

## POST /certificates.create
**Operation ID:** `certificates-create`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/certificates.create' -H 'Content-Type: application/json' -d '{"certificateId": "example_certificateId", "name": "example_name", "certificateData": "example_certificateData", "privateKey": "example_privateKey", "certificatePath": "example_certificatePath", "autoRenew": false, "organizationId": "example_organizationId", "serverId": "example_serverId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "certificateId": "example_certificateId",
  "name": "example_name",
  "certificateData": "example_certificateData",
  "privateKey": "example_privateKey",
  "certificatePath": "example_certificatePath",
  "autoRenew": false,
  "organizationId": "example_organizationId",
  "serverId": "example_serverId"
}
```

Schema details:
  - `certificateId` (string):  (Required: False)
  - `name` (string):  (Required: True)
  - `certificateData` (string):  (Required: True)
  - `privateKey` (string):  (Required: True)
  - `certificatePath` (string):  (Required: False)
  - `autoRenew` (boolean):  (Required: False)
  - `organizationId` (string):  (Required: True)
  - `serverId` (string):  (Required: False)

---

## GET /certificates.one
**Operation ID:** `certificates-one`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/certificates.one?certificateId=YOUR_CERTIFICATEID'
```

**Query Parameters:**
* `certificateId` (string): No description. (Required: True). Example: `YOUR_CERTIFICATEID`

---

## POST /certificates.remove
**Operation ID:** `certificates-remove`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/certificates.remove' -H 'Content-Type: application/json' -d '{"certificateId": "example_certificateId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "certificateId": "example_certificateId"
}
```

Schema details:
  - `certificateId` (string):  (Required: True)

---

## GET /certificates.all
**Operation ID:** `certificates-all`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/certificates.all'
```

---

## POST /settings.reloadServer
**Operation ID:** `settings-reloadServer`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/settings.reloadServer'
```

---

## POST /settings.cleanRedis
**Operation ID:** `settings-cleanRedis`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/settings.cleanRedis'
```

---

## POST /settings.reloadRedis
**Operation ID:** `settings-reloadRedis`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/settings.reloadRedis'
```

---

## POST /settings.reloadTraefik
**Operation ID:** `settings-reloadTraefik`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** False

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/settings.reloadTraefik' -H 'Content-Type: application/json' -d '{"serverId": "example_serverId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "serverId": "example_serverId"
}
```

Schema details:
  - `serverId` (string):  (Required: False)

---

## POST /settings.toggleDashboard
**Operation ID:** `settings-toggleDashboard`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/settings.toggleDashboard' -H 'Content-Type: application/json' -d '{"enableDashboard": false, "serverId": "example_serverId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "enableDashboard": false,
  "serverId": "example_serverId"
}
```

Schema details:
  - `enableDashboard` (boolean):  (Required: False)
  - `serverId` (string):  (Required: False)

---

## POST /settings.cleanUnusedImages
**Operation ID:** `settings-cleanUnusedImages`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** False

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/settings.cleanUnusedImages' -H 'Content-Type: application/json' -d '{"serverId": "example_serverId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "serverId": "example_serverId"
}
```

Schema details:
  - `serverId` (string):  (Required: False)

---

## POST /settings.cleanUnusedVolumes
**Operation ID:** `settings-cleanUnusedVolumes`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** False

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/settings.cleanUnusedVolumes' -H 'Content-Type: application/json' -d '{"serverId": "example_serverId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "serverId": "example_serverId"
}
```

Schema details:
  - `serverId` (string):  (Required: False)

---

## POST /settings.cleanStoppedContainers
**Operation ID:** `settings-cleanStoppedContainers`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** False

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/settings.cleanStoppedContainers' -H 'Content-Type: application/json' -d '{"serverId": "example_serverId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "serverId": "example_serverId"
}
```

Schema details:
  - `serverId` (string):  (Required: False)

---

## POST /settings.cleanDockerBuilder
**Operation ID:** `settings-cleanDockerBuilder`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** False

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/settings.cleanDockerBuilder' -H 'Content-Type: application/json' -d '{"serverId": "example_serverId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "serverId": "example_serverId"
}
```

Schema details:
  - `serverId` (string):  (Required: False)

---

## POST /settings.cleanDockerPrune
**Operation ID:** `settings-cleanDockerPrune`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** False

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/settings.cleanDockerPrune' -H 'Content-Type: application/json' -d '{"serverId": "example_serverId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "serverId": "example_serverId"
}
```

Schema details:
  - `serverId` (string):  (Required: False)

---

## POST /settings.cleanAll
**Operation ID:** `settings-cleanAll`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** False

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/settings.cleanAll' -H 'Content-Type: application/json' -d '{"serverId": "example_serverId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "serverId": "example_serverId"
}
```

Schema details:
  - `serverId` (string):  (Required: False)

---

## POST /settings.cleanMonitoring
**Operation ID:** `settings-cleanMonitoring`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/settings.cleanMonitoring'
```

---

## POST /settings.saveSSHPrivateKey
**Operation ID:** `settings-saveSSHPrivateKey`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/settings.saveSSHPrivateKey' -H 'Content-Type: application/json' -d '{"sshPrivateKey": "example_sshPrivateKey"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "sshPrivateKey": "example_sshPrivateKey"
}
```

Schema details:
  - `sshPrivateKey` (string):  (Required: True)

---

## POST /settings.assignDomainServer
**Operation ID:** `settings-assignDomainServer`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/settings.assignDomainServer' -H 'Content-Type: application/json' -d '{"host": "example_host", "certificateType": "letsencrypt", "letsEncryptEmail": "example_letsEncryptEmail", "https": false}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "host": "example_host",
  "certificateType": "letsencrypt",
  "letsEncryptEmail": "example_letsEncryptEmail",
  "https": false
}
```

Schema details:
  - `host` (string):  (Required: True)
  - `certificateType` (string) (Enum: ['letsencrypt', 'none', 'custom']):  (Required: True)
  - `letsEncryptEmail` (string):  (Required: False)
  - `https` (boolean):  (Required: False)

---

## POST /settings.cleanSSHPrivateKey
**Operation ID:** `settings-cleanSSHPrivateKey`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/settings.cleanSSHPrivateKey'
```

---

## POST /settings.updateDockerCleanup
**Operation ID:** `settings-updateDockerCleanup`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/settings.updateDockerCleanup' -H 'Content-Type: application/json' -d '{"enableDockerCleanup": false, "serverId": "example_serverId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "enableDockerCleanup": false,
  "serverId": "example_serverId"
}
```

Schema details:
  - `enableDockerCleanup` (boolean):  (Required: True)
  - `serverId` (string):  (Required: False)

---

## GET /settings.readTraefikConfig
**Operation ID:** `settings-readTraefikConfig`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/settings.readTraefikConfig'
```

---

## POST /settings.updateTraefikConfig
**Operation ID:** `settings-updateTraefikConfig`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/settings.updateTraefikConfig' -H 'Content-Type: application/json' -d '{"traefikConfig": "example_traefikConfig"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "traefikConfig": "example_traefikConfig"
}
```

Schema details:
  - `traefikConfig` (string):  (Required: True)

---

## GET /settings.readWebServerTraefikConfig
**Operation ID:** `settings-readWebServerTraefikConfig`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/settings.readWebServerTraefikConfig'
```

---

## POST /settings.updateWebServerTraefikConfig
**Operation ID:** `settings-updateWebServerTraefikConfig`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/settings.updateWebServerTraefikConfig' -H 'Content-Type: application/json' -d '{"traefikConfig": "example_traefikConfig"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "traefikConfig": "example_traefikConfig"
}
```

Schema details:
  - `traefikConfig` (string):  (Required: True)

---

## GET /settings.readMiddlewareTraefikConfig
**Operation ID:** `settings-readMiddlewareTraefikConfig`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/settings.readMiddlewareTraefikConfig'
```

---

## POST /settings.updateMiddlewareTraefikConfig
**Operation ID:** `settings-updateMiddlewareTraefikConfig`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/settings.updateMiddlewareTraefikConfig' -H 'Content-Type: application/json' -d '{"traefikConfig": "example_traefikConfig"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "traefikConfig": "example_traefikConfig"
}
```

Schema details:
  - `traefikConfig` (string):  (Required: True)

---

## POST /settings.getUpdateData
**Operation ID:** `settings-getUpdateData`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/settings.getUpdateData'
```

---

## POST /settings.updateServer
**Operation ID:** `settings-updateServer`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/settings.updateServer'
```

---

## GET /settings.getDokployVersion
**Operation ID:** `settings-getDokployVersion`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/settings.getDokployVersion'
```

---

## GET /settings.getReleaseTag
**Operation ID:** `settings-getReleaseTag`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/settings.getReleaseTag'
```

---

## GET /settings.readDirectories
**Operation ID:** `settings-readDirectories`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/settings.readDirectories?serverId=YOUR_SERVERID'
```

**Query Parameters:**
* `serverId` (string): No description. (Required: False). Example: `YOUR_SERVERID`

---

## POST /settings.updateTraefikFile
**Operation ID:** `settings-updateTraefikFile`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/settings.updateTraefikFile' -H 'Content-Type: application/json' -d '{"path": "example_path", "traefikConfig": "example_traefikConfig", "serverId": "example_serverId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "path": "example_path",
  "traefikConfig": "example_traefikConfig",
  "serverId": "example_serverId"
}
```

Schema details:
  - `path` (string):  (Required: True)
  - `traefikConfig` (string):  (Required: True)
  - `serverId` (string):  (Required: False)

---

## GET /settings.readTraefikFile
**Operation ID:** `settings-readTraefikFile`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/settings.readTraefikFile?path=YOUR_PATH&serverId=YOUR_SERVERID'
```

**Query Parameters:**
* `path` (string): No description. (Required: True). Example: `YOUR_PATH`
* `serverId` (string): No description. (Required: False). Example: `YOUR_SERVERID`

---

## GET /settings.getIp
**Operation ID:** `settings-getIp`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/settings.getIp'
```

---

## GET /settings.getOpenApiDocument
**Operation ID:** `settings-getOpenApiDocument`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/settings.getOpenApiDocument'
```

---

## GET /settings.readTraefikEnv
**Operation ID:** `settings-readTraefikEnv`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/settings.readTraefikEnv?serverId=YOUR_SERVERID'
```

**Query Parameters:**
* `serverId` (string): No description. (Required: False). Example: `YOUR_SERVERID`

---

## POST /settings.writeTraefikEnv
**Operation ID:** `settings-writeTraefikEnv`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/settings.writeTraefikEnv' -H 'Content-Type: application/json' -d '{"env": "example_env", "serverId": "example_serverId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "env": "example_env",
  "serverId": "example_serverId"
}
```

Schema details:
  - `env` (string):  (Required: True)
  - `serverId` (string):  (Required: False)

---

## GET /settings.haveTraefikDashboardPortEnabled
**Operation ID:** `settings-haveTraefikDashboardPortEnabled`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/settings.haveTraefikDashboardPortEnabled?serverId=YOUR_SERVERID'
```

**Query Parameters:**
* `serverId` (string): No description. (Required: False). Example: `YOUR_SERVERID`

---

## GET /settings.haveActivateRequests
**Operation ID:** `settings-haveActivateRequests`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/settings.haveActivateRequests'
```

---

## POST /settings.toggleRequests
**Operation ID:** `settings-toggleRequests`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/settings.toggleRequests' -H 'Content-Type: application/json' -d '{"enable": false}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "enable": false
}
```

Schema details:
  - `enable` (boolean):  (Required: True)

---

## GET /settings.isCloud
**Operation ID:** `settings-isCloud`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/settings.isCloud'
```

---

## GET /settings.health
**Operation ID:** `settings-health`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/settings.health'
```

---

## POST /settings.setupGPU
**Operation ID:** `settings-setupGPU`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/settings.setupGPU' -H 'Content-Type: application/json' -d '{"serverId": "example_serverId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "serverId": "example_serverId"
}
```

Schema details:
  - `serverId` (string):  (Required: False)

---

## GET /settings.checkGPUStatus
**Operation ID:** `settings-checkGPUStatus`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/settings.checkGPUStatus?serverId=YOUR_SERVERID'
```

**Query Parameters:**
* `serverId` (string): No description. (Required: False). Example: `YOUR_SERVERID`

---

## POST /settings.updateTraefikPorts
**Operation ID:** `settings-updateTraefikPorts`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/settings.updateTraefikPorts' -H 'Content-Type: application/json' -d '{"serverId": "example_serverId", "additionalPorts": []}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "serverId": "example_serverId",
  "additionalPorts": []
}
```

Schema details:
  - `serverId` (string):  (Required: False)
  - `additionalPorts` (array):  (Required: True)

---

## GET /settings.getTraefikPorts
**Operation ID:** `settings-getTraefikPorts`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/settings.getTraefikPorts?serverId=YOUR_SERVERID'
```

**Query Parameters:**
* `serverId` (string): No description. (Required: False). Example: `YOUR_SERVERID`

---

## POST /settings.updateLogCleanup
**Operation ID:** `settings-updateLogCleanup`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/settings.updateLogCleanup' -H 'Content-Type: application/json' -d '{"cronExpression": "example_cronExpression"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "cronExpression": "example_cronExpression"
}
```

Schema details:
  - `cronExpression` (string):  (Required: True)

---

## GET /settings.getLogCleanupStatus
**Operation ID:** `settings-getLogCleanupStatus`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/settings.getLogCleanupStatus'
```

---

## POST /security.create
**Operation ID:** `security-create`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/security.create' -H 'Content-Type: application/json' -d '{"applicationId": "example_applicationId", "username": "example_username", "password": "example_password"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "applicationId": "example_applicationId",
  "username": "example_username",
  "password": "example_password"
}
```

Schema details:
  - `applicationId` (string):  (Required: True)
  - `username` (string):  (Required: True)
  - `password` (string):  (Required: True)

---

## GET /security.one
**Operation ID:** `security-one`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/security.one?securityId=YOUR_SECURITYID'
```

**Query Parameters:**
* `securityId` (string): No description. (Required: True). Example: `YOUR_SECURITYID`

---

## POST /security.delete
**Operation ID:** `security-delete`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/security.delete' -H 'Content-Type: application/json' -d '{"securityId": "example_securityId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "securityId": "example_securityId"
}
```

Schema details:
  - `securityId` (string):  (Required: True)

---

## POST /security.update
**Operation ID:** `security-update`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/security.update' -H 'Content-Type: application/json' -d '{"securityId": "example_securityId", "username": "example_username", "password": "example_password"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "securityId": "example_securityId",
  "username": "example_username",
  "password": "example_password"
}
```

Schema details:
  - `securityId` (string):  (Required: True)
  - `username` (string):  (Required: True)
  - `password` (string):  (Required: True)

---

## POST /redirects.create
**Operation ID:** `redirects-create`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/redirects.create' -H 'Content-Type: application/json' -d '{"regex": "example_regex", "replacement": "example_replacement", "permanent": false, "applicationId": "example_applicationId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "regex": "example_regex",
  "replacement": "example_replacement",
  "permanent": false,
  "applicationId": "example_applicationId"
}
```

Schema details:
  - `regex` (string):  (Required: True)
  - `replacement` (string):  (Required: True)
  - `permanent` (boolean):  (Required: True)
  - `applicationId` (string):  (Required: True)

---

## GET /redirects.one
**Operation ID:** `redirects-one`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/redirects.one?redirectId=YOUR_REDIRECTID'
```

**Query Parameters:**
* `redirectId` (string): No description. (Required: True). Example: `YOUR_REDIRECTID`

---

## POST /redirects.delete
**Operation ID:** `redirects-delete`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/redirects.delete' -H 'Content-Type: application/json' -d '{"redirectId": "example_redirectId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "redirectId": "example_redirectId"
}
```

Schema details:
  - `redirectId` (string):  (Required: True)

---

## POST /redirects.update
**Operation ID:** `redirects-update`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/redirects.update' -H 'Content-Type: application/json' -d '{"redirectId": "example_redirectId", "regex": "example_regex", "replacement": "example_replacement", "permanent": false}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "redirectId": "example_redirectId",
  "regex": "example_regex",
  "replacement": "example_replacement",
  "permanent": false
}
```

Schema details:
  - `redirectId` (string):  (Required: True)
  - `regex` (string):  (Required: True)
  - `replacement` (string):  (Required: True)
  - `permanent` (boolean):  (Required: True)

---

## POST /port.create
**Operation ID:** `port-create`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/port.create' -H 'Content-Type: application/json' -d '{"publishedPort": 0, "targetPort": 0, "protocol": "tcp", "applicationId": "example_applicationId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "publishedPort": 0,
  "targetPort": 0,
  "protocol": "tcp",
  "applicationId": "example_applicationId"
}
```

Schema details:
  - `publishedPort` (number):  (Required: True)
  - `targetPort` (number):  (Required: True)
  - `protocol` (string) (Enum: ['tcp', 'udp']) (Default: `tcp`):  (Required: False)
  - `applicationId` (string):  (Required: True)

---

## GET /port.one
**Operation ID:** `port-one`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/port.one?portId=YOUR_PORTID'
```

**Query Parameters:**
* `portId` (string): No description. (Required: True). Example: `YOUR_PORTID`

---

## POST /port.delete
**Operation ID:** `port-delete`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/port.delete' -H 'Content-Type: application/json' -d '{"portId": "example_portId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "portId": "example_portId"
}
```

Schema details:
  - `portId` (string):  (Required: True)

---

## POST /port.update
**Operation ID:** `port-update`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/port.update' -H 'Content-Type: application/json' -d '{"portId": "example_portId", "publishedPort": 0, "targetPort": 0, "protocol": "tcp"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "portId": "example_portId",
  "publishedPort": 0,
  "targetPort": 0,
  "protocol": "tcp"
}
```

Schema details:
  - `portId` (string):  (Required: True)
  - `publishedPort` (number):  (Required: True)
  - `targetPort` (number):  (Required: True)
  - `protocol` (string) (Enum: ['tcp', 'udp']) (Default: `tcp`):  (Required: False)

---

## POST /registry.create
**Operation ID:** `registry-create`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/registry.create' -H 'Content-Type: application/json' -d '{"registryName": "example_registryName", "username": "example_username", "password": "example_password", "registryUrl": "example_registryUrl", "registryType": "cloud", "imagePrefix": "example_imagePrefix", "serverId": "example_serverId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "registryName": "example_registryName",
  "username": "example_username",
  "password": "example_password",
  "registryUrl": "example_registryUrl",
  "registryType": "cloud",
  "imagePrefix": "example_imagePrefix",
  "serverId": "example_serverId"
}
```

Schema details:
  - `registryName` (string):  (Required: True)
  - `username` (string):  (Required: True)
  - `password` (string):  (Required: True)
  - `registryUrl` (string):  (Required: True)
  - `registryType` (string) (Enum: ['cloud']):  (Required: True)
  - `imagePrefix` (string):  (Required: True)
  - `serverId` (string):  (Required: False)

---

## POST /registry.remove
**Operation ID:** `registry-remove`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/registry.remove' -H 'Content-Type: application/json' -d '{"registryId": "example_registryId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "registryId": "example_registryId"
}
```

Schema details:
  - `registryId` (string):  (Required: True)

---

## POST /registry.update
**Operation ID:** `registry-update`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/registry.update' -H 'Content-Type: application/json' -d '{"registryId": "example_registryId", "registryName": "example_registryName", "imagePrefix": "example_imagePrefix", "username": "example_username", "password": "example_password", "registryUrl": "example_registryUrl", "createdAt": "example_createdAt", "registryType": "cloud", "organizationId": "example_organizationId", "serverId": "example_serverId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "registryId": "example_registryId",
  "registryName": "example_registryName",
  "imagePrefix": "example_imagePrefix",
  "username": "example_username",
  "password": "example_password",
  "registryUrl": "example_registryUrl",
  "createdAt": "example_createdAt",
  "registryType": "cloud",
  "organizationId": "example_organizationId",
  "serverId": "example_serverId"
}
```

Schema details:
  - `registryId` (string):  (Required: True)
  - `registryName` (string):  (Required: False)
  - `imagePrefix` (string):  (Required: False)
  - `username` (string):  (Required: False)
  - `password` (string):  (Required: False)
  - `registryUrl` (string):  (Required: False)
  - `createdAt` (string):  (Required: False)
  - `registryType` (string) (Enum: ['cloud']):  (Required: False)
  - `organizationId` (string):  (Required: False)
  - `serverId` (string):  (Required: False)

---

## GET /registry.all
**Operation ID:** `registry-all`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/registry.all'
```

---

## GET /registry.one
**Operation ID:** `registry-one`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/registry.one?registryId=YOUR_REGISTRYID'
```

**Query Parameters:**
* `registryId` (string): No description. (Required: True). Example: `YOUR_REGISTRYID`

---

## POST /registry.testRegistry
**Operation ID:** `registry-testRegistry`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/registry.testRegistry' -H 'Content-Type: application/json' -d '{"registryName": "example_registryName", "username": "example_username", "password": "example_password", "registryUrl": "example_registryUrl", "registryType": "cloud", "imagePrefix": "example_imagePrefix", "serverId": "example_serverId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "registryName": "example_registryName",
  "username": "example_username",
  "password": "example_password",
  "registryUrl": "example_registryUrl",
  "registryType": "cloud",
  "imagePrefix": "example_imagePrefix",
  "serverId": "example_serverId"
}
```

Schema details:
  - `registryName` (string):  (Required: False)
  - `username` (string):  (Required: True)
  - `password` (string):  (Required: True)
  - `registryUrl` (string):  (Required: True)
  - `registryType` (string) (Enum: ['cloud']):  (Required: True)
  - `imagePrefix` (string):  (Required: False)
  - `serverId` (string):  (Required: False)

---

## GET /cluster.getNodes
**Operation ID:** `cluster-getNodes`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/cluster.getNodes?serverId=YOUR_SERVERID'
```

**Query Parameters:**
* `serverId` (string): No description. (Required: False). Example: `YOUR_SERVERID`

---

## POST /cluster.removeWorker
**Operation ID:** `cluster-removeWorker`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/cluster.removeWorker' -H 'Content-Type: application/json' -d '{"nodeId": "example_nodeId", "serverId": "example_serverId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "nodeId": "example_nodeId",
  "serverId": "example_serverId"
}
```

Schema details:
  - `nodeId` (string):  (Required: True)
  - `serverId` (string):  (Required: False)

---

## GET /cluster.addWorker
**Operation ID:** `cluster-addWorker`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/cluster.addWorker?serverId=YOUR_SERVERID'
```

**Query Parameters:**
* `serverId` (string): No description. (Required: False). Example: `YOUR_SERVERID`

---

## GET /cluster.addManager
**Operation ID:** `cluster-addManager`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/cluster.addManager?serverId=YOUR_SERVERID'
```

**Query Parameters:**
* `serverId` (string): No description. (Required: False). Example: `YOUR_SERVERID`

---

## POST /notification.createSlack
**Operation ID:** `notification-createSlack`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/notification.createSlack' -H 'Content-Type: application/json' -d '{"appBuildError": false, "databaseBackup": false, "dokployRestart": false, "name": "example_name", "appDeploy": false, "dockerCleanup": false, "serverThreshold": false, "webhookUrl": "example_webhookUrl", "channel": "example_channel"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "appBuildError": false,
  "databaseBackup": false,
  "dokployRestart": false,
  "name": "example_name",
  "appDeploy": false,
  "dockerCleanup": false,
  "serverThreshold": false,
  "webhookUrl": "example_webhookUrl",
  "channel": "example_channel"
}
```

Schema details:
  - `appBuildError` (boolean):  (Required: True)
  - `databaseBackup` (boolean):  (Required: True)
  - `dokployRestart` (boolean):  (Required: True)
  - `name` (string):  (Required: True)
  - `appDeploy` (boolean):  (Required: True)
  - `dockerCleanup` (boolean):  (Required: True)
  - `serverThreshold` (boolean):  (Required: True)
  - `webhookUrl` (string):  (Required: True)
  - `channel` (string):  (Required: True)

---

## POST /notification.updateSlack
**Operation ID:** `notification-updateSlack`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/notification.updateSlack' -H 'Content-Type: application/json' -d '{"appBuildError": false, "databaseBackup": false, "dokployRestart": false, "name": "example_name", "appDeploy": false, "dockerCleanup": false, "serverThreshold": false, "webhookUrl": "example_webhookUrl", "channel": "example_channel", "notificationId": "example_notificationId", "slackId": "example_slackId", "organizationId": "example_organizationId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "appBuildError": false,
  "databaseBackup": false,
  "dokployRestart": false,
  "name": "example_name",
  "appDeploy": false,
  "dockerCleanup": false,
  "serverThreshold": false,
  "webhookUrl": "example_webhookUrl",
  "channel": "example_channel",
  "notificationId": "example_notificationId",
  "slackId": "example_slackId",
  "organizationId": "example_organizationId"
}
```

Schema details:
  - `appBuildError` (boolean):  (Required: False)
  - `databaseBackup` (boolean):  (Required: False)
  - `dokployRestart` (boolean):  (Required: False)
  - `name` (string):  (Required: False)
  - `appDeploy` (boolean):  (Required: False)
  - `dockerCleanup` (boolean):  (Required: False)
  - `serverThreshold` (boolean):  (Required: False)
  - `webhookUrl` (string):  (Required: False)
  - `channel` (string):  (Required: False)
  - `notificationId` (string):  (Required: True)
  - `slackId` (string):  (Required: True)
  - `organizationId` (string):  (Required: False)

---

## POST /notification.testSlackConnection
**Operation ID:** `notification-testSlackConnection`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/notification.testSlackConnection' -H 'Content-Type: application/json' -d '{"webhookUrl": "example_webhookUrl", "channel": "example_channel"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "webhookUrl": "example_webhookUrl",
  "channel": "example_channel"
}
```

Schema details:
  - `webhookUrl` (string):  (Required: True)
  - `channel` (string):  (Required: True)

---

## POST /notification.createTelegram
**Operation ID:** `notification-createTelegram`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/notification.createTelegram' -H 'Content-Type: application/json' -d '{"appBuildError": false, "databaseBackup": false, "dokployRestart": false, "name": "example_name", "appDeploy": false, "dockerCleanup": false, "serverThreshold": false, "botToken": "example_botToken", "chatId": "example_chatId", "messageThreadId": "example_messageThreadId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "appBuildError": false,
  "databaseBackup": false,
  "dokployRestart": false,
  "name": "example_name",
  "appDeploy": false,
  "dockerCleanup": false,
  "serverThreshold": false,
  "botToken": "example_botToken",
  "chatId": "example_chatId",
  "messageThreadId": "example_messageThreadId"
}
```

Schema details:
  - `appBuildError` (boolean):  (Required: True)
  - `databaseBackup` (boolean):  (Required: True)
  - `dokployRestart` (boolean):  (Required: True)
  - `name` (string):  (Required: True)
  - `appDeploy` (boolean):  (Required: True)
  - `dockerCleanup` (boolean):  (Required: True)
  - `serverThreshold` (boolean):  (Required: True)
  - `botToken` (string):  (Required: True)
  - `chatId` (string):  (Required: True)
  - `messageThreadId` (string):  (Required: True)

---

## POST /notification.updateTelegram
**Operation ID:** `notification-updateTelegram`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/notification.updateTelegram' -H 'Content-Type: application/json' -d '{"appBuildError": false, "databaseBackup": false, "dokployRestart": false, "name": "example_name", "appDeploy": false, "dockerCleanup": false, "serverThreshold": false, "botToken": "example_botToken", "chatId": "example_chatId", "messageThreadId": "example_messageThreadId", "notificationId": "example_notificationId", "telegramId": "example_telegramId", "organizationId": "example_organizationId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "appBuildError": false,
  "databaseBackup": false,
  "dokployRestart": false,
  "name": "example_name",
  "appDeploy": false,
  "dockerCleanup": false,
  "serverThreshold": false,
  "botToken": "example_botToken",
  "chatId": "example_chatId",
  "messageThreadId": "example_messageThreadId",
  "notificationId": "example_notificationId",
  "telegramId": "example_telegramId",
  "organizationId": "example_organizationId"
}
```

Schema details:
  - `appBuildError` (boolean):  (Required: False)
  - `databaseBackup` (boolean):  (Required: False)
  - `dokployRestart` (boolean):  (Required: False)
  - `name` (string):  (Required: False)
  - `appDeploy` (boolean):  (Required: False)
  - `dockerCleanup` (boolean):  (Required: False)
  - `serverThreshold` (boolean):  (Required: False)
  - `botToken` (string):  (Required: False)
  - `chatId` (string):  (Required: False)
  - `messageThreadId` (string):  (Required: False)
  - `notificationId` (string):  (Required: True)
  - `telegramId` (string):  (Required: True)
  - `organizationId` (string):  (Required: False)

---

## POST /notification.testTelegramConnection
**Operation ID:** `notification-testTelegramConnection`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/notification.testTelegramConnection' -H 'Content-Type: application/json' -d '{"botToken": "example_botToken", "chatId": "example_chatId", "messageThreadId": "example_messageThreadId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "botToken": "example_botToken",
  "chatId": "example_chatId",
  "messageThreadId": "example_messageThreadId"
}
```

Schema details:
  - `botToken` (string):  (Required: True)
  - `chatId` (string):  (Required: True)
  - `messageThreadId` (string):  (Required: True)

---

## POST /notification.createDiscord
**Operation ID:** `notification-createDiscord`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/notification.createDiscord' -H 'Content-Type: application/json' -d '{"appBuildError": false, "databaseBackup": false, "dokployRestart": false, "name": "example_name", "appDeploy": false, "dockerCleanup": false, "serverThreshold": false, "webhookUrl": "example_webhookUrl", "decoration": false}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "appBuildError": false,
  "databaseBackup": false,
  "dokployRestart": false,
  "name": "example_name",
  "appDeploy": false,
  "dockerCleanup": false,
  "serverThreshold": false,
  "webhookUrl": "example_webhookUrl",
  "decoration": false
}
```

Schema details:
  - `appBuildError` (boolean):  (Required: True)
  - `databaseBackup` (boolean):  (Required: True)
  - `dokployRestart` (boolean):  (Required: True)
  - `name` (string):  (Required: True)
  - `appDeploy` (boolean):  (Required: True)
  - `dockerCleanup` (boolean):  (Required: True)
  - `serverThreshold` (boolean):  (Required: True)
  - `webhookUrl` (string):  (Required: True)
  - `decoration` (boolean):  (Required: True)

---

## POST /notification.updateDiscord
**Operation ID:** `notification-updateDiscord`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/notification.updateDiscord' -H 'Content-Type: application/json' -d '{"appBuildError": false, "databaseBackup": false, "dokployRestart": false, "name": "example_name", "appDeploy": false, "dockerCleanup": false, "serverThreshold": false, "webhookUrl": "example_webhookUrl", "decoration": false, "notificationId": "example_notificationId", "discordId": "example_discordId", "organizationId": "example_organizationId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "appBuildError": false,
  "databaseBackup": false,
  "dokployRestart": false,
  "name": "example_name",
  "appDeploy": false,
  "dockerCleanup": false,
  "serverThreshold": false,
  "webhookUrl": "example_webhookUrl",
  "decoration": false,
  "notificationId": "example_notificationId",
  "discordId": "example_discordId",
  "organizationId": "example_organizationId"
}
```

Schema details:
  - `appBuildError` (boolean):  (Required: False)
  - `databaseBackup` (boolean):  (Required: False)
  - `dokployRestart` (boolean):  (Required: False)
  - `name` (string):  (Required: False)
  - `appDeploy` (boolean):  (Required: False)
  - `dockerCleanup` (boolean):  (Required: False)
  - `serverThreshold` (boolean):  (Required: False)
  - `webhookUrl` (string):  (Required: False)
  - `decoration` (boolean):  (Required: False)
  - `notificationId` (string):  (Required: True)
  - `discordId` (string):  (Required: True)
  - `organizationId` (string):  (Required: False)

---

## POST /notification.testDiscordConnection
**Operation ID:** `notification-testDiscordConnection`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/notification.testDiscordConnection' -H 'Content-Type: application/json' -d '{"webhookUrl": "example_webhookUrl", "decoration": false}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "webhookUrl": "example_webhookUrl",
  "decoration": false
}
```

Schema details:
  - `webhookUrl` (string):  (Required: True)
  - `decoration` (boolean):  (Required: False)

---

## POST /notification.createEmail
**Operation ID:** `notification-createEmail`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/notification.createEmail' -H 'Content-Type: application/json' -d '{"appBuildError": false, "databaseBackup": false, "dokployRestart": false, "name": "example_name", "appDeploy": false, "dockerCleanup": false, "serverThreshold": false, "smtpServer": "example_smtpServer", "smtpPort": 0, "username": "example_username", "password": "example_password", "fromAddress": "example_fromAddress", "toAddresses": []}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "appBuildError": false,
  "databaseBackup": false,
  "dokployRestart": false,
  "name": "example_name",
  "appDeploy": false,
  "dockerCleanup": false,
  "serverThreshold": false,
  "smtpServer": "example_smtpServer",
  "smtpPort": 0,
  "username": "example_username",
  "password": "example_password",
  "fromAddress": "example_fromAddress",
  "toAddresses": []
}
```

Schema details:
  - `appBuildError` (boolean):  (Required: True)
  - `databaseBackup` (boolean):  (Required: True)
  - `dokployRestart` (boolean):  (Required: True)
  - `name` (string):  (Required: True)
  - `appDeploy` (boolean):  (Required: True)
  - `dockerCleanup` (boolean):  (Required: True)
  - `serverThreshold` (boolean):  (Required: True)
  - `smtpServer` (string):  (Required: True)
  - `smtpPort` (number):  (Required: True)
  - `username` (string):  (Required: True)
  - `password` (string):  (Required: True)
  - `fromAddress` (string):  (Required: True)
  - `toAddresses` (array):  (Required: True)

---

## POST /notification.updateEmail
**Operation ID:** `notification-updateEmail`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/notification.updateEmail' -H 'Content-Type: application/json' -d '{"appBuildError": false, "databaseBackup": false, "dokployRestart": false, "name": "example_name", "appDeploy": false, "dockerCleanup": false, "serverThreshold": false, "smtpServer": "example_smtpServer", "smtpPort": 0, "username": "example_username", "password": "example_password", "fromAddress": "example_fromAddress", "toAddresses": [], "notificationId": "example_notificationId", "emailId": "example_emailId", "organizationId": "example_organizationId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "appBuildError": false,
  "databaseBackup": false,
  "dokployRestart": false,
  "name": "example_name",
  "appDeploy": false,
  "dockerCleanup": false,
  "serverThreshold": false,
  "smtpServer": "example_smtpServer",
  "smtpPort": 0,
  "username": "example_username",
  "password": "example_password",
  "fromAddress": "example_fromAddress",
  "toAddresses": [],
  "notificationId": "example_notificationId",
  "emailId": "example_emailId",
  "organizationId": "example_organizationId"
}
```

Schema details:
  - `appBuildError` (boolean):  (Required: False)
  - `databaseBackup` (boolean):  (Required: False)
  - `dokployRestart` (boolean):  (Required: False)
  - `name` (string):  (Required: False)
  - `appDeploy` (boolean):  (Required: False)
  - `dockerCleanup` (boolean):  (Required: False)
  - `serverThreshold` (boolean):  (Required: False)
  - `smtpServer` (string):  (Required: False)
  - `smtpPort` (number):  (Required: False)
  - `username` (string):  (Required: False)
  - `password` (string):  (Required: False)
  - `fromAddress` (string):  (Required: False)
  - `toAddresses` (array):  (Required: False)
  - `notificationId` (string):  (Required: True)
  - `emailId` (string):  (Required: True)
  - `organizationId` (string):  (Required: False)

---

## POST /notification.testEmailConnection
**Operation ID:** `notification-testEmailConnection`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/notification.testEmailConnection' -H 'Content-Type: application/json' -d '{"smtpServer": "example_smtpServer", "smtpPort": 0, "username": "example_username", "password": "example_password", "toAddresses": [], "fromAddress": "example_fromAddress"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "smtpServer": "example_smtpServer",
  "smtpPort": 0,
  "username": "example_username",
  "password": "example_password",
  "toAddresses": [],
  "fromAddress": "example_fromAddress"
}
```

Schema details:
  - `smtpServer` (string):  (Required: True)
  - `smtpPort` (number):  (Required: True)
  - `username` (string):  (Required: True)
  - `password` (string):  (Required: True)
  - `toAddresses` (array):  (Required: True)
  - `fromAddress` (string):  (Required: True)

---

## POST /notification.remove
**Operation ID:** `notification-remove`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/notification.remove' -H 'Content-Type: application/json' -d '{"notificationId": "example_notificationId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "notificationId": "example_notificationId"
}
```

Schema details:
  - `notificationId` (string):  (Required: True)

---

## GET /notification.one
**Operation ID:** `notification-one`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/notification.one?notificationId=YOUR_NOTIFICATIONID'
```

**Query Parameters:**
* `notificationId` (string): No description. (Required: True). Example: `YOUR_NOTIFICATIONID`

---

## GET /notification.all
**Operation ID:** `notification-all`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/notification.all'
```

---

## POST /notification.receiveNotification
**Operation ID:** `notification-receiveNotification`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/notification.receiveNotification' -H 'Content-Type: application/json' -d '{"ServerType": "Dokploy", "Type": "Memory", "Value": 0, "Threshold": 0, "Message": "example_Message", "Timestamp": "example_Timestamp", "Token": "example_Token"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "ServerType": "Dokploy",
  "Type": "Memory",
  "Value": 0,
  "Threshold": 0,
  "Message": "example_Message",
  "Timestamp": "example_Timestamp",
  "Token": "example_Token"
}
```

Schema details:
  - `ServerType` (string) (Enum: ['Dokploy', 'Remote']) (Default: `Dokploy`):  (Required: False)
  - `Type` (string) (Enum: ['Memory', 'CPU']):  (Required: True)
  - `Value` (number):  (Required: True)
  - `Threshold` (number):  (Required: True)
  - `Message` (string):  (Required: True)
  - `Timestamp` (string):  (Required: True)
  - `Token` (string):  (Required: True)

---

## POST /notification.createGotify
**Operation ID:** `notification-createGotify`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/notification.createGotify' -H 'Content-Type: application/json' -d '{"appBuildError": false, "databaseBackup": false, "dokployRestart": false, "name": "example_name", "appDeploy": false, "dockerCleanup": false, "serverUrl": "example_serverUrl", "appToken": "example_appToken", "priority": 0, "decoration": false}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "appBuildError": false,
  "databaseBackup": false,
  "dokployRestart": false,
  "name": "example_name",
  "appDeploy": false,
  "dockerCleanup": false,
  "serverUrl": "example_serverUrl",
  "appToken": "example_appToken",
  "priority": 0,
  "decoration": false
}
```

Schema details:
  - `appBuildError` (boolean):  (Required: True)
  - `databaseBackup` (boolean):  (Required: True)
  - `dokployRestart` (boolean):  (Required: True)
  - `name` (string):  (Required: True)
  - `appDeploy` (boolean):  (Required: True)
  - `dockerCleanup` (boolean):  (Required: True)
  - `serverUrl` (string):  (Required: True)
  - `appToken` (string):  (Required: True)
  - `priority` (number):  (Required: True)
  - `decoration` (boolean):  (Required: True)

---

## POST /notification.updateGotify
**Operation ID:** `notification-updateGotify`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/notification.updateGotify' -H 'Content-Type: application/json' -d '{"appBuildError": false, "databaseBackup": false, "dokployRestart": false, "name": "example_name", "appDeploy": false, "dockerCleanup": false, "serverUrl": "example_serverUrl", "appToken": "example_appToken", "priority": 0, "decoration": false, "notificationId": "example_notificationId", "gotifyId": "example_gotifyId", "organizationId": "example_organizationId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "appBuildError": false,
  "databaseBackup": false,
  "dokployRestart": false,
  "name": "example_name",
  "appDeploy": false,
  "dockerCleanup": false,
  "serverUrl": "example_serverUrl",
  "appToken": "example_appToken",
  "priority": 0,
  "decoration": false,
  "notificationId": "example_notificationId",
  "gotifyId": "example_gotifyId",
  "organizationId": "example_organizationId"
}
```

Schema details:
  - `appBuildError` (boolean):  (Required: False)
  - `databaseBackup` (boolean):  (Required: False)
  - `dokployRestart` (boolean):  (Required: False)
  - `name` (string):  (Required: False)
  - `appDeploy` (boolean):  (Required: False)
  - `dockerCleanup` (boolean):  (Required: False)
  - `serverUrl` (string):  (Required: False)
  - `appToken` (string):  (Required: False)
  - `priority` (number):  (Required: False)
  - `decoration` (boolean):  (Required: False)
  - `notificationId` (string):  (Required: True)
  - `gotifyId` (string):  (Required: True)
  - `organizationId` (string):  (Required: False)

---

## POST /notification.testGotifyConnection
**Operation ID:** `notification-testGotifyConnection`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/notification.testGotifyConnection' -H 'Content-Type: application/json' -d '{"serverUrl": "example_serverUrl", "appToken": "example_appToken", "priority": 0, "decoration": false}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "serverUrl": "example_serverUrl",
  "appToken": "example_appToken",
  "priority": 0,
  "decoration": false
}
```

Schema details:
  - `serverUrl` (string):  (Required: True)
  - `appToken` (string):  (Required: True)
  - `priority` (number):  (Required: True)
  - `decoration` (boolean):  (Required: False)

---

## POST /sshKey.create
**Operation ID:** `sshKey-create`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/sshKey.create' -H 'Content-Type: application/json' -d '{"name": "example_name", "description": "example_description", "privateKey": "example_privateKey", "publicKey": "example_publicKey", "organizationId": "example_organizationId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "name": "example_name",
  "description": "example_description",
  "privateKey": "example_privateKey",
  "publicKey": "example_publicKey",
  "organizationId": "example_organizationId"
}
```

Schema details:
  - `name` (string):  (Required: True)
  - `description` (string):  (Required: False)
  - `privateKey` (string):  (Required: True)
  - `publicKey` (string):  (Required: True)
  - `organizationId` (string):  (Required: True)

---

## POST /sshKey.remove
**Operation ID:** `sshKey-remove`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/sshKey.remove' -H 'Content-Type: application/json' -d '{"sshKeyId": "example_sshKeyId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "sshKeyId": "example_sshKeyId"
}
```

Schema details:
  - `sshKeyId` (string):  (Required: True)

---

## GET /sshKey.one
**Operation ID:** `sshKey-one`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/sshKey.one?sshKeyId=YOUR_SSHKEYID'
```

**Query Parameters:**
* `sshKeyId` (string): No description. (Required: True). Example: `YOUR_SSHKEYID`

---

## GET /sshKey.all
**Operation ID:** `sshKey-all`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/sshKey.all'
```

---

## POST /sshKey.generate
**Operation ID:** `sshKey-generate`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/sshKey.generate' -H 'Content-Type: application/json' -d '{"type": "rsa"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "type": "rsa"
}
```

Schema details:
  - `type` (string) (Enum: ['rsa', 'ed25519']):  (Required: False)

---

## POST /sshKey.update
**Operation ID:** `sshKey-update`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/sshKey.update' -H 'Content-Type: application/json' -d '{"name": "example_name", "description": "example_description", "lastUsedAt": "example_lastUsedAt", "sshKeyId": "example_sshKeyId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "name": "example_name",
  "description": "example_description",
  "lastUsedAt": "example_lastUsedAt",
  "sshKeyId": "example_sshKeyId"
}
```

Schema details:
  - `name` (string):  (Required: False)
  - `description` (string):  (Required: False)
  - `lastUsedAt` (string):  (Required: False)
  - `sshKeyId` (string):  (Required: True)

---

## GET /gitProvider.getAll
**Operation ID:** `gitProvider-getAll`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/gitProvider.getAll'
```

---

## POST /gitProvider.remove
**Operation ID:** `gitProvider-remove`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/gitProvider.remove' -H 'Content-Type: application/json' -d '{"gitProviderId": "example_gitProviderId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "gitProviderId": "example_gitProviderId"
}
```

Schema details:
  - `gitProviderId` (string):  (Required: True)

---

## POST /gitea.create
**Operation ID:** `gitea-create`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/gitea.create' -H 'Content-Type: application/json' -d '{"giteaId": "example_giteaId", "giteaUrl": "example_giteaUrl", "redirectUri": "example_redirectUri", "clientId": "example_clientId", "clientSecret": "example_clientSecret", "gitProviderId": "example_gitProviderId", "accessToken": "example_accessToken", "refreshToken": "example_refreshToken", "expiresAt": 0, "scopes": "example_scopes", "lastAuthenticatedAt": 0, "name": "example_name", "giteaUsername": "example_giteaUsername", "organizationName": "example_organizationName"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "giteaId": "example_giteaId",
  "giteaUrl": "example_giteaUrl",
  "redirectUri": "example_redirectUri",
  "clientId": "example_clientId",
  "clientSecret": "example_clientSecret",
  "gitProviderId": "example_gitProviderId",
  "accessToken": "example_accessToken",
  "refreshToken": "example_refreshToken",
  "expiresAt": 0,
  "scopes": "example_scopes",
  "lastAuthenticatedAt": 0,
  "name": "example_name",
  "giteaUsername": "example_giteaUsername",
  "organizationName": "example_organizationName"
}
```

Schema details:
  - `giteaId` (string):  (Required: False)
  - `giteaUrl` (string):  (Required: True)
  - `redirectUri` (string):  (Required: False)
  - `clientId` (string):  (Required: False)
  - `clientSecret` (string):  (Required: False)
  - `gitProviderId` (string):  (Required: False)
  - `accessToken` (string):  (Required: False)
  - `refreshToken` (string):  (Required: False)
  - `expiresAt` (number):  (Required: False)
  - `scopes` (string):  (Required: False)
  - `lastAuthenticatedAt` (number):  (Required: False)
  - `name` (string):  (Required: True)
  - `giteaUsername` (string):  (Required: False)
  - `organizationName` (string):  (Required: False)

---

## GET /gitea.one
**Operation ID:** `gitea-one`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/gitea.one?giteaId=YOUR_GITEAID'
```

**Query Parameters:**
* `giteaId` (string): No description. (Required: True). Example: `YOUR_GITEAID`

---

## GET /gitea.giteaProviders
**Operation ID:** `gitea-giteaProviders`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/gitea.giteaProviders'
```

---

## GET /gitea.getGiteaRepositories
**Operation ID:** `gitea-getGiteaRepositories`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/gitea.getGiteaRepositories?giteaId=YOUR_GITEAID'
```

**Query Parameters:**
* `giteaId` (string): No description. (Required: True). Example: `YOUR_GITEAID`

---

## GET /gitea.getGiteaBranches
**Operation ID:** `gitea-getGiteaBranches`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/gitea.getGiteaBranches?owner=YOUR_OWNER&repositoryName=YOUR_REPOSITORYNAME&giteaId=YOUR_GITEAID'
```

**Query Parameters:**
* `owner` (string): No description. (Required: True). Example: `YOUR_OWNER`
* `repositoryName` (string): No description. (Required: True). Example: `YOUR_REPOSITORYNAME`
* `giteaId` (string): No description. (Required: False). Example: `YOUR_GITEAID`

---

## POST /gitea.testConnection
**Operation ID:** `gitea-testConnection`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/gitea.testConnection' -H 'Content-Type: application/json' -d '{"giteaId": "example_giteaId", "organizationName": "example_organizationName"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "giteaId": "example_giteaId",
  "organizationName": "example_organizationName"
}
```

Schema details:
  - `giteaId` (string):  (Required: False)
  - `organizationName` (string):  (Required: False)

---

## POST /gitea.update
**Operation ID:** `gitea-update`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/gitea.update' -H 'Content-Type: application/json' -d '{"giteaId": "example_giteaId", "giteaUrl": "example_giteaUrl", "redirectUri": "example_redirectUri", "clientId": "example_clientId", "clientSecret": "example_clientSecret", "gitProviderId": "example_gitProviderId", "accessToken": "example_accessToken", "refreshToken": "example_refreshToken", "expiresAt": 0, "scopes": "example_scopes", "lastAuthenticatedAt": 0, "name": "example_name", "giteaUsername": "example_giteaUsername", "organizationName": "example_organizationName"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "giteaId": "example_giteaId",
  "giteaUrl": "example_giteaUrl",
  "redirectUri": "example_redirectUri",
  "clientId": "example_clientId",
  "clientSecret": "example_clientSecret",
  "gitProviderId": "example_gitProviderId",
  "accessToken": "example_accessToken",
  "refreshToken": "example_refreshToken",
  "expiresAt": 0,
  "scopes": "example_scopes",
  "lastAuthenticatedAt": 0,
  "name": "example_name",
  "giteaUsername": "example_giteaUsername",
  "organizationName": "example_organizationName"
}
```

Schema details:
  - `giteaId` (string):  (Required: True)
  - `giteaUrl` (string):  (Required: True)
  - `redirectUri` (string):  (Required: False)
  - `clientId` (string):  (Required: False)
  - `clientSecret` (string):  (Required: False)
  - `gitProviderId` (string):  (Required: True)
  - `accessToken` (string):  (Required: False)
  - `refreshToken` (string):  (Required: False)
  - `expiresAt` (number):  (Required: False)
  - `scopes` (string):  (Required: False)
  - `lastAuthenticatedAt` (number):  (Required: False)
  - `name` (string):  (Required: True)
  - `giteaUsername` (string):  (Required: False)
  - `organizationName` (string):  (Required: False)

---

## GET /gitea.getGiteaUrl
**Operation ID:** `gitea-getGiteaUrl`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/gitea.getGiteaUrl?giteaId=YOUR_GITEAID'
```

**Query Parameters:**
* `giteaId` (string): No description. (Required: True). Example: `YOUR_GITEAID`

---

## POST /bitbucket.create
**Operation ID:** `bitbucket-create`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/bitbucket.create' -H 'Content-Type: application/json' -d '{"bitbucketId": "example_bitbucketId", "bitbucketUsername": "example_bitbucketUsername", "appPassword": "example_appPassword", "bitbucketWorkspaceName": "example_bitbucketWorkspaceName", "gitProviderId": "example_gitProviderId", "authId": "example_authId", "name": "example_name"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "bitbucketId": "example_bitbucketId",
  "bitbucketUsername": "example_bitbucketUsername",
  "appPassword": "example_appPassword",
  "bitbucketWorkspaceName": "example_bitbucketWorkspaceName",
  "gitProviderId": "example_gitProviderId",
  "authId": "example_authId",
  "name": "example_name"
}
```

Schema details:
  - `bitbucketId` (string):  (Required: False)
  - `bitbucketUsername` (string):  (Required: False)
  - `appPassword` (string):  (Required: False)
  - `bitbucketWorkspaceName` (string):  (Required: False)
  - `gitProviderId` (string):  (Required: False)
  - `authId` (string):  (Required: True)
  - `name` (string):  (Required: True)

---

## GET /bitbucket.one
**Operation ID:** `bitbucket-one`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/bitbucket.one?bitbucketId=YOUR_BITBUCKETID'
```

**Query Parameters:**
* `bitbucketId` (string): No description. (Required: True). Example: `YOUR_BITBUCKETID`

---

## GET /bitbucket.bitbucketProviders
**Operation ID:** `bitbucket-bitbucketProviders`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/bitbucket.bitbucketProviders'
```

---

## GET /bitbucket.getBitbucketRepositories
**Operation ID:** `bitbucket-getBitbucketRepositories`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/bitbucket.getBitbucketRepositories?bitbucketId=YOUR_BITBUCKETID'
```

**Query Parameters:**
* `bitbucketId` (string): No description. (Required: True). Example: `YOUR_BITBUCKETID`

---

## GET /bitbucket.getBitbucketBranches
**Operation ID:** `bitbucket-getBitbucketBranches`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/bitbucket.getBitbucketBranches?owner=YOUR_OWNER&repo=YOUR_REPO&bitbucketId=YOUR_BITBUCKETID'
```

**Query Parameters:**
* `owner` (string): No description. (Required: True). Example: `YOUR_OWNER`
* `repo` (string): No description. (Required: True). Example: `YOUR_REPO`
* `bitbucketId` (string): No description. (Required: False). Example: `YOUR_BITBUCKETID`

---

## POST /bitbucket.testConnection
**Operation ID:** `bitbucket-testConnection`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/bitbucket.testConnection' -H 'Content-Type: application/json' -d '{"bitbucketId": "example_bitbucketId", "bitbucketUsername": "example_bitbucketUsername", "workspaceName": "example_workspaceName"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "bitbucketId": "example_bitbucketId",
  "bitbucketUsername": "example_bitbucketUsername",
  "workspaceName": "example_workspaceName"
}
```

Schema details:
  - `bitbucketId` (string):  (Required: True)
  - `bitbucketUsername` (string):  (Required: False)
  - `workspaceName` (string):  (Required: False)

---

## POST /bitbucket.update
**Operation ID:** `bitbucket-update`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/bitbucket.update' -H 'Content-Type: application/json' -d '{"bitbucketId": "example_bitbucketId", "bitbucketUsername": "example_bitbucketUsername", "appPassword": "example_appPassword", "bitbucketWorkspaceName": "example_bitbucketWorkspaceName", "gitProviderId": "example_gitProviderId", "name": "example_name", "organizationId": "example_organizationId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "bitbucketId": "example_bitbucketId",
  "bitbucketUsername": "example_bitbucketUsername",
  "appPassword": "example_appPassword",
  "bitbucketWorkspaceName": "example_bitbucketWorkspaceName",
  "gitProviderId": "example_gitProviderId",
  "name": "example_name",
  "organizationId": "example_organizationId"
}
```

Schema details:
  - `bitbucketId` (string):  (Required: True)
  - `bitbucketUsername` (string):  (Required: False)
  - `appPassword` (string):  (Required: False)
  - `bitbucketWorkspaceName` (string):  (Required: False)
  - `gitProviderId` (string):  (Required: True)
  - `name` (string):  (Required: True)
  - `organizationId` (string):  (Required: False)

---

## POST /gitlab.create
**Operation ID:** `gitlab-create`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/gitlab.create' -H 'Content-Type: application/json' -d '{"gitlabId": "example_gitlabId", "gitlabUrl": "example_gitlabUrl", "applicationId": "example_applicationId", "redirectUri": "example_redirectUri", "secret": "example_secret", "accessToken": "example_accessToken", "refreshToken": "example_refreshToken", "groupName": "example_groupName", "expiresAt": 0, "gitProviderId": "example_gitProviderId", "authId": "example_authId", "name": "example_name"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "gitlabId": "example_gitlabId",
  "gitlabUrl": "example_gitlabUrl",
  "applicationId": "example_applicationId",
  "redirectUri": "example_redirectUri",
  "secret": "example_secret",
  "accessToken": "example_accessToken",
  "refreshToken": "example_refreshToken",
  "groupName": "example_groupName",
  "expiresAt": 0,
  "gitProviderId": "example_gitProviderId",
  "authId": "example_authId",
  "name": "example_name"
}
```

Schema details:
  - `gitlabId` (string):  (Required: False)
  - `gitlabUrl` (string):  (Required: True)
  - `applicationId` (string):  (Required: False)
  - `redirectUri` (string):  (Required: False)
  - `secret` (string):  (Required: False)
  - `accessToken` (string):  (Required: False)
  - `refreshToken` (string):  (Required: False)
  - `groupName` (string):  (Required: False)
  - `expiresAt` (number):  (Required: False)
  - `gitProviderId` (string):  (Required: False)
  - `authId` (string):  (Required: True)
  - `name` (string):  (Required: True)

---

## GET /gitlab.one
**Operation ID:** `gitlab-one`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/gitlab.one?gitlabId=YOUR_GITLABID'
```

**Query Parameters:**
* `gitlabId` (string): No description. (Required: True). Example: `YOUR_GITLABID`

---

## GET /gitlab.gitlabProviders
**Operation ID:** `gitlab-gitlabProviders`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/gitlab.gitlabProviders'
```

---

## GET /gitlab.getGitlabRepositories
**Operation ID:** `gitlab-getGitlabRepositories`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/gitlab.getGitlabRepositories?gitlabId=YOUR_GITLABID'
```

**Query Parameters:**
* `gitlabId` (string): No description. (Required: True). Example: `YOUR_GITLABID`

---

## GET /gitlab.getGitlabBranches
**Operation ID:** `gitlab-getGitlabBranches`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/gitlab.getGitlabBranches?id=123&owner=YOUR_OWNER&repo=YOUR_REPO&gitlabId=YOUR_GITLABID'
```

**Query Parameters:**
* `id` (number): No description. (Required: False). Example: `123`
* `owner` (string): No description. (Required: True). Example: `YOUR_OWNER`
* `repo` (string): No description. (Required: True). Example: `YOUR_REPO`
* `gitlabId` (string): No description. (Required: False). Example: `YOUR_GITLABID`

---

## POST /gitlab.testConnection
**Operation ID:** `gitlab-testConnection`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/gitlab.testConnection' -H 'Content-Type: application/json' -d '{"gitlabId": "example_gitlabId", "groupName": "example_groupName"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "gitlabId": "example_gitlabId",
  "groupName": "example_groupName"
}
```

Schema details:
  - `gitlabId` (string):  (Required: False)
  - `groupName` (string):  (Required: False)

---

## POST /gitlab.update
**Operation ID:** `gitlab-update`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/gitlab.update' -H 'Content-Type: application/json' -d '{"gitlabId": "example_gitlabId", "gitlabUrl": "example_gitlabUrl", "applicationId": "example_applicationId", "redirectUri": "example_redirectUri", "secret": "example_secret", "accessToken": "example_accessToken", "refreshToken": "example_refreshToken", "groupName": "example_groupName", "expiresAt": 0, "gitProviderId": "example_gitProviderId", "name": "example_name"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "gitlabId": "example_gitlabId",
  "gitlabUrl": "example_gitlabUrl",
  "applicationId": "example_applicationId",
  "redirectUri": "example_redirectUri",
  "secret": "example_secret",
  "accessToken": "example_accessToken",
  "refreshToken": "example_refreshToken",
  "groupName": "example_groupName",
  "expiresAt": 0,
  "gitProviderId": "example_gitProviderId",
  "name": "example_name"
}
```

Schema details:
  - `gitlabId` (string):  (Required: True)
  - `gitlabUrl` (string):  (Required: True)
  - `applicationId` (string):  (Required: False)
  - `redirectUri` (string):  (Required: False)
  - `secret` (string):  (Required: False)
  - `accessToken` (string):  (Required: False)
  - `refreshToken` (string):  (Required: False)
  - `groupName` (string):  (Required: False)
  - `expiresAt` (number):  (Required: False)
  - `gitProviderId` (string):  (Required: True)
  - `name` (string):  (Required: True)

---

## GET /github.one
**Operation ID:** `github-one`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/github.one?githubId=YOUR_GITHUBID'
```

**Query Parameters:**
* `githubId` (string): No description. (Required: True). Example: `YOUR_GITHUBID`

---

## GET /github.getGithubRepositories
**Operation ID:** `github-getGithubRepositories`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/github.getGithubRepositories?githubId=YOUR_GITHUBID'
```

**Query Parameters:**
* `githubId` (string): No description. (Required: True). Example: `YOUR_GITHUBID`

---

## GET /github.getGithubBranches
**Operation ID:** `github-getGithubBranches`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/github.getGithubBranches?repo=YOUR_REPO&owner=YOUR_OWNER&githubId=YOUR_GITHUBID'
```

**Query Parameters:**
* `repo` (string): No description. (Required: True). Example: `YOUR_REPO`
* `owner` (string): No description. (Required: True). Example: `YOUR_OWNER`
* `githubId` (string): No description. (Required: False). Example: `YOUR_GITHUBID`

---

## GET /github.githubProviders
**Operation ID:** `github-githubProviders`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/github.githubProviders'
```

---

## POST /github.testConnection
**Operation ID:** `github-testConnection`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/github.testConnection' -H 'Content-Type: application/json' -d '{"githubId": "example_githubId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "githubId": "example_githubId"
}
```

Schema details:
  - `githubId` (string):  (Required: True)

---

## POST /github.update
**Operation ID:** `github-update`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/github.update' -H 'Content-Type: application/json' -d '{"githubId": "example_githubId", "githubAppName": "example_githubAppName", "githubAppId": 0, "githubClientId": "example_githubClientId", "githubClientSecret": "example_githubClientSecret", "githubInstallationId": "example_githubInstallationId", "githubPrivateKey": "example_githubPrivateKey", "githubWebhookSecret": "example_githubWebhookSecret", "gitProviderId": "example_gitProviderId", "name": "example_name"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "githubId": "example_githubId",
  "githubAppName": "example_githubAppName",
  "githubAppId": 0,
  "githubClientId": "example_githubClientId",
  "githubClientSecret": "example_githubClientSecret",
  "githubInstallationId": "example_githubInstallationId",
  "githubPrivateKey": "example_githubPrivateKey",
  "githubWebhookSecret": "example_githubWebhookSecret",
  "gitProviderId": "example_gitProviderId",
  "name": "example_name"
}
```

Schema details:
  - `githubId` (string):  (Required: True)
  - `githubAppName` (string):  (Required: False)
  - `githubAppId` (number):  (Required: False)
  - `githubClientId` (string):  (Required: False)
  - `githubClientSecret` (string):  (Required: False)
  - `githubInstallationId` (string):  (Required: False)
  - `githubPrivateKey` (string):  (Required: False)
  - `githubWebhookSecret` (string):  (Required: False)
  - `gitProviderId` (string):  (Required: True)
  - `name` (string):  (Required: True)

---

## POST /server.create
**Operation ID:** `server-create`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/server.create' -H 'Content-Type: application/json' -d '{"name": "example_name", "description": "example_description", "ipAddress": "example_ipAddress", "port": 0, "username": "example_username", "sshKeyId": "example_sshKeyId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "name": "example_name",
  "description": "example_description",
  "ipAddress": "example_ipAddress",
  "port": 0,
  "username": "example_username",
  "sshKeyId": "example_sshKeyId"
}
```

Schema details:
  - `name` (string):  (Required: True)
  - `description` (string):  (Required: False)
  - `ipAddress` (string):  (Required: True)
  - `port` (number):  (Required: True)
  - `username` (string):  (Required: True)
  - `sshKeyId` (string):  (Required: True)

---

## GET /server.one
**Operation ID:** `server-one`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/server.one?serverId=YOUR_SERVERID'
```

**Query Parameters:**
* `serverId` (string): No description. (Required: True). Example: `YOUR_SERVERID`

---

## GET /server.getDefaultCommand
**Operation ID:** `server-getDefaultCommand`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/server.getDefaultCommand?serverId=YOUR_SERVERID'
```

**Query Parameters:**
* `serverId` (string): No description. (Required: True). Example: `YOUR_SERVERID`

---

## GET /server.all
**Operation ID:** `server-all`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/server.all'
```

---

## GET /server.count
**Operation ID:** `server-count`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/server.count'
```

---

## GET /server.withSSHKey
**Operation ID:** `server-withSSHKey`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/server.withSSHKey'
```

---

## POST /server.setup
**Operation ID:** `server-setup`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/server.setup' -H 'Content-Type: application/json' -d '{"serverId": "example_serverId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "serverId": "example_serverId"
}
```

Schema details:
  - `serverId` (string):  (Required: True)

---

## GET /server.validate
**Operation ID:** `server-validate`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/server.validate?serverId=YOUR_SERVERID'
```

**Query Parameters:**
* `serverId` (string): No description. (Required: True). Example: `YOUR_SERVERID`

---

## GET /server.security
**Operation ID:** `server-security`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/server.security?serverId=YOUR_SERVERID'
```

**Query Parameters:**
* `serverId` (string): No description. (Required: True). Example: `YOUR_SERVERID`

---

## POST /server.setupMonitoring
**Operation ID:** `server-setupMonitoring`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/server.setupMonitoring' -H 'Content-Type: application/json' -d '{"serverId": "example_serverId", "metricsConfig": {}}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "serverId": "example_serverId",
  "metricsConfig": {}
}
```

Schema details:
  - `serverId` (string):  (Required: True)
  - `metricsConfig` (object):  (Required: True)

---

## POST /server.remove
**Operation ID:** `server-remove`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/server.remove' -H 'Content-Type: application/json' -d '{"serverId": "example_serverId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "serverId": "example_serverId"
}
```

Schema details:
  - `serverId` (string):  (Required: True)

---

## POST /server.update
**Operation ID:** `server-update`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/server.update' -H 'Content-Type: application/json' -d '{"name": "example_name", "description": "example_description", "serverId": "example_serverId", "ipAddress": "example_ipAddress", "port": 0, "username": "example_username", "sshKeyId": "example_sshKeyId", "command": "example_command"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "name": "example_name",
  "description": "example_description",
  "serverId": "example_serverId",
  "ipAddress": "example_ipAddress",
  "port": 0,
  "username": "example_username",
  "sshKeyId": "example_sshKeyId",
  "command": "example_command"
}
```

Schema details:
  - `name` (string):  (Required: True)
  - `description` (string):  (Required: False)
  - `serverId` (string):  (Required: True)
  - `ipAddress` (string):  (Required: True)
  - `port` (number):  (Required: True)
  - `username` (string):  (Required: True)
  - `sshKeyId` (string):  (Required: True)
  - `command` (string):  (Required: False)

---

## GET /server.publicIp
**Operation ID:** `server-publicIp`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/server.publicIp'
```

---

## GET /server.getServerMetrics
**Operation ID:** `server-getServerMetrics`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/server.getServerMetrics?url=YOUR_URL&token=YOUR_TOKEN&dataPoints=YOUR_DATAPOINTS'
```

**Query Parameters:**
* `url` (string): No description. (Required: True). Example: `YOUR_URL`
* `token` (string): No description. (Required: True). Example: `YOUR_TOKEN`
* `dataPoints` (string): No description. (Required: True). Example: `YOUR_DATAPOINTS`

---

## GET /stripe.getProducts
**Operation ID:** `stripe-getProducts`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/stripe.getProducts'
```

---

## POST /stripe.createCheckoutSession
**Operation ID:** `stripe-createCheckoutSession`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/stripe.createCheckoutSession' -H 'Content-Type: application/json' -d '{"productId": "example_productId", "serverQuantity": 0, "isAnnual": false}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "productId": "example_productId",
  "serverQuantity": 0,
  "isAnnual": false
}
```

Schema details:
  - `productId` (string):  (Required: True)
  - `serverQuantity` (number):  (Required: True)
  - `isAnnual` (boolean):  (Required: True)

---

## POST /stripe.createCustomerPortalSession
**Operation ID:** `stripe-createCustomerPortalSession`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/stripe.createCustomerPortalSession'
```

---

## GET /stripe.canCreateMoreServers
**Operation ID:** `stripe-canCreateMoreServers`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/stripe.canCreateMoreServers'
```

---

## GET /swarm.getNodes
**Operation ID:** `swarm-getNodes`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/swarm.getNodes?serverId=YOUR_SERVERID'
```

**Query Parameters:**
* `serverId` (string): No description. (Required: False). Example: `YOUR_SERVERID`

---

## GET /swarm.getNodeInfo
**Operation ID:** `swarm-getNodeInfo`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/swarm.getNodeInfo?nodeId=YOUR_NODEID&serverId=YOUR_SERVERID'
```

**Query Parameters:**
* `nodeId` (string): No description. (Required: True). Example: `YOUR_NODEID`
* `serverId` (string): No description. (Required: False). Example: `YOUR_SERVERID`

---

## GET /swarm.getNodeApps
**Operation ID:** `swarm-getNodeApps`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/swarm.getNodeApps?serverId=YOUR_SERVERID'
```

**Query Parameters:**
* `serverId` (string): No description. (Required: False). Example: `YOUR_SERVERID`

---

## GET /swarm.getAppInfos
**Operation ID:** `swarm-getAppInfos`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/swarm.getAppInfos?appName=YOUR_APPNAME&serverId=YOUR_SERVERID'
```

**Query Parameters:**
* `appName` (string): No description. (Required: True). Example: `YOUR_APPNAME`
* `serverId` (string): No description. (Required: False). Example: `YOUR_SERVERID`

---

## GET /ai.one
**Operation ID:** `ai-one`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/ai.one?aiId=YOUR_AIID'
```

**Query Parameters:**
* `aiId` (string): No description. (Required: True). Example: `YOUR_AIID`

---

## GET /ai.getModels
**Operation ID:** `ai-getModels`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/ai.getModels?apiUrl=YOUR_APIURL&apiKey=YOUR_APIKEY'
```

**Query Parameters:**
* `apiUrl` (string): No description. (Required: True). Example: `YOUR_APIURL`
* `apiKey` (string): No description. (Required: True). Example: `YOUR_APIKEY`

---

## POST /ai.create
**Operation ID:** `ai-create`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/ai.create' -H 'Content-Type: application/json' -d '{"name": "example_name", "apiUrl": "example_apiUrl", "apiKey": "example_apiKey", "model": "example_model", "isEnabled": false}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "name": "example_name",
  "apiUrl": "example_apiUrl",
  "apiKey": "example_apiKey",
  "model": "example_model",
  "isEnabled": false
}
```

Schema details:
  - `name` (string):  (Required: True)
  - `apiUrl` (string):  (Required: True)
  - `apiKey` (string):  (Required: True)
  - `model` (string):  (Required: True)
  - `isEnabled` (boolean):  (Required: True)

---

## POST /ai.update
**Operation ID:** `ai-update`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/ai.update' -H 'Content-Type: application/json' -d '{"aiId": "example_aiId", "name": "example_name", "apiUrl": "example_apiUrl", "apiKey": "example_apiKey", "model": "example_model", "isEnabled": false, "createdAt": "example_createdAt"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "aiId": "example_aiId",
  "name": "example_name",
  "apiUrl": "example_apiUrl",
  "apiKey": "example_apiKey",
  "model": "example_model",
  "isEnabled": false,
  "createdAt": "example_createdAt"
}
```

Schema details:
  - `aiId` (string):  (Required: True)
  - `name` (string):  (Required: False)
  - `apiUrl` (string):  (Required: False)
  - `apiKey` (string):  (Required: False)
  - `model` (string):  (Required: False)
  - `isEnabled` (boolean):  (Required: False)
  - `createdAt` (string):  (Required: False)

---

## GET /ai.getAll
**Operation ID:** `ai-getAll`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/ai.getAll'
```

---

## GET /ai.get
**Operation ID:** `ai-get`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/ai.get?aiId=YOUR_AIID'
```

**Query Parameters:**
* `aiId` (string): No description. (Required: True). Example: `YOUR_AIID`

---

## POST /ai.delete
**Operation ID:** `ai-delete`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/ai.delete' -H 'Content-Type: application/json' -d '{"aiId": "example_aiId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "aiId": "example_aiId"
}
```

Schema details:
  - `aiId` (string):  (Required: True)

---

## POST /ai.suggest
**Operation ID:** `ai-suggest`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/ai.suggest' -H 'Content-Type: application/json' -d '{"aiId": "example_aiId", "input": "example_input", "serverId": "example_serverId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "aiId": "example_aiId",
  "input": "example_input",
  "serverId": "example_serverId"
}
```

Schema details:
  - `aiId` (string):  (Required: True)
  - `input` (string):  (Required: True)
  - `serverId` (string):  (Required: False)

---

## POST /ai.deploy
**Operation ID:** `ai-deploy`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/ai.deploy' -H 'Content-Type: application/json' -d '{"projectId": "example_projectId", "id": "example_id", "dockerCompose": "example_dockerCompose", "envVariables": "example_envVariables", "serverId": "example_serverId", "name": "example_name", "description": "example_description", "domains": [], "configFiles": []}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "projectId": "example_projectId",
  "id": "example_id",
  "dockerCompose": "example_dockerCompose",
  "envVariables": "example_envVariables",
  "serverId": "example_serverId",
  "name": "example_name",
  "description": "example_description",
  "domains": [],
  "configFiles": []
}
```

Schema details:
  - `projectId` (string):  (Required: True)
  - `id` (string):  (Required: True)
  - `dockerCompose` (string):  (Required: True)
  - `envVariables` (string):  (Required: True)
  - `serverId` (string):  (Required: False)
  - `name` (string):  (Required: True)
  - `description` (string):  (Required: True)
  - `domains` (array):  (Required: False)
  - `configFiles` (array):  (Required: False)

---

## POST /organization.create
**Operation ID:** `organization-create`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/organization.create' -H 'Content-Type: application/json' -d '{"name": "example_name", "logo": "example_logo"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "name": "example_name",
  "logo": "example_logo"
}
```

Schema details:
  - `name` (string):  (Required: True)
  - `logo` (string):  (Required: False)

---

## GET /organization.all
**Operation ID:** `organization-all`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/organization.all'
```

---

## GET /organization.one
**Operation ID:** `organization-one`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/organization.one?organizationId=YOUR_ORGANIZATIONID'
```

**Query Parameters:**
* `organizationId` (string): No description. (Required: True). Example: `YOUR_ORGANIZATIONID`

---

## POST /organization.update
**Operation ID:** `organization-update`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/organization.update' -H 'Content-Type: application/json' -d '{"organizationId": "example_organizationId", "name": "example_name", "logo": "example_logo"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "organizationId": "example_organizationId",
  "name": "example_name",
  "logo": "example_logo"
}
```

Schema details:
  - `organizationId` (string):  (Required: True)
  - `name` (string):  (Required: True)
  - `logo` (string):  (Required: False)

---

## POST /organization.delete
**Operation ID:** `organization-delete`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/organization.delete' -H 'Content-Type: application/json' -d '{"organizationId": "example_organizationId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "organizationId": "example_organizationId"
}
```

Schema details:
  - `organizationId` (string):  (Required: True)

---

## GET /organization.allInvitations
**Operation ID:** `organization-allInvitations`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/organization.allInvitations'
```

---

## POST /organization.removeInvitation
**Operation ID:** `organization-removeInvitation`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/organization.removeInvitation' -H 'Content-Type: application/json' -d '{"invitationId": "example_invitationId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "invitationId": "example_invitationId"
}
```

Schema details:
  - `invitationId` (string):  (Required: True)

---

## POST /schedule.create
**Operation ID:** `schedule-create`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/schedule.create' -H 'Content-Type: application/json' -d '{"scheduleId": "example_scheduleId", "name": "example_name", "cronExpression": "example_cronExpression", "appName": "example_appName", "serviceName": "example_serviceName", "shellType": "bash", "scheduleType": "application", "command": "example_command", "script": "example_script", "applicationId": "example_applicationId", "composeId": "example_composeId", "serverId": "example_serverId", "userId": "example_userId", "enabled": false, "createdAt": "example_createdAt"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "scheduleId": "example_scheduleId",
  "name": "example_name",
  "cronExpression": "example_cronExpression",
  "appName": "example_appName",
  "serviceName": "example_serviceName",
  "shellType": "bash",
  "scheduleType": "application",
  "command": "example_command",
  "script": "example_script",
  "applicationId": "example_applicationId",
  "composeId": "example_composeId",
  "serverId": "example_serverId",
  "userId": "example_userId",
  "enabled": false,
  "createdAt": "example_createdAt"
}
```

Schema details:
  - `scheduleId` (string):  (Required: False)
  - `name` (string):  (Required: True)
  - `cronExpression` (string):  (Required: True)
  - `appName` (string):  (Required: False)
  - `serviceName` (string):  (Required: False)
  - `shellType` (string) (Enum: ['bash', 'sh']):  (Required: False)
  - `scheduleType` (string) (Enum: ['application', 'compose', 'server', 'dokploy-server']):  (Required: False)
  - `command` (string):  (Required: True)
  - `script` (string):  (Required: False)
  - `applicationId` (string):  (Required: False)
  - `composeId` (string):  (Required: False)
  - `serverId` (string):  (Required: False)
  - `userId` (string):  (Required: False)
  - `enabled` (boolean):  (Required: False)
  - `createdAt` (string):  (Required: False)

---

## POST /schedule.update
**Operation ID:** `schedule-update`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/schedule.update' -H 'Content-Type: application/json' -d '{"scheduleId": "example_scheduleId", "name": "example_name", "cronExpression": "example_cronExpression", "appName": "example_appName", "serviceName": "example_serviceName", "shellType": "bash", "scheduleType": "application", "command": "example_command", "script": "example_script", "applicationId": "example_applicationId", "composeId": "example_composeId", "serverId": "example_serverId", "userId": "example_userId", "enabled": false, "createdAt": "example_createdAt"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "scheduleId": "example_scheduleId",
  "name": "example_name",
  "cronExpression": "example_cronExpression",
  "appName": "example_appName",
  "serviceName": "example_serviceName",
  "shellType": "bash",
  "scheduleType": "application",
  "command": "example_command",
  "script": "example_script",
  "applicationId": "example_applicationId",
  "composeId": "example_composeId",
  "serverId": "example_serverId",
  "userId": "example_userId",
  "enabled": false,
  "createdAt": "example_createdAt"
}
```

Schema details:
  - `scheduleId` (string):  (Required: True)
  - `name` (string):  (Required: True)
  - `cronExpression` (string):  (Required: True)
  - `appName` (string):  (Required: False)
  - `serviceName` (string):  (Required: False)
  - `shellType` (string) (Enum: ['bash', 'sh']):  (Required: False)
  - `scheduleType` (string) (Enum: ['application', 'compose', 'server', 'dokploy-server']):  (Required: False)
  - `command` (string):  (Required: True)
  - `script` (string):  (Required: False)
  - `applicationId` (string):  (Required: False)
  - `composeId` (string):  (Required: False)
  - `serverId` (string):  (Required: False)
  - `userId` (string):  (Required: False)
  - `enabled` (boolean):  (Required: False)
  - `createdAt` (string):  (Required: False)

---

## POST /schedule.delete
**Operation ID:** `schedule-delete`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/schedule.delete' -H 'Content-Type: application/json' -d '{"scheduleId": "example_scheduleId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "scheduleId": "example_scheduleId"
}
```

Schema details:
  - `scheduleId` (string):  (Required: True)

---

## GET /schedule.list
**Operation ID:** `schedule-list`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/schedule.list?id=YOUR_ID&scheduleType=application'
```

**Query Parameters:**
* `id` (string): No description. (Required: True). Example: `YOUR_ID`
* `scheduleType` (string): No description. (Required: True). Example: `application`

---

## GET /schedule.one
**Operation ID:** `schedule-one`
**Summary:** No detailed description available

**Description:** No detailed description available.


**cURL Command:**
```bash
curl -X GET 'https://dokploy.dashstache.com/api/schedule.one?scheduleId=YOUR_SCHEDULEID'
```

**Query Parameters:**
* `scheduleId` (string): No description. (Required: True). Example: `YOUR_SCHEDULEID`

---

## POST /schedule.runManually
**Operation ID:** `schedule-runManually`
**Summary:** No detailed description available

**Description:** No detailed description available.

**Request Body Required:** True

**cURL Command:**
```bash
curl -X POST 'https://dokploy.dashstache.com/api/schedule.runManually' -H 'Content-Type: application/json' -d '{"scheduleId": "example_scheduleId"}'
```

**Request Body Details:**
Example JSON Body:
```json
{
  "scheduleId": "example_scheduleId"
}
```

Schema details:
  - `scheduleId` (string):  (Required: True)

---
