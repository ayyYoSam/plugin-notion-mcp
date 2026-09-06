import { execa } from "execa";
export async function uninstallPackage(packageName) {
    try {
        await execa("npm", [
            "uninstall",
            "-g",
            packageName
        ]);
        return true;
    }
    catch {
        return false;
    }
}
//# sourceMappingURL=package.js.map