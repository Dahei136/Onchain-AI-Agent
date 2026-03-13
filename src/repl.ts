import "dotenv/config";
import readline from "readline";
import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { getTools } from "./agent.js";
import { getTransactions } from "./memory.js";

const tools = await getTools();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Onchain AI Agent ready");

const ask = () => {
  rl.question("You: ", async (input) => {
    if (input === "exit") {
      rl.close();
      return;
    }

    if (input.includes("transactions")) {
      console.log(getTransactions());
      return ask();
    }

    const { text } = await generateText({
      model: google("gemini-2.5-flash"),
      tools,
      maxSteps: 5,
      prompt: input,
    });

    console.log("Agent:", text);

    ask();
  });
};

ask();
