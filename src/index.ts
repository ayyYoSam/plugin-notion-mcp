#!/usr/bin/env node

import { Command } from "commander";
import { registerCommands } from "./commands/index.js";

const program = new Command();

program
  .name("plugin")
  .description("Install and configure MCP servers in one command.")
  .version("0.1.0");

registerCommands(program);

program.parse();