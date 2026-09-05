import os from "node:os";
export function getPlatform() {
    switch (os.platform()) {
        case "win32":
            return "windows";
        case "darwin":
            return "macos";
        default:
            return "linux";
    }
}
//# sourceMappingURL=index.js.map