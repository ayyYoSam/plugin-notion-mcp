import { execa } from "execa";
export async function commandExists(command) {
    try {
        await execa(command, ["--version"]);
        return true;
    }
    catch {
        return false;
    }
}
export async function commandVersion(command) {
    try {
        const { stdout } = await execa(command, ["--version"]);
        return stdout.split("\n")[0];
    }
    catch {
        return null;
    }
}
//# sourceMappingURL=exec.js.map