// Monday, Reviewed in One Line — entry writer
// Final: Friday's problems in a fake mustache — concrete meeting + inbox,
// turn up front, line a coworker would repeat on Tuesday.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Monday was just Friday's problems in a fake mustache, asking for a status update in a 9am 'quick sync' that ran two hours while my inbox hit 47 unread.";

if (line.length < 1 || line.length > 200 || line.includes("\n")) {
  throw new Error(`entry line out of gate: ${line.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
