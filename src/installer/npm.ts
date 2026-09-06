import { execa } from "execa";

export async function installWithNpm(pkg: string) {
  await execa(
    "npm",
    ["install", "-g", pkg],
    {
      stdio: "inherit"
    }
  );
}