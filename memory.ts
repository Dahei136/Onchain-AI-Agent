import fs from "fs";

const FILE = "./data/transactions.json";

export function logTransaction(tx: any) {
  let data: any[] = [];

  if (fs.existsSync(FILE)) {
    const raw = fs.readFileSync(FILE, "utf-8");
    data = JSON.parse(raw || "[]");
  }

  data.push(tx);

  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
}

export function getTransactions() {
  if (!fs.existsSync(FILE)) return [];

  const raw = fs.readFileSync(FILE, "utf-8");

  return JSON.parse(raw || "[]");
}
