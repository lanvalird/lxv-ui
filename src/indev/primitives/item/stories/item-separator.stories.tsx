import type { Meta, StoryObj } from "@storybook/react-vite";

import { ItemSeparator } from "../item-separator";
import { Item } from "../item";
import { ItemContent } from "../item-content";
import { ItemTitle } from "../item-title";

const meta: Meta<typeof ItemSeparator> = {
  title: "Components/ItemSeparator",
  component: ItemSeparator,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ItemSeparator>;

export const Default: Story = {
  render: () => (
    <div className="w-80 space-y-2">
      <Item>
        <ItemContent>
          <ItemTitle>First item</ItemTitle>
        </ItemContent>
      </Item>
      <ItemSeparator />
      <Item>
        <ItemContent>
          <ItemTitle>Second item</ItemTitle>
        </ItemContent>
      </Item>
      <ItemSeparator />
      <Item>
        <ItemContent>
          <ItemTitle>Third item</ItemTitle>
        </ItemContent>
      </Item>
    </div>
  ),
};
