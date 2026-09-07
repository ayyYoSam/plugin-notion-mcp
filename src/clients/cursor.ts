import fs from "node:fs";
import path from "node:path";
import { execa } from "execa";

import type { ClientDetection } from "./types.js";

const CURSOR_DIR = ".cursor";
const CONFIG_FILE = "mcp.json";

export interface CursorConfig {
  mcpServers?: Record<string, unknown>;
  [key: string]: unknown;
}

export function getCursorConfigPath(): string {
  return path.join(
    process.env.USERPROFILE ?? "",
    CURSOR_DIR,
    CONFIG_FILE
  );
}

export function getCursorDir(): string {
  return path.dirname(getCursorConfigPath());
}

export async function detectCursor(): Promise<ClientDetection> {
  const configPath = getCursorConfigPath();

  let detected: boolean;

  try {
    await execa("cursor", ["--version"]);
    detected = true;
  } catch {
    detected = fs.existsSync(getCursorDir());
  }

  return {
    id: "cursor",
    name: "Cursor",
    method: "config",
    detected,
    configPath,
    hasConfig: fs.existsSync(configPath),
    scope: "global"
  };
}

export function readCursorConfig(): CursorConfig {
  const configPath = getCursorConfigPath();

  if (!fs.existsSync(configPath)) {
    return {};
  }

  const content = fs.readFileSync(configPath, "utf8");

  if (!content.trim()) {
    return {};
  }

  try {
    return JSON.parse(content) as CursorConfig;
  } catch {
    throw new Error("Invalid Cursor configuration.");
  }
}

export function backupCursorConfig(): string | null {
  const configPath = getCursorConfigPath();

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

export function writeCursorConfig(config: CursorConfig): void {
  const configPath = getCursorConfigPath();

  fs.mkdirSync(getCursorDir(), { recursive: true });

  backupCursorConfig();

  fs.writeFileSync(
    configPath,
    `${JSON.stringify(config, null, 2)}\n`,
    "utf8"
  );
}

export function mergeNotionCursorServer(server: unknown): CursorConfig {
  const config = readCursorConfig();

  config.mcpServers ??= {};
  config.mcpServers.notion = server;

  return config;
}

export function removeNotionCursorServer(): CursorConfig {
  const config = readCursorConfig();

  if (config.mcpServers) {
    delete config.mcpServers.notion;
  }

  return config;
}

export function hasCursorNotionServer(): boolean {
  return Boolean(readCursorConfig().mcpServers?.notion);
}

export function uninstallCursorNotionServer(): void {
  writeCursorConfig(removeNotionCursorServer());
}