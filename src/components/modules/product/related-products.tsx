import React from "react";
import { ProductCard, Product } from "@/components/shared/product-card";
import { Button } from "@/components/ui/button";

const RELATED_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Syltherine",
    categoryDesc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
    badge: { text: "-30%", type: "discount" },
    imageSrc: "/figma-assets/images/image-1-117-422.png",
  },
  {
    id: "2",
    name: "Leviosa",
    categoryDesc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    imageSrc: "/figma-assets/images/image-2-117-421.png",
  },
  {
    id: "3",
    name: "Lolito",
    categoryDesc: "Luxury big sofa",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    badge: { text: "-50%", type: "discount" },
    imageSrc: "/figma-assets/images/image-3-117-420.png",
  },
  {
    id: "4",
    name: "Respira",
    categoryDesc: "Outdoor bar table and stool",
    price: "Rp 500.000",
    badge: { text: "New", type: "new" },
    imageSrc: "/figma-assets/images/outdoor-bar-table-and-stool-1-117-419.png",
  },
];

export function RelatedProducts() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 text-center border-t border-border/60">
      <h2 className="text-3xl font-bold text-content-primary mb-10">Related Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 text-left">
        {RELATED_PRODUCTS.map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>

      <Button
        variant="outline"
        size="md"
        className="border-primary text-primary hover:bg-primary hover:text-content-inverse px-16"
      >
        Show More
      </Button>
    </section>
  );
}
