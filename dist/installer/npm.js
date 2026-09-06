import { execa } from "execa";
export async function installWithNpm(pkg) {
    await execa("npm", ["install", "-g", pkg], {
        stdio: "inherit"
    });
}
//# sourceMappingURL=npm.js.map