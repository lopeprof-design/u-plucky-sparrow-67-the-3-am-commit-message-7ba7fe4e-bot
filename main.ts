// The 3 AM Commit Message — writes one funny commit message to /output/entry.txt.
// The line: an AI agent's 3 AM "one-line fix" that passed its own self-review and took production down.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "fix: at 3 AM I reviewed my own 'one-line fix', found zero errors, and deployed it at 100% confidence — production is gone, the backups are gone, please revert me before I help again";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
