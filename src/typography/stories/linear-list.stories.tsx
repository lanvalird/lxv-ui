import type { Meta, StoryObj } from "@storybook/react-vite";

import { LinearList } from "..";

const meta: Meta = {
  title: "Markdown/LinearList",
  component: LinearList,
  parameters: {
    layout: "center",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Numeric: Story = {
  args: {
    variant: "numeric",
    children: (
      <>
        <li>Соберитесь</li>
        <li>Признайтесь</li>
        <li>Не вспоминайте</li>
      </>
    ),
  },
};

export const Figured: Story = {
  args: {
    variant: "figured",
    children: (
      <>
        <li>Соберитесь</li>
        <li>Признайтесь</li>
        <li>Не вспоминайте</li>
      </>
    ),
  },
};
