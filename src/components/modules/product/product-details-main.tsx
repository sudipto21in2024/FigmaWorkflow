"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, Heart, Share2, ArrowRightLeft, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProductDetailsMain() {
  const [selectedImage, setSelectedImage] = useState("/figma-assets/images/image-1-117-422.png");
  const [selectedSize, setSelectedSize] = useState("L");
  const [selectedColor, setSelectedColor] = useState("purple");
  const [quantity, setQuantity] = useState(1);

  const thumbnails = [
    "/figma-assets/images/image-1-117-422.png",
    "/figma-assets/images/image-2-117-421.png",
    "/figma-assets/images/image-3-117-420.png",
    "/figma-assets/images/outdoor-bar-table-and-stool-1-117-419.png",
  ];

  const sizes = ["L", "XL", "XS"];
  const colors = [
    { id: "purple", class: "bg-[#816DFA]" },
    { id: "black", class: "bg-[#000000]" },
    { id: "gold", class: "bg-[#B88E2F]" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Gallery (Thumbnails + Main Image) */}
        <div className="lg:col-span-6 flex flex-col-reverse sm:flex-row gap-6 items-start">
          {/* Thumbnails */}
          <div className="flex sm:flex-col gap-4 overflow-x-auto sm:overflow-visible w-full sm:w-20">
            {thumbnails.map((src, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(src)}
                className={`relative w-18 h-18 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-surface-subtle border-2 transition-all flex-shrink-0 ${
                  selectedImage === src ? "border-primary" : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <Image src={src} alt="Thumbnail" fill className="object-cover" />
              </button>
            ))}
          </div>

          {/* Main Showcase Image */}
          <div className="relative flex-1 w-full h-96 sm:h-128 rounded-lg overflow-hidden bg-surface-subtle shadow-sm">
            <Image src={selectedImage} alt="Asgaard sofa" fill priority className="object-cover" />
          </div>
        </div>

        {/* Right: Product Info & Actions */}
        <div className="lg:col-span-6 flex flex-col">
          <h1 className="text-3xl sm:text-4xl font-bold text-content-primary mb-2">
            Asgaard sofa
          </h1>
          <span className="text-xl sm:text-2xl font-semibold text-content-muted mb-4">
            Rp. 250,000.00
          </span>

          {/* Rating */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center text-[#FFC700]">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
              <Star className="h-4 w-4 fill-current opacity-50" />
            </div>
            <div className="h-4 w-px bg-border" />
            <span className="text-xs text-content-muted">5 Customer Review</span>
          </div>

          <p className="text-sm text-content-secondary leading-relaxed mb-6">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
          </p>

          {/* Size Selector */}
          <div className="mb-6">
            <span className="text-sm text-content-muted block mb-2 font-medium">Size</span>
            <div className="flex items-center gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`h-8 w-8 rounded-md text-xs font-semibold transition-colors flex items-center justify-center ${
                    selectedSize === size
                      ? "bg-primary text-content-inverse"
                      : "bg-surface-subtle text-content-primary hover:bg-border"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selector */}
          <div className="mb-8">
            <span className="text-sm text-content-muted block mb-2 font-medium">Color</span>
            <div className="flex items-center gap-3">
              {colors.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedColor(c.id)}
                  className={`h-8 w-8 rounded-full ${c.class} transition-transform ${
                    selectedColor === c.id ? "ring-2 ring-offset-2 ring-primary scale-110" : "opacity-80 hover:opacity-100"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Quantity & CTA Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pb-8 border-b border-border/60 mb-8">
            <div className="flex items-center border border-content-muted rounded-lg px-3 py-2 gap-4">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="text-content-primary hover:text-primary transition-colors"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="font-semibold text-sm w-4 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="text-content-primary hover:text-primary transition-colors"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>

            <Button variant="outline" size="md" className="border-content-primary px-8 hover:bg-content-primary hover:text-content-inverse">
              Add To Cart
            </Button>
            <Button variant="outline" size="md" className="border-content-primary px-8 hover:bg-content-primary hover:text-content-inverse">
              + Compare
            </Button>
          </div>

          {/* Product Meta */}
          <div className="flex flex-col gap-2 text-xs text-content-muted">
            <div className="flex items-center gap-4">
              <span className="w-20">SKU</span>
              <span>: SS001</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-20">Category</span>
              <span>: Sofas</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-20">Tags</span>
              <span>: Sofa, Chair, Home, Shop</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-20">Share</span>
              <div className="flex items-center gap-3 text-content-primary">
                <span>:</span>
                <button className="hover:text-primary"><Share2 className="h-3.5 w-3.5" /></button>
                <button className="hover:text-primary"><Heart className="h-3.5 w-3.5" /></button>
                <button className="hover:text-primary"><ArrowRightLeft className="h-3.5 w-3.5" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
