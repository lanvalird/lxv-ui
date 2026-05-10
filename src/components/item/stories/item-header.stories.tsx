import type { Meta, StoryObj } from "@storybook/react-vite";

import { ItemHeader } from "../item-header";
import { Button } from "@/indev/primitives/button";

const meta: Meta<typeof ItemHeader> = {
  title: "Components/Item/ItemHeader",
  component: ItemHeader,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ItemHeader>;

export const Default: Story = {
  args: {
    children: (
      <>
        <span className="font-semibold">Profile</span>
        <Button variant="ghost" size="sm">
          Edit
        </Button>
      </>
    ),
  },
};
