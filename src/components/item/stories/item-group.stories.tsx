import type { Meta, StoryObj } from "@storybook/react-vite";

import { ItemGroup } from "../item-group";
import { Item } from "../item";
import { ItemMedia } from "../item-media";
import { ItemContent } from "../item-content";
import { ItemTitle } from "../item-title";

const meta: Meta<typeof ItemGroup> = {
  title: "Components/Item/ItemGroup",
  component: ItemGroup,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ItemGroup>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Item>
          <ItemMedia variant="icon">📁</ItemMedia>
          <ItemContent>
            <ItemTitle>Projects</ItemTitle>
          </ItemContent>
        </Item>
        <Item>
          <ItemMedia variant="icon">📄</ItemMedia>
          <ItemContent>
            <ItemTitle>Readme.md</ItemTitle>
          </ItemContent>
        </Item>
        <Item>
          <ItemMedia variant="icon">🔧</ItemMedia>
          <ItemContent>
            <ItemTitle>Settings</ItemTitle>
          </ItemContent>
        </Item>
      </>
    ),
  },
};
