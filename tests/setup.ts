import { beforeEach } from "vitest";
import { rm } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";

const TEST_DIR = join(tmpdir(), "plugin-notion-mcp-tests");

beforeEach(async () => {
  await rm(TEST_DIR, {
    recursive: true,
    force: true
  });
});