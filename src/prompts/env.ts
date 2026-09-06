import { stdin, stdout } from "node:process";

export async function askEnv(name: string): Promise<string> {
  return new Promise((resolve, reject) => {
    stdout.write(`${name}: `);

    stdin.setEncoding("utf8");
    stdin.setRawMode?.(true);
    stdin.resume();

    let value = "";

    const cleanup = () => {
      stdin.setRawMode?.(false);
      stdin.pause();
      stdin.removeListener("data", onData);
    };

    const onData = (key: string) => {
      switch (key) {
        case "\r":
        case "\n":
          stdout.write("\n");
          cleanup();
          resolve(value.trim());
          return;

        case "\u0003":
          stdout.write("\n");
          cleanup();
          reject(new Error("Cancelled by user"));
          return;

        case "\b":
        case "\x7f":
          if (value.length) {
            value = value.slice(0, -1);
            stdout.write("\b \b");
          }
          return;

        default:
          value += key;
          stdout.write("*");
      }
    };

    stdin.on("data", onData);
  });
}