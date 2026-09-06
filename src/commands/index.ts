import type { Command } from "commander";

import { installCommand } from "./install.js";
import { doctorCommand } from "./doctor.js";
import { listCommand } from "./list.js";
import { loginCommand } from "./login.js";
import { logoutCommand } from "./logout.js";
import { verifyCommand } from "./verify.js";

export function registerCommands(program: Command) {
  program.addCommand(installCommand);
  program.addCommand(doctorCommand);
  program.addCommand(listCommand);
  program.addCommand(loginCommand);
  program.addCommand(logoutCommand);
  program.addCommand(verifyCommand);
}