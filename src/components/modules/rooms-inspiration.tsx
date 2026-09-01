import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function RoomsInspiration() {
  return (
    <section className="w-full bg-surface-subtle py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Copy */}
        <div className="lg:col-span-5 flex flex-col items-start pr-0 lg:pr-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-content-primary leading-tight mb-4">
            50+ Beautiful rooms <br className="hidden sm:inline" />
            inspiration
          </h2>
          <p className="text-content-secondary mb-8 leading-relaxed">
            Our designer already made a lot of beautiful prototipe of rooms that inspire you
          </p>
          <Button variant="primary" size="md">
            Explore More
          </Button>
        </div>

        {/* Right Gallery Showcase */}
        <div className="lg:col-span-7 flex flex-col sm:flex-row gap-6 items-center">
          <div className="relative w-full sm:w-1/2 h-96 sm:h-128 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/figma-assets/images/image-81-117-376.png"
              alt="Inner Peace Room"
              fill
              className="object-cover"
            />
            {/* token-ignore */}
            <div className="absolute inset-x-6 bottom-6 bg-surface/90 backdrop-blur-sm p-4 rounded-sm">
              <span className="text-xs text-content-secondary">01 — Bed Room</span>
              <h3 className="text-lg font-bold text-content-primary">Inner Peace</h3>
            </div>
          </div>

          <div className="relative w-full sm:w-1/2 h-80 sm:h-96 rounded-lg overflow-hidden shadow-md hidden sm:block">
            <Image
              src="/figma-assets/images/image-106-117-377.png"
              alt="Dining Inspiration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
