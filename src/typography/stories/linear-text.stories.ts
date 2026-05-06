import type { Meta, StoryObj } from "@storybook/react-vite";

import { LinearText } from "..";

const meta: Meta = {
  title: "Markdown/LinearText",
  component: LinearText,
  parameters: {
    layout: "center",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      "Здесь очень полезные данные для вашего размышления. Это совсем не текст-рыба, хотя я мог соврать, чтобы  увеличить запас слов для данного параграфа.",
  },
};
