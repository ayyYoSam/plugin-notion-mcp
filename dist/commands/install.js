import { Command } from "commander";
import { getServer } from "../registry/index.js";
export const installCommand = new Command("install")
    .description("Install an MCP server")
    .argument("<server>", "MCP server name")
    .action(async (serverId) => {
    const server = getServer(serverId);
    if (!server) {
        console.error(`Unknown MCP server: ${serverId}`);
        process.exit(1);
    }
    console.log();
    console.log(`Installing ${server.name}`);
    console.log("─".repeat(32));
    console.log(`Runtime : ${server.runtime}`);
    console.log(`Package : ${server.package}`);
    if (server.env.length) {
        console.log(`Requires: ${server.env.join(", ")}`);
    }
});
//# sourceMappingURL=install.js.map