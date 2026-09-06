import { createBackup } from "../config/backup.js";
import { readJson, writeJson } from "../config/json.js";
export async function removeServer(configPath, serverId) {
    const config = await readJson(configPath);
    if (!config || typeof config !== "object") {
        return false;
    }
    if (!config.mcpServers?.[serverId]) {
        return false;
    }
    await createBackup(configPath);
    delete config.mcpServers[serverId];
    await writeJson(configPath, config);
    return true;
}
//# sourceMappingURL=config.js.map