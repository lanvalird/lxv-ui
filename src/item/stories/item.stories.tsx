import type { Meta, StoryObj } from "@storybook/react-vite";

import { Item } from "../item";
import { ItemMedia } from "../item-media";
import { ItemContent } from "../item-content";
import { ItemTitle } from "../item-title";
import { ItemDescription } from "../item-description";
import { ItemActions } from "../item-actions";
import { ItemFooter } from "../item-footer";
import { Button } from "@/indev/primitives/button";
import { FolderSearch2Icon, StarIcon } from "lucide-react";

const meta: Meta<typeof Item> = {
  title: "Components/Item/Item",
  component: Item,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "muted"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "xs"],
    },
    asChild: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Item>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "default",
    children: (
      <>
        <ItemMedia variant="icon">
          <FolderSearch2Icon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Project Aurora</ItemTitle>
          <ItemDescription>
            Research & development initiative for sustainable energy.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm">Edit</Button>
        </ItemActions>
        <ItemFooter>Updated 2 days ago</ItemFooter>
      </>
    ),
  },
};

export const WithImage: Story = {
  args: {
    variant: "outline",
    size: "default",
    children: (
      <>
        <ItemMedia variant="image">
          <img src="https://placehold.co/80" alt="placeholder" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Mount Rainier</ItemTitle>
          <ItemDescription>
            A beautiful national park in Washington state.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="ghost" size="sm">
            View
          </Button>
        </ItemActions>
      </>
    ),
  },
};

export const Compact: Story = {
  args: {
    size: "sm",
    variant: "muted",
    children: (
      <>
        <ItemMedia variant="icon">
          <StarIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Favorites</ItemTitle>
        </ItemContent>
      </>
    ),
  },
};
