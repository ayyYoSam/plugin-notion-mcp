import { execa } from "execa";

export async function uninstallPackage(
  packageName: string
) {
  try {
    await execa("npm", [
      "uninstall",
      "-g",
      packageName
    ]);

    return true;

  } catch {
    return false;
  }
}