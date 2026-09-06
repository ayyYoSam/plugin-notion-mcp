import fs from "node:fs/promises";
export async function createBackup(file) {
    try {
        await fs.access(file);
        await fs.copyFile(file, `${file}.bak`);
        return true;
    }
    catch {
        return false;
    }
}
//# sourceMappingURL=backup.js.map