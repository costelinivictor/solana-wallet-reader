import React from "react";
import { Meta } from "@storybook/react";

import Header from "./index";

export default {
	title: "Header",
	component: Header,
} as Meta;

export const Default = () => {
	return <Header />;
};
