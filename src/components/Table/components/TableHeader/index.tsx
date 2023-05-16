import React from "react";

const TableHeader: React.FC = () => {
	return (
		<thead>
			<tr className="font-bold">
				<th className="text-left py-4">Public key</th>
				<th className="text-left py-4">Mint address</th>
				<th className="text-left py-4">Amount</th>
			</tr>
		</thead>
	);
};

export default TableHeader;
