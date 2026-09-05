import { Command } from "commander";
import ora from "ora";

import { getPlatform } from "../platforms/index.js";
import { commandVersion } from "../utils/exec.js";
import { detectClients } from "../clients/index.js";

export const doctorCommand = new Command("doctor")
  .description("Check your MCP environment")
  .action(async () => {
    console.log();
    console.log("MCP Doctor");
    console.log("─".repeat(32));

    console.log(`Platform: ${getPlatform()}`);
    console.log();

    const nodeSpinner = ora("Checking Node.js").start();
    const nodeVersion = await commandVersion("node");

    if (nodeVersion) {
      nodeSpinner.succeed(`Node.js ${nodeVersion}`);
    } else {
      nodeSpinner.fail("Node.js not found");
    }

    const npmSpinner = ora("Checking npm").start();
    const npmVersion = await commandVersion("npm");

    if (npmVersion) {
      npmSpinner.succeed(`npm ${npmVersion}`);
    } else {
      npmSpinner.fail("npm not found");
    }

    console.log();
    console.log("MCP Clients");
    console.log("─".repeat(32));

    for (const client of detectClients()) {
      const icon = client.detected ? "✔" : "✖";

      console.log(`${icon} ${client.name}`);

      console.log(`  Scope : ${client.scope}`);
      console.log(`  Config: ${client.configPath}`);

      if (client.hasConfig) {
        console.log("  Status: configuration found");
      } else {
        console.log("  Status: configuration missing");
      }

      console.log();
    }
  });