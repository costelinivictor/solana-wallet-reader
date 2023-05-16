import React, { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import {
	AccountInfo,
	Connection,
	ParsedAccountData,
	PublicKey,
} from "@solana/web3.js";
import { fetchTokenAccounts } from "~/services/solana";

type TokenAccountsType = {
	pubkey: PublicKey;
	account: AccountInfo<ParsedAccountData>;
}[];

const Table = () => {
	const { wallet, publicKey, connecting } = useWallet();

	const [tokenAccounts, setTokenAccounts] = useState([] as TokenAccountsType);

	useEffect(() => {
		if (!publicKey) {
			setTokenAccounts([]);
			return;
		}

		fetchTokenAccounts(publicKey).then((response) => {
			setTokenAccounts(response);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [publicKey]);

	if (!wallet) {
		return (
			<div>
				<p className="text-center">No wallet connected.</p>
				<p className="text-center">
					Click on &quot;Connect wallet&quot; to use the app.
				</p>
			</div>
		);
	}

	if (connecting || !tokenAccounts.length) {
		<div>
			<p className="text-center">Connecting wallet, please wait...</p>
		</div>;
	}

	return (
		<div>
			<div className="bg-white w-36 p-4 grid place-items-center rounded-t-xl border-b-4 border-emerald-700">
				<span>Tokens</span>
			</div>
			<div className="bg-white rounded-b-xl rounded-e-xl p-8">
				<table>
					<thead>
						<tr className="font-bold">
							<th className="px-8 py-4">Pubkey</th>
							<th>Mint address</th>
							<th>Amount</th>
						</tr>
					</thead>
					<tbody>
						{tokenAccounts.map((tokenAccount) => (
							<tr
								key={tokenAccount.pubkey.toString()}
								className="border-b"
							>
								<td
									className="px-8 py-4"
									title={tokenAccount.pubkey.toString()}
								>
									{tokenAccount.pubkey.toString()}
								</td>
								<td>
									{tokenAccount.account.data.parsed.info.mint}
								</td>
								<td className="text-right">
									{
										tokenAccount.account.data.parsed.info
											.tokenAmount.uiAmountString
									}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Table;
