import "dotenv/config";
import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { getTools } from "./agent.js";

const tools = await getTools();

const { text } = await generateText({
  model: google("gemini-2.5-flash"),
  system:
    "You are an onchain AI agent. Always use your blockchain tools to answer.",
  tools,
  maxSteps: 3,
  prompt: "What is your wallet address and current SOL balance on Solana devnet?",
});

console.log(text);
