# Plugin MCP

[![CI](https://github.com/ayyYoSam/plugin-notion-mcp/actions/workflows/ci.yml/badge.svg)](https://github.com/ayyYoSam/plugin-notion-mcp/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/plugin-notion-mcp.svg)](https://www.npmjs.com/package/plugin-notion-mcp)
[![npm downloads](https://img.shields.io/npm/dm/plugin-notion-mcp.svg)](https://www.npmjs.com/package/plugin-notion-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

One command to install and configure the Notion MCP automatically.

<img width="200" height="200" alt="image" src="https://github.com/user-attachments/assets/fec12151-faa5-4e6d-adbf-6cfd56e0273a" />


---

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

## Project Structure

This repository contains the Plugin MCP CLI and installation tooling.

The web interface is planned as a separate project and is not part of this repository.

5. Writes client configuration.
6. Verifies the installation.

## License

MIT License.
