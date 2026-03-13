# Onchain-AI-Agent
An autonomous AI agent capable of executing blockchain transactions, interacting with APIs, and paying for services using onchain payments.

This project demonstrates how large language models can act as autonomous economic agents by managing wallets, executing onchain actions, and interacting with external services.

## Features

AI agent with tool-calling  
Solana wallet integration  
Onchain transactions  
Automatic API payments via x402  
Transaction history logging  
Interactive CLI interface

## Tech Stack

Vercel AI SDK  
Google Gemini / OpenAI  
Coinbase AgentKit  
Solana Devnet  
Node.js + TypeScript

## Setup

Install dependencies

npm install

Create environment variables

cp .env.example .env

Add keys

OPENAI_API_KEY=  
GOOGLE_GENERATIVE_AI_API_KEY=  
WALLET_PRIVATE_KEY=

## Run

Create wallet

npm run wallet

Run transactions

npm run transactions

Start agent

npm start
