import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function ShopHero() {
  return (
    <section className="relative w-full h-80 flex flex-col items-center justify-center text-center overflow-hidden bg-surface-subtle">
      {/* Background Overlay Graphic */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src="/figma-assets/images/scandinavian-interior-mockup-wall-decal-background-1-117-361.png"
          alt="Shop Background"
          fill
          className="object-cover object-center blur-[1px]"
        />
      </div>

      {/* Floating Header Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Brand Logo Mini */}
        <Image
          src="/figma-assets/icons/meubel-house_logos-05-117-355.svg"
          alt="Logo"
          width={32}
          height={24}
          className="h-7 w-auto mb-2"
        />
        <h1 className="text-4xl sm:text-5xl font-bold text-content-primary mb-2">
          Shop
        </h1>
        <div className="flex items-center gap-2 text-sm text-content-secondary font-medium">
          <Link href="/" className="font-semibold text-content-primary hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 text-content-muted" />
          <span>Shop</span>
        </div>
      </div>
    </section>
  );
}
