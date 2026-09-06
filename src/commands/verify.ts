import { Command } from "commander";

import {
  verifyPackage,
  verifyCredentials
} from "../verify/checks.js";

import { detectClients } from "../clients/index.js";

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

    const clients = await detectClients();

    let configured = 0;

    for (const client of clients) {
      const ok = client.detected && client.hasConfig;

      console.log(`${ok ? "✔" : "✖"} ${client.name}`);

      if (ok) configured++;
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
  });