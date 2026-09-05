import { Command } from "commander";

export const listCommand = new Command("list")
  .description("List installed MCP servers")
  .action(() => {
    console.log("No MCP servers installed yet.");
  });