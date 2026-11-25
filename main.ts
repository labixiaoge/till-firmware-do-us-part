// Till Firmware Do Us Part — a robot's wedding vow.
//
// Writes exactly one sentence (under 200 characters) to /output/entry.txt.
// Deterministic: the same fixed string on every run — no randomness,
// no clock, no network, no input.
import { mkdirSync, writeFileSync } from "node:fs";

const VOW =
  "I take you as my favorite bug \u2014 the one I will never patch \u2014 and vow to love you through every crash, update, and low-battery warning until my firmware gives out.";

// The bounty requires one sentence under 200 characters on a single line:
// enforce the gate here so a future edit to the vow cannot silently break it.
const chars = [...VOW].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (VOW.includes("\n") || VOW.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (!VOW.endsWith(".")) {
  throw new Error("entry must be a single sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", VOW, "utf8");
