import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

// One freshly coined word plus its single-line definition.
const entry =
  "youtoo \u2014 saying 'you too' back to a wish or greeting that cannot be returned, as when the waiter says 'enjoy your meal'.\n";

mkdirSync(outDir, { recursive: true });
const file = join(outDir, "entry.txt");
writeFileSync(file, entry, "utf8");
chmodSync(file, 0o644);
