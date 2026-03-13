import "dotenv/config";
import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { getTools } from "./agent.js";
import { logTransaction } from "./memory.js";

const RECIPIENT = "REPLACE_WITH_ADDRESS";

const tools = await getTools();

const { text } = await generateText({
  model: google("gemini-2.5-flash"),
  tools,
  maxSteps: 3,
  prompt: `Send 0.001 SOL to ${RECIPIENT}`,
});

console.log(text);

logTransaction({
  timestamp: new Date().toISOString(),
  action: "send_sol",
  amount: 0.001,
  to: RECIPIENT,
});
