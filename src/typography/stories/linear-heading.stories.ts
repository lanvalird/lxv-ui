import type { Meta, StoryObj } from "@storybook/react-vite";

import { LinearHeading } from "..";

const meta: Meta = {
  title: "Markdown/LinearHeading",
  component: LinearHeading,
  parameters: {
    layout: "center",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Level1: Story = {
  args: {
    children: "Заголовок первого уровня",
    level: 1,
  },
};

export const Level2: Story = {
  args: {
    children: "Заголовок второго уровня",
    level: 2,
  },
};

export const Level3: Story = {
  args: {
    children: "Заголовок третьего уровня",
    level: 3,
  },
};

export const Level4: Story = {
  args: {
    children: "Заголовок четвёртого уровня",
    level: 4,
  },
};

export const Level5: Story = {
  args: {
    children: "Заголовок пятого уровня (серьёзно?)",
    level: 5,
  },
};

export const Lelel6: Story = {
  args: {
    children: "Заголовок уровня, который никто не использует",
    level: 6,
  },
};
