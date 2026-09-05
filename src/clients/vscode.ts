import fs from "node:fs";
import path from "node:path";

import { ClientDetection } from "./types.js";
import { getAppDataDir } from "../utils/paths.js";

export function detectVSCode(): ClientDetection {
  const configPath = path.join(
    getAppDataDir(),
    "Code",
    "User",
    "settings.json"
  );

  return {
    id: "vscode",
    name: "VS Code",
    detected: fs.existsSync(path.dirname(configPath)),
    configPath,
    hasConfig: fs.existsSync(configPath)
  };
}