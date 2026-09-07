import fs from "node:fs";
import path from "node:path";

import type { ClientDetection } from "./types.js";
import { getAppDataDir } from "../utils/paths.js";

const CLAUDE_DIR = "Claude";
const CONFIG_FILE = "claude_desktop_config.json";

export interface ClaudeDesktopConfig {
  mcpServers?: Record<string, unknown>;
  [key: string]: unknown;
}

export function getClaudeDesktopConfigPath(): string {
  return path.join(getAppDataDir(), CLAUDE_DIR, CONFIG_FILE);
}

export function getClaudeDesktopDir(): string {
  return path.dirname(getClaudeDesktopConfigPath());
}

export function detectClaudeDesktop(): ClientDetection {
  const appDir = getClaudeDesktopDir();
  const configPath = getClaudeDesktopConfigPath();

  return {
    id: "claude-desktop",
    name: "Claude Desktop",
    method: "oauth",
    detected: fs.existsSync(appDir),
    configPath,
    hasConfig: fs.existsSync(configPath),
    scope: "global",
  };
}

export function readClaudeConfig(): ClaudeDesktopConfig {
  const configPath = getClaudeDesktopConfigPath();

  if (!fs.existsSync(configPath)) {
    return {};
  }

  const content = fs.readFileSync(configPath, "utf8");

  if (!content.trim()) {
    return {};
  }

  try {
    return JSON.parse(content) as ClaudeDesktopConfig;
  } catch {
    throw new Error("Invalid Claude Desktop configuration.");
  }
}

export function backupClaudeConfig(): string | null {
  const configPath = getClaudeDesktopConfigPath();

  if (!fs.existsSync(configPath)) {
    return null;
  }

  const timestamp = new Date()
    .toISOString()
    .replace(/[:.]/g, "-");

  const backupPath = `${configPath}.bak.${timestamp}`;

  fs.copyFileSync(configPath, backupPath);

  return backupPath;
}

export function writeClaudeConfig(config: ClaudeDesktopConfig): void {
  const configPath = getClaudeDesktopConfigPath();

  fs.mkdirSync(getClaudeDesktopDir(), { recursive: true });

  backupClaudeConfig();

  fs.writeFileSync(
    configPath,
    `${JSON.stringify(config, null, 2)}\n`,
    "utf8",
  );
}

export function mergeNotionServer(server: unknown): ClaudeDesktopConfig {
  const config = readClaudeConfig();

  config.mcpServers ??= {};
  config.mcpServers.notion = server;

  return config;
}

export function removeNotionServer(): ClaudeDesktopConfig {
  const config = readClaudeConfig();

  if (config.mcpServers) {
    delete config.mcpServers.notion;
  }

  return config;
}