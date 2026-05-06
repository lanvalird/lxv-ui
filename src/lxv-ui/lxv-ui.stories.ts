import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import { LxvUi } from ".";

const meta: Meta = {
  title: "EggHunting/LxvUi",
  component: LxvUi,
  parameters: {
    layout: "center",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Invert: Story = {
  args: { invert: true },
};

export const SizeSmall: Story = {
  args: { size: "small" },
};

export const SizeMedium: Story = {
  args: { size: "medium" },
};

export const SizeLarge: Story = {
  args: { size: "large" },
};

export const OnClick: Story = {
  args: { onClick: () => alert("hello!") },
};
