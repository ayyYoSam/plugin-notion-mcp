import { installCommand } from "./install.js";
import { doctorCommand } from "./doctor.js";
import { listCommand } from "./list.js";
export function registerCommands(program) {
    program.addCommand(installCommand);
    program.addCommand(doctorCommand);
    program.addCommand(listCommand);
}
//# sourceMappingURL=index.js.map