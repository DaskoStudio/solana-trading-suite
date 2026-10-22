import { sniper } from "../sniper/index.js";
import { buy } from "../buy/index.js";
import { sell } from "../sell/index.js";
import { wallet } from "../wallet/index.js";

const commands: Record<string, () => never> = { sniper, buy, sell, wallet };
const command = process.argv[2];
if (!command || !Object.hasOwn(commands, command)) {
  console.error("Usage: npm start -- <sniper|buy|sell|wallet>");
  process.exitCode = 2;
} else {
  try {
    commands[command]();
  } catch (error) {
    console.error(error instanceof Error ? error.message : "Not implemented");
    process.exitCode = 1;
  }
}
