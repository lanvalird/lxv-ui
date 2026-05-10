import type { Meta, StoryObj } from "@storybook/react-vite";

import { ItemActions } from "../item-actions";
import { Button } from "@/indev/primitives/button";
import { HeartIcon, PenLineIcon, TrashIcon } from "lucide-react";

const meta: Meta<typeof ItemActions> = {
  title: "Components/ItemActions",
  component: ItemActions,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ItemActions>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Button size="sm">Approve</Button>
        <Button size="sm" variant="outline">
          Reject
        </Button>
      </>
    ),
  },
};

export const WithIcons: Story = {
  args: {
    children: (
      <>
        <Button size="icon" variant="ghost">
          <HeartIcon />
        </Button>
        <Button size="icon" variant="ghost">
          <PenLineIcon />
        </Button>
        <Button size="icon" variant="ghost">
          <TrashIcon />
        </Button>
      </>
    ),
  },
};
