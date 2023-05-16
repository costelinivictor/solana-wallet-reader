import { Poppins } from "next/font/google";

import { WalletWrapper } from "~/components/WalletWrapper";
import Header from "~/components/Header";
import Table from "~/components/Table";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "600"],
});

export default function Home() {
	return (
		<WalletWrapper>
			<div className={poppins.className}>
				<Header />
				<div className="grid place-items-center mt-24 mx-8">
					<Table />
				</div>
			</div>
		</WalletWrapper>
	);
}
