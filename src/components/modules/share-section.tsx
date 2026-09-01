import React from "react";
import Image from "next/image";

export function ShareSection() {
  return (
    <section className="w-full py-16 overflow-hidden text-center bg-surface">
      <div className="mb-8">
        <span className="text-sm sm:text-base font-semibold text-content-secondary block mb-1">
          Share your setup with
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-content-primary">
          #FuniroFurniture
        </h2>
      </div>

      {/* Masonry / Collage Grid */}
      <div className="relative w-full max-w-[1790px] mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        {/* Left Column Stack */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <div className="flex gap-4 items-end justify-end">
            <div className="relative w-1/3 h-48 sm:h-72 rounded-lg overflow-hidden group">
              <Image
                src="/figma-assets/images/rectangle-36-117-495.png"
                alt="Setup 1"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative w-2/3 h-64 sm:h-80 rounded-lg overflow-hidden group">
              <Image
                src="/figma-assets/images/rectangle-38-117-496.png"
                alt="Setup 2"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="flex gap-4 items-start justify-end">
            <div className="relative w-2/5 h-56 sm:h-80 rounded-lg overflow-hidden group">
              <Image
                src="/figma-assets/images/rectangle-37-117-503.png"
                alt="Setup 3"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative w-3/5 h-48 sm:h-60 rounded-lg overflow-hidden group">
              <Image
                src="/figma-assets/images/rectangle-39-117-498.png"
                alt="Setup 4"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Center Feature */}
        <div className="md:col-span-2 flex justify-center">
          <div className="relative w-full h-72 sm:h-96 rounded-lg overflow-hidden group shadow-sm">
            <Image
              src="/figma-assets/images/rectangle-40-117-497.png"
              alt="Setup Center"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Right Column Stack */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <div className="flex gap-4 items-end justify-start">
            <div className="relative w-3/5 h-64 sm:h-84 rounded-lg overflow-hidden group">
              <Image
                src="/figma-assets/images/rectangle-43-117-501.png"
                alt="Setup 5"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative w-2/5 h-72 sm:h-96 rounded-lg overflow-hidden group">
              <Image
                src="/figma-assets/images/rectangle-45-117-502.png"
                alt="Setup 6"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="flex gap-4 items-start justify-start">
            <div className="relative w-2/5 h-48 sm:h-60 rounded-lg overflow-hidden group">
              <Image
                src="/figma-assets/images/rectangle-41-117-499.png"
                alt="Setup 7"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative w-3/5 h-40 sm:h-52 rounded-lg overflow-hidden group">
              <Image
                src="/figma-assets/images/rectangle-44-117-500.png"
                alt="Setup 8"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
