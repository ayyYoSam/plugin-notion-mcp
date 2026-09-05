import fs from "node:fs/promises";
import path from "node:path";

export async function readJson(file: string) {
  try {
    const content = await fs.readFile(file, "utf8");
    return JSON.parse(content);
  } catch {
    return {};
  }
}

export async function writeJson(file: string, data: unknown) {
  await fs.mkdir(path.dirname(file), {
    recursive: true
  });

  await fs.writeFile(
    file,
    JSON.stringify(data, null, 2)
  );
}