#!/usr/bin/env node
import { Command } from "commander";
import { registerCommands } from "./commands/index.js";
const program = new Command();
program
    .name("plugin-mcp")
    .description("Official Notion MCP installer.")
    .version("1.0.0");
registerCommands(program);
program.parse();
//# sourceMappingURL=index.js.map