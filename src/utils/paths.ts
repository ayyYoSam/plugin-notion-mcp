import os from "node:os";
import path from "node:path";
import { getPlatform } from "../platforms/index.js";

export function getHomeDir() {
  return os.homedir();
}

export function getAppDataDir() {
  const platform = getPlatform();

  if (platform === "windows") {
    return process.env.APPDATA || path.join(getHomeDir(), "AppData", "Roaming");
  }

  if (platform === "macos") {
    return path.join(getHomeDir(), "Library", "Application Support");
  }

  return path.join(getHomeDir(), ".config");
}