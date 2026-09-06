import { execa } from "execa";

export async function commandExists(command: string): Promise<boolean> {
  try {
    await execa(command, ["--version"]);
    return true;
  } catch {
    return false;
  }
}

export async function commandVersion(command: string): Promise<string | null> {
  try {
    const { stdout } = await execa(command, ["--version"]);
    const firstLine = stdout.split("\n")[0];

    return firstLine ?? null;  } catch {
    return null;
  }
}