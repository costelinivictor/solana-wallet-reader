import React from "react";
import { PublicKey, AccountInfo, ParsedAccountData } from "@solana/web3.js";

import TableRow, { Props } from "./index";
import { Meta, Story } from "@storybook/react";

export default {
	title: "TableRow",
	component: TableRow,
} as Meta;

const tokenAccount: {
	pubkey: PublicKey;
	account: AccountInfo<ParsedAccountData>;
} = {
	pubkey: new PublicKey("2bPLrBSxh5tLtoYz8vQX5wWEA54u5cr3wzj5nR3WJtyC"),
	account: {
		lamports: 42,
		data: {
			parsed: {
				info: {
					isNative: false,
					mint: "2bPLrBSxh5tLtoYz8vQX5wWEA54u5cr3wzj5nR3WJtyC",
					owner: "owner",
					tokenAmount: {
						amount: "42",
						decimals: 9,
						uiAmount: 0.000000042,
						uiAmountString: "0.000000042",
					},
				},
				type: "account",
			},
			program: "spl-token",
			space: 165,
		},
		owner: new PublicKey("11111111111111111111111111111111"),
		executable: false,
		rentEpoch: 123,
	},
};

export const Default: Story<Props> = (args) => (
	<TableRow tokenAccount={tokenAccount} />
);
