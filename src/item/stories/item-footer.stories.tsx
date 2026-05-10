import type { Meta, StoryObj } from "@storybook/react-vite";

import { ItemFooter } from "../item-footer";
import { Badge } from "@/indev/primitives/badge";

const meta: Meta<typeof ItemFooter> = {
  title: "Components/Item/ItemFooter",
  component: ItemFooter,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ItemFooter>;

export const Default: Story = {
  args: {
    children: (
      <>
        <span>Last edited: 2 hours ago</span>
        <Badge variant="outline">Draft</Badge>
      </>
    ),
  },
};
