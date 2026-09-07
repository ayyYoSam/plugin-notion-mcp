import { execa } from "execa";
import { detectClients } from "../clients/index.js";
import { secrets } from "../secrets/index.js";
import { hasNotionServer } from "../clients/claude-desktop.js";
export async function verifyPackage() {
    try {
        await execa("npm", ["list", "-g", "@notionhq/notion-mcp-server"]);
        return true;
    }
    catch {
        return false;
    }
}
export async function verifyCredentials() {
    return ((await secrets.get("plugin-notion-mcp", "notion")) !== null);
}
export async function verifyClients() {
    const clients = await detectClients();
    return clients.map(client => ({
        ...client,
        valid: client.id === "claude-desktop"
            ? hasNotionServer()
            : client.hasConfig
    }));
}
//# sourceMappingURL=checks.js.map