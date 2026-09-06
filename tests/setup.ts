import { beforeEach } from "vitest";
import { mkdtemp, rm } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";

export let TEST_ROOT = "";

beforeEach(async () => {
  if (TEST_ROOT) {
    await rm(TEST_ROOT, {
      recursive: true,
      force: true
    });
  }

  TEST_ROOT = await mkdtemp(
    join(tmpdir(), "plugin-notion-mcp-")
  );
});