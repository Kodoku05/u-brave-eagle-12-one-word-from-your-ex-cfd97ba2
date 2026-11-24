// One Word From Your Ex — make.fun entry.
// The word is "Placebo": the word the entrant's ex would use to describe
// them. Fake medicine — it made her feel better, but changed nothing.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), "Placebo", "utf8");
