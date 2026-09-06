import fs from "node:fs/promises";
import path from "node:path";
import { readJson, writeJson } from "../config/json.js";
import { createBackup } from "../config/backup.js";
export async function ensureConfig(file) {
    await fs.mkdir(path.dirname(file), {
        recursive: true
    });
    await createBackup(file);
    const config = await readJson(file);
    config.mcpServers ??= {};
    await writeJson(file, config);
    return file;
}
//# sourceMappingURL=fix.js.map