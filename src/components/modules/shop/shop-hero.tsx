import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function ShopHero() {
  return (
    <div className="relative w-full py-20 bg-surface-subtle text-center flex flex-col items-center justify-center border-b border-border/40">
      <h1 className="text-4xl sm:text-5xl font-bold text-content-primary mb-3">Shop</h1>
      <div className="flex items-center gap-2 text-sm text-content-secondary font-medium">
        <Link href="/" className="font-semibold text-content-primary hover:text-primary transition-colors">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 text-content-muted" />
        <span>Shop</span>
      </div>
    </div>
  );
}
