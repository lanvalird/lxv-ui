import type { Meta, StoryObj } from "@storybook/react-vite";

import { ItemContent } from "../item-content";

const meta: Meta<typeof ItemContent> = {
  title: "Components/ItemContent",
  component: ItemContent,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ItemContent>;

export const Default: Story = {
  args: {
    children: (
      <>
        <div className="font-medium">Main content line</div>
        <div className="text-sm text-muted-foreground">
          Supporting description that can wrap to multiple lines.
        </div>
      </>
    ),
  },
};
