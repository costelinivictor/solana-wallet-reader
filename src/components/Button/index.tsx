import React from "react";
import { IBM_Plex_Mono } from "next/font/google";
const ibmPlexMono = IBM_Plex_Mono({
	subsets: ["latin"],
	weight: ["400", "600"],
});

interface Props {
	text: string;
	onClick?: () => void;
}

const Button: React.FC<Props> = ({ text, onClick }) => {
	return (
		<button
			className={`${ibmPlexMono.className} bg-green-300 border-2 border-black rounded px-4 py-2 shadow-2xl transition-all hover:bg-green-500 font-bold`}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default Button;
