import { execa } from "execa";
import { detectClients } from "../clients/index.js";
import { secrets } from "../secrets/index.js";
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
export function verifyClients() {
    return detectClients();
}
//# sourceMappingURL=checks.js.map