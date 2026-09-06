import { installCommand } from "./install.js";
import { doctorCommand } from "./doctor.js";
import { listCommand } from "./list.js";
import { loginCommand } from "./login.js";
import { logoutCommand } from "./logout.js";
export function registerCommands(program) {
    program.addCommand(installCommand);
    program.addCommand(doctorCommand);
    program.addCommand(listCommand);
    program.addCommand(loginCommand);
    program.addCommand(logoutCommand);
}
//# sourceMappingURL=index.js.map