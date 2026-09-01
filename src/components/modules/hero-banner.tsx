import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroBanner() {
  return (
    <section className="relative w-full min-h-screen lg:min-h-[70vh] flex items-center justify-end bg-surface-muted">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/figma-assets/images/scandinavian-interior-mockup-wall-decal-background-1-117-361.png"
          alt="Scandinavian Interior"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Floating Hero Card */}
      <div className="relative z-10 max-w-xl bg-surface-subtle p-8 sm:p-12 mx-4 sm:mr-12 lg:mr-16 rounded-lg shadow-card">
        <span className="text-xs font-semibold tracking-[0.25em] text-content-primary uppercase block mb-2">
          New Arrival
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-4">
          Discover Our <br />
          New Collection
        </h1>
        <p className="text-sm sm:text-base text-content-secondary leading-relaxed mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
        <Button variant="primary" size="lg" className="w-full sm:w-auto">
          BUY NOW
        </Button>
      </div>
    </section>
  );
}
