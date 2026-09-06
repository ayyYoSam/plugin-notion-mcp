import fs from "node:fs";
import path from "node:path";

import type { ClientDetection } from "./types.js";
import { getAppDataDir } from "../utils/paths.js";

export function detectClaudeDesktop(): ClientDetection {
  const appDir = path.join(getAppDataDir(), "Claude");

  const configPath = path.join(
    appDir,
    "claude_desktop_config.json"
  );

  return {
    id: "claude-desktop",
    name: "Claude Desktop",
    method: "oauth",
    detected: fs.existsSync(appDir),
    configPath,
    hasConfig: fs.existsSync(configPath),
    scope: "global"
  };
}