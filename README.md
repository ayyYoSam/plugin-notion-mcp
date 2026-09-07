# Plugin MCP

[![CI](https://github.com/ayyYoSam/plugin-notion-mcp/actions/workflows/ci.yml/badge.svg)](https://github.com/ayyYoSam/plugin-notion-mcp/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/plugin-notion-mcp.svg)](https://www.npmjs.com/package/plugin-notion-mcp)
[![npm downloads](https://img.shields.io/npm/dm/plugin-notion-mcp.svg)](https://www.npmjs.com/package/plugin-notion-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

One command to install and configure the Notion MCP automatically.

<p align="center">
  <img src="https://github.com/user-attachments/assets/805dff80-d150-487d-85cd-8c064650864f" alt="Plugin MCP Logo" width="200"/>
</p>

---

## Features

* One-command Notion MCP installation
* Automatic client detection
* Secure credential storage
* Environment verification
* Cross-platform support
* Clean uninstall

## Installation

Install the CLI globally:

```bash
npm install -g plugin-notion-mcp
```

Install and configure the Notion MCP:

```bash
plugin-mcp install notion
```

## Quick Start

Common commands you'll use after installation.

### Inspect your environment

```bash
plugin-mcp doctor
```

Detects your platform, Node.js, npm and supported MCP clients.

### Verify your installation

```bash
plugin-mcp verify
```

Checks that the package, credentials and client configuration are ready.

### Manage credentials

Store your Notion API key securely.

```bash
plugin-mcp login notion
```

Remove the stored credentials.

```bash
plugin-mcp logout notion
```

### Remove Plugin MCP

Completely remove the Notion MCP and its configuration.

```bash
plugin-mcp uninstall notion
```

---

## Supported Clients

| Client         | Status |
| -------------- | ------ |
| VS Code        | ✓      |
| Claude Desktop | ✓      |
| Cursor         | ✓      |
| Windsurf       | ✓      |

## How it works

Plugin MCP automatically:

1. Detects your operating system.
2. Finds supported MCP clients.
3. Installs the official Notion MCP.
4. Stores credentials securely.
5. Writes client configuration.
6. Verifies the installation.

## License

MIT License.
