import "dotenv/config";
import { AgentKit, SolanaKeypairWalletProvider } from "@coinbase/agentkit";
// @ts-ignore
import { x402ActionProvider } from "@coinbase/agentkit";
import { getVercelAITools } from "@coinbase/agentkit-vercel-ai-sdk";

export async function getWalletProvider() {
  return SolanaKeypairWalletProvider.fromNetwork(
    "solana-devnet",
    process.env.WALLET_PRIVATE_KEY!
  );
}
 
export async function getTools({
  includeX402 = false,
  walletProvider,
}: {
  includeX402?: boolean;
  walletProvider?: SolanaKeypairWalletProvider;
} = {}) {
  const wp = walletProvider ?? (await getWalletProvider());

  const agentKit = await AgentKit.from({
    walletProvider: wp,
    actionProviders: includeX402 ? [x402ActionProvider()] : [],
  });

  const tools = getVercelAITools(agentKit);

  console.log("AgentKit connected. Tools ready.");

  return tools;
} 
