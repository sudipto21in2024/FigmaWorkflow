import type { Meta, StoryObj } from "@storybook/react";
import { ProductCard, Product } from "./product-card";

const sampleProduct: Product = {
  id: "1",
  name: "Syltherine",
  categoryDesc: "Stylish cafe chair",
  price: "Rp 2.500.000",
  originalPrice: "Rp 3.500.000",
  badge: { text: "-30%", type: "discount" },
  imageSrc: "/figma-assets/images/image-1-117-393.png",
};

const meta: Meta<typeof ProductCard> = {
  title: "Modules/ProductCard",
  component: ProductCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
  args: {
    product: sampleProduct,
  },
};

export const NewBadge: Story = {
  args: {
    product: {
      ...sampleProduct,
      name: "Respira",
      badge: { text: "New", type: "new" },
    },
  },
};

export const NoBadge: Story = {
  args: {
    product: {
      ...sampleProduct,
      name: "Leviosa",
      badge: undefined,
      originalPrice: undefined,
    },
  },
};
