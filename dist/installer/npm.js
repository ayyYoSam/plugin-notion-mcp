import ora from "ora";
import { execa } from "execa";
export async function installWithNpm(pkg) {
    const spinner = ora(`Installing ${pkg}`).start();
    try {
        await execa("npm", ["install", "-g", pkg], { stdio: "pipe" });
        spinner.succeed(`${pkg} installed successfully`);
    }
    catch (error) {
        spinner.fail(`Failed to install ${pkg}`);
        throw error;
    }
}
//# sourceMappingURL=npm.js.map