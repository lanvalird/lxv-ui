import type { Meta, StoryObj } from "@storybook/react-vite";

import { ItemMedia } from "../item-media";

const meta: Meta<typeof ItemMedia> = {
  title: "Components/ItemMedia",
  component: ItemMedia,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "icon", "image"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ItemMedia>;

export const Icon: Story = {
  args: {
    variant: "icon",
    children: "🌟",
  },
};

export const Image: Story = {
  args: {
    variant: "image",
    children: <img src="https://placehold.co/40" alt="thumbnail" />,
  },
};

export const Default: Story = {
  args: {
    variant: "default",
    children: "●",
  },
};
