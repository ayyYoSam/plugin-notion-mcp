import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";

export async function askEnv(name: string) {
  const rl = createInterface({
    input: stdin,
    output: stdout
  });

  const value = await rl.question(`${name}: `);

  rl.close();

  return value.trim();
}