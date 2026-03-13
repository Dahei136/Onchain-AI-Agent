/**
 * Interactive Onchain AI Agent
 *
 * Chat with your agent in the terminal.
 *
 * Run:
 * npm start
 */

import "dotenv/config";
import * as readline from "readline";
import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { getTools } from "./agent.js";
import { getTransactions } from "./memory.js";

const tools = await getTools();

console.log("🚀 Autonomous Onchain AI Agent");
console.log("🤖 Agent ready.");
console.log('Try: "What is your wallet address?"');
console.log('Try: "Show transactions"');
console.log('Type "exit" to quit.\n');

console.log("────────────────────────────────────────\n");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ask = () => {
  rl.question("You: ", async (input) => {
    const message = input.trim();

    if (!message) return ask();

    if (message.toLowerCase() === "exit") {
      console.log("\n👋 Goodbye!");
      rl.close();
      return;
    }

    // transaction history
    if (message.toLowerCase().includes("transactions")) {
      console.log("\n📜 Transaction history:\n");
      console.log(getTransactions());
      console.log("");
      return ask();
    }

    try {
      const { text } = await generateText({
        model: google("gemini-2.5-flash"),
        system:
          "You are an onchain AI agent. You have tools to interact with the blockchain and make HTTP requests. Always use tools when possible.",
        tools,
        maxSteps: 10,
        prompt: message,
      });

      console.log("\nAgent:", text, "\n");
    } catch (err) {
      console.error("\n⚠️ Error:", err, "\n");
    }

    ask();
  });
};

ask();
