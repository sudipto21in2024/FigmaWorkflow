import React from "react";
import { ProductCard, Product } from "@/components/shared/product-card";

const SHOP_PRODUCTS: Product[] = [
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
  {
    id: "9",
    name: "Syltherine Modern",
    categoryDesc: "Stylish dining chair",
    price: "Rp 2.800.000",
    badge: { text: "-20%", type: "discount" },
    imageSrc: "/figma-assets/images/image-1-117-422.png",
  },
  {
    id: "10",
    name: "Leviosa Comfort",
    categoryDesc: "Living room chair",
    price: "Rp 3.100.000",
    imageSrc: "/figma-assets/images/image-2-117-421.png",
  },
  {
    id: "11",
    name: "Lolito Velvet",
    categoryDesc: "Luxury 3-seater sofa",
    price: "Rp 8.500.000",
    originalPrice: "Rp 15.000.000",
    badge: { text: "-40%", type: "discount" },
    imageSrc: "/figma-assets/images/image-3-117-420.png",
  },
  {
    id: "12",
    name: "Respira High",
    categoryDesc: "Bar stool set",
    price: "Rp 750.000",
    badge: { text: "New", type: "new" },
    imageSrc: "/figma-assets/images/outdoor-bar-table-and-stool-1-117-419.png",
  },
];

export function ShopProductGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
        {SHOP_PRODUCTS.map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-4 text-sm font-medium">
        <button className="h-12 w-12 rounded-lg bg-primary text-content-inverse flex items-center justify-center font-semibold">
          1
        </button>
        <button className="h-12 w-12 rounded-lg bg-surface-subtle text-content-primary hover:bg-primary hover:text-content-inverse transition-colors flex items-center justify-center font-semibold">
          2
        </button>
        <button className="h-12 w-12 rounded-lg bg-surface-subtle text-content-primary hover:bg-primary hover:text-content-inverse transition-colors flex items-center justify-center font-semibold">
          3
        </button>
        <button className="h-12 px-6 rounded-lg bg-surface-subtle text-content-primary hover:bg-primary hover:text-content-inverse transition-colors flex items-center justify-center font-semibold">
          Next
        </button>
      </div>
    </div>
  );
}
