import React from "react";
import { SlidersHorizontal, Grid, List } from "lucide-react";

export function ShopFilterBar() {
  return (
    <div className="w-full bg-surface-subtle border-y border-border/50 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Controls */}
        <div className="flex items-center gap-6 text-sm text-content-primary">
          <button className="flex items-center gap-2 font-medium hover:text-primary transition-colors">
            <SlidersHorizontal className="h-5 w-5" />
            <span className="font-semibold">Filter</span>
          </button>
          <div className="flex items-center gap-3">
            <button aria-label="Grid view" className="text-content-primary hover:text-primary p-1">
              <Grid className="h-5 w-5" />
            </button>
            <button aria-label="List view" className="text-content-muted hover:text-primary p-1">
              <List className="h-5 w-5" />
            </button>
          </div>
          <div className="h-8 w-px bg-border/80 hidden sm:block" />
          <span className="text-xs sm:text-sm text-content-secondary hidden sm:inline font-medium">
            Showing 1–16 of 32 results
          </span>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-3">
            <span className="text-content-secondary font-medium">Show</span>
            <span className="bg-surface px-4 py-2.5 text-content-primary font-semibold rounded-none border border-border/40 shadow-xs">
              16
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-content-secondary font-medium">Sort by</span>
            <span className="bg-surface px-5 py-2.5 text-content-primary font-semibold rounded-none border border-border/40 shadow-xs">
              Default
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
