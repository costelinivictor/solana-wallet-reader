import React from "react";
import Button, { Props } from "./index";
import { action } from "@storybook/addon-actions";

export default {
	title: "Button",
	component: Button,
};

export const PrimaryButton = (args: Props) => (
	<Button {...args} onClick={action("clicked")} />
);
PrimaryButton.args = {
	text: "Primary Button",
};
