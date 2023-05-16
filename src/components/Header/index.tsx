import React from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

import Button from "../Button";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

const Header = () => {
	const { wallet, disconnect } = useWallet();
	const { setVisible: setIsWalletModalVisible } = useWalletModal();

	return (
		<div className="flex items-center justify-between py-4 px-8 border border-slate-300">
			<h1 className="font-bold text-2xl">Wallet Reader</h1>
			{wallet ? (
				<Button
					onClick={disconnect}
					text={`Disconnect ${wallet.adapter.name} wallet`}
				/>
			) : (
				<Button
					onClick={() => setIsWalletModalVisible(true)}
					text="Connect wallet"
				/>
			)}
		</div>
	);
};

export default Header;
