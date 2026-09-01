import React from "react";
import Image from "next/image";

export function ProductTabsDescription() {
  return (
    <section className="w-full border-t border-border/60 py-16 bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Tab Headers */}
        <div className="flex items-center justify-center gap-8 sm:gap-12 mb-8 text-base sm:text-lg font-medium">
          <button className="text-content-primary font-bold border-b-2 border-primary pb-1">
            Description
          </button>
          <button className="text-content-muted hover:text-content-primary transition-colors pb-1">
            Additional Information
          </button>
          <button className="text-content-muted hover:text-content-primary transition-colors pb-1">
            Reviews [5]
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="text-sm text-content-secondary leading-relaxed space-y-4 mb-10 text-justify">
          <p>
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced.
          </p>
        </div>

        {/* Gallery Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden bg-surface-subtle">
            <Image
              src="/figma-assets/images/image-100-117-383.png"
              alt="Sofa Detail View 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden bg-surface-subtle">
            <Image
              src="/figma-assets/images/image-106-117-377.png"
              alt="Sofa Detail View 2"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
