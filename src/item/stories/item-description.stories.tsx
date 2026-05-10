import type { Meta, StoryObj } from "@storybook/react-vite";

import { ItemDescription } from "../item-description";

const meta: Meta<typeof ItemDescription> = {
  title: "Components/Item/ItemDescription",
  component: ItemDescription,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ItemDescription>;

export const Default: Story = {
  args: {
    children:
      "This is a standard description that will be clamped after two lines if it becomes too long. It supports links like <a href='#'>this</a>.",
  },
};

export const WithLink: Story = {
  args: {
    children: (
      <>
        Learn more about our <a href="#">privacy policy</a> and{" "}
        <a href="#">terms of service</a>.
      </>
    ),
  },
};
