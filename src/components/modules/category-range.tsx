import React from "react";
import Image from "next/image";

interface Category {
  title: string;
  imageSrc: string;
}

const CATEGORIES: Category[] = [
  {
    title: "Dining",
    imageSrc: "/figma-assets/images/image-106-117-377.png",
  },
  {
    title: "Living",
    imageSrc: "/figma-assets/images/image-100-117-383.png",
  },
  {
    title: "Bedroom",
    imageSrc: "/figma-assets/images/image-101-117-388.png",
  },
];

export function CategoryRange() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 text-center">
      <h2 className="text-3xl font-bold text-content-primary mb-2">Browse The Range</h2>
      <p className="text-content-secondary mb-12 text-sm sm:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
        {CATEGORIES.map((cat) => (
          <div key={cat.title} className="flex flex-col items-center group cursor-pointer">
            <div className="relative w-full h-96 md:h-128 rounded-lg overflow-hidden mb-6 bg-surface-subtle">
              <Image
                src={cat.imageSrc}
                alt={cat.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold text-content-primary group-hover:text-primary transition-colors">
              {cat.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
