import { Command } from "commander";

import {
  verifyPackage,
  verifyCredentials,
  verifyClients
} from "../verify/checks.js";

export const verifyCommand = new Command("verify")
  .description("Verify your Notion MCP installation")
  .action(async () => {
    console.log();
    console.log("Notion MCP Verification");
    console.log("─".repeat(32));
    console.log();

    const packageInstalled = await verifyPackage();

    console.log(
      `${packageInstalled ? "✔" : "✖"} Notion MCP package`
    );

    const credentials = await verifyCredentials();

    console.log(
      `${credentials ? "✔" : "✖"} Credentials`
    );

    console.log();
    console.log("Clients");
    console.log("─".repeat(32));

    const clients = await verifyClients();

    let configured = 0;

    for (const client of clients) {
      if (!client.detected) {
        console.log(`✖ ${client.name} (not detected)`);
        continue;
      }

      console.log(
        `${client.valid ? "✔" : "✖"} ${client.name}`
      );

      if (client.valid) {
        configured++;
      }
    }

    console.log();

    if (
      packageInstalled &&
      credentials &&
      configured > 0
    ) {
      console.log("Ready to use.");
      return;
    }

    console.log("Run:");
    console.log();
    console.log("plugin-mcp install notion");
    process.exit(1);
  });