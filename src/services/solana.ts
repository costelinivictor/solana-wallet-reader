import { Connection, PublicKey } from "@solana/web3.js";

export async function fetchTokenAccounts(publicKey: PublicKey) {
	if (!publicKey) throw new Error("Invalid public key");

	const connection = new Connection(
		"https://solana-mainnet.g.alchemy.com/v2/zP7HOW8m818eK85wM5kjJnXBNXq85WVM"
	);

	const response = await connection.getParsedTokenAccountsByOwner(publicKey, {
		programId: new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"),
	});

	return response.value;
}
