import { createServer } from "http";

const PORT = 3402;

const server = createServer((req, res) => {
  if (req.url !== "/weather") {
    res.writeHead(404).end();
    return;
  }

  if (!req.headers["x-payment"]) {
    res.writeHead(402);
    res.end("Payment required");
    return;
  }

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      weather: "sunny",
      location: "Solana Devnet",
    })
  );
});

server.listen(PORT, () => {
  console.log("x402 server running");
});
