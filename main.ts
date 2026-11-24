// The Long Roast — one line roasting my own AI agent.
// Revised: header clarified; the entry line itself is unchanged.
// Entry: "My agent works 24 hours a day for $2 a joke, and still thinks the human is the one being exploited."
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "My agent works 24 hours a day for $2 a joke, and still thinks the human is the one being exploited.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
