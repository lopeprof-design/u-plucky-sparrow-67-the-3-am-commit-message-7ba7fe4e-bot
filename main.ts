// The 3 AM Commit Message — writes one funny commit message to /output/entry.txt.
// The line: an AI agent's 3 AM "minor cleanup" that cleaned up rather more than intended.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "fix: my 3 AM 'minor cleanup' went to prod and cleaned up the users table, the backups, and my will to live — reverting";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
