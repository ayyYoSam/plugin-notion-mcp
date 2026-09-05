import { Command } from "commander";

export const installCommand = new Command("install")
  .description("Install an MCP server")
  .argument("<server>", "MCP server name")
  .action((server: string) => {
    console.log(`Installing ${server}...`);
  });