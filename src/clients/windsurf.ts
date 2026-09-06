import fs from "node:fs";
import path from "node:path";

import type { ClientDetection } from "./types.js";
import { getAppDataDir } from "../utils/paths.js";

export function detectWindsurf(): ClientDetection {
  const configPath = path.join(
    getAppDataDir(),
    "Windsurf",
    "User",
    "mcp_config.json"
  );

  return {
    id: "windsurf",
    name: "Windsurf",

    detected: fs.existsSync(path.dirname(configPath)),

    method: "config",

    configPath,

    hasConfig: fs.existsSync(configPath),

    scope: "global"
  };
}