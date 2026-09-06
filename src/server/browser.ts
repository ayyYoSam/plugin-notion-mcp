import open from "open";

export async function openBrowser(url: string) {
  await open(url);
}