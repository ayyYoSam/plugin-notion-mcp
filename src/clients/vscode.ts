import fs from "node:fs";
import path from "node:path";
import { execa } from "execa";

import type { ClientDetection } from "./types.js";

export async function detectVSCode(): Promise<ClientDetection> {
  const configPath = path.join(
    process.cwd(),
    ".vscode",
    "mcp.json"
  );

  let detected: boolean;

  try {
    await execa("code", ["--version"]);
    detected = true;
  } catch {
    detected = false;
  }

  return {
    id: "vscode",
    name: "VS Code",
    method: "config",
    detected,
    configPath,
    hasConfig: fs.existsSync(configPath),
    scope: "project"
  };
}