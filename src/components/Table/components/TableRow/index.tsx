import React from "react";
import { AccountInfo, ParsedAccountData, PublicKey } from "@solana/web3.js";

export interface Props {
	tokenAccount: {
		pubkey: PublicKey;
		account: AccountInfo<ParsedAccountData>;
	};
}

const TableRow: React.FC<Props> = ({ tokenAccount }) => {
	return (
		<tr key={tokenAccount.pubkey.toString()} className="border-b text-left">
			<td className="pr-12 py-4" title={tokenAccount.pubkey.toString()}>
				{tokenAccount.pubkey.toString()}
			</td>
			<td className="pr-12 py-4">
				{tokenAccount.account.data.parsed.info.mint}
			</td>
			<td className="text-right pr-12 py-4">
				{
					tokenAccount.account.data.parsed.info.tokenAmount
						.uiAmountString
				}
			</td>
		</tr>
	);
};

export default TableRow;
