# Plugin MCP

[![CI](https://github.com/ayyYoSam/plugin-notion-mcp/actions/workflows/ci.yml/badge.svg)](https://github.com/ayyYoSam/plugin-notion-mcp/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/plugin-notion-mcp.svg)](https://www.npmjs.com/package/plugin-notion-mcp)
[![npm downloads](https://img.shields.io/npm/dm/plugin-notion-mcp.svg)](https://www.npmjs.com/package/plugin-notion-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

One command to install and configure the Notion MCP automatically.

<img width="2172" height="724" alt="image" src="https://github.com/user-attachments/assets/6172ed10-6a9b-41e9-871d-cb473167bab1" />


---

## Description

Plugin MCP is a cross-platform CLI that makes installing and managing MCP servers simple, automated, and reliable.

Instead of manually installing an MCP server, finding the configuration file of an MCP client, editing JSON configuration, setting environment variables, managing credentials, and checking whether everything was configured correctly, Plugin MCP provides a single workflow that handles the entire process.

The project currently focuses on the official Notion MCP and allows users to install and configure it with a single command:

Plugin MCP automatically detects the user's operating system and supported MCP clients, installs and configures the official Notion MCP, manages the required credentials securely, and verifies the resulting installation.
The goal is to remove the repetitive and error-prone configuration work that usually comes with setting up MCP integrations. Users should not need to know where a particular client stores its configuration, which JSON structure it expects, or how the MCP server needs to be registered. Plugin MCP handles those differences automatically.

## Features

* One-command Notion MCP installation
* Automatic MCP client detection
* Secure credential storage
* Environment verification
* Cross-platform support
* Clean uninstall

## Installation

Install the package:

```bash
npm i plugin-notion-mcp
```

Or install it globally to use the CLI directly:

```bash
npm i -g plugin-notion-mcp
```

Install and configure the Notion MCP:

```bash
plugin-mcp install notion
```

## Quick Start

Common commands for managing your Notion MCP installation.

### Inspect your environment

```bash
plugin-mcp doctor
```

Detects your platform, Node.js, npm, and supported MCP clients.

### Verify your installation

```bash
plugin-mcp verify
```

Checks that the Notion MCP installation, credentials, and client configuration are ready.

### Manage credentials

Store your Notion API key securely:

```bash
plugin-mcp login notion
```

Remove the stored credentials:

```bash
plugin-mcp logout notion
```

### Uninstall

Completely remove the Notion MCP and its configuration:

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
2. Detects supported MCP clients.
3. Installs and configures the official Notion MCP.
4. Stores credentials securely.
5. Verifies the resulting configuration.

## License

MIT License.
