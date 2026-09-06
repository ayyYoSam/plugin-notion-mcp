#!/usr/bin/env node
import { Command } from "commander";
import { registerCommands } from "./commands/index.js";
import { startServer } from "./server/index.js";
const program = new Command();
program
    .name("plugin-mcp")
    .description("Official Notion MCP installer.")
    .version("1.0.0");
registerCommands(program);
const hasCommand = process.argv.length > 2;
if (hasCommand) {
    program.parse(process.argv);
}
else {
    await startServer();
}
//# sourceMappingURL=index.js.map