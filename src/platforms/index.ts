import os from "node:os";

export type Platform = "windows" | "linux" | "macos";

export function getPlatform(): Platform {
  switch (os.platform()) {
    case "win32":
      return "windows";
    case "darwin":
      return "macos";
    default:
      return "linux";
  }
}