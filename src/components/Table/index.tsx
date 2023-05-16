import React, { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { AccountInfo, ParsedAccountData, PublicKey } from "@solana/web3.js";
import { fetchTokenAccounts } from "~/services/solana";
import TableHeader from "./components/TableHeader";
import TableRow from "./components/TableRow";

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

	if (connecting || tokenAccounts.length === 0) {
		return (
			<div>
				<p className="text-center">Connecting wallet, please wait...</p>
			</div>
		);
	}

	return (
		<div>
			<div className="bg-white w-36 p-4 grid place-items-center rounded-t-xl border-b-4 border-emerald-700">
				<span>Tokens</span>
			</div>
			<div className="bg-white rounded-b-xl rounded-e-xl p-8 w-4/12 sm:w-5/12 md:w-8/12 lg:w-full overflow-x-scroll">
				<table>
					<TableHeader />
					<tbody>
						{tokenAccounts.map((tokenAccount) => (
							<TableRow
								tokenAccount={tokenAccount}
								key={tokenAccount.pubkey.toString()}
							/>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Table;
