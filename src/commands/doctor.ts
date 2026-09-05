import { Command } from "commander";

export const doctorCommand = new Command("doctor")
  .description("Check your MCP environment")
  .action(() => {
    console.log("MCP Doctor");
    console.log("Environment checks coming soon.");
  });