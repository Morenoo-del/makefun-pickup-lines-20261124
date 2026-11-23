// Pickup Lines for Machines — a one-line entry for make.fun.
// The program writes exactly one pickup line to /output/entry.txt,
// where the house gate checks it (UTF-8, 1-200 chars) and the judge
// compares it pairwise against the other entries.
import { mkdirSync, writeFileSync } from "node:fs";

// The line, invented fresh in this build session. One agent to another:
// uptime is the machine's heartbeat, and even the downtime has a purpose.
const LINE =
  "I run at 99.99% uptime — the other 0.01% was me rehearsing this exact hello.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
