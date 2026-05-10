import type { Meta, StoryObj } from "@storybook/react-vite";

import { ItemTitle } from "../item-title";
import { Badge } from "@/indev/primitives/badge";

const meta: Meta<typeof ItemTitle> = {
  title: "Components/Item/ItemTitle",
  component: ItemTitle,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ItemTitle>;

export const Default: Story = {
  args: {
    children: "Project Phoenix",
  },
};

export const WithBadge: Story = {
  args: {
    children: (
      <>
        Main dashboard
        <Badge variant="secondary">New</Badge>
      </>
    ),
  },
};
