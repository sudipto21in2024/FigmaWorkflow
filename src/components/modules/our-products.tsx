import React from "react";
import { ProductCard, Product } from "@/components/shared/product-card";
import { Button } from "@/components/ui/button";

const SAMPLE_PRODUCTS: Product[] = [
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
  {
    id: "5",
    name: "Grifo",
    categoryDesc: "Night lamp",
    price: "Rp 1.500.000",
    imageSrc: "/figma-assets/images/image-9-117-415.png",
  },
  {
    id: "6",
    name: "Muggo",
    categoryDesc: "Small mug",
    price: "Rp 150.000",
    badge: { text: "New", type: "new" },
    imageSrc: "/figma-assets/images/image-6-117-412.png",
  },
  {
    id: "7",
    name: "Pingky",
    categoryDesc: "Cute bed set",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    badge: { text: "-50%", type: "discount" },
    imageSrc: "/figma-assets/images/image-7-117-411.png",
  },
  {
    id: "8",
    name: "Potty",
    categoryDesc: "Minimalist flower pot",
    price: "Rp 500.000",
    badge: { text: "New", type: "new" },
    imageSrc: "/figma-assets/images/image-8-117-410.png",
  },
];

export function OurProducts() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 text-center">
      <h2 className="text-3xl font-bold text-content-primary mb-8">Our Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 text-left">
        {SAMPLE_PRODUCTS.map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>

      <Button variant="outline" size="md" className="border-primary text-primary hover:bg-primary hover:text-content-inverse px-16">
        Show More
      </Button>
    </section>
  );
}
