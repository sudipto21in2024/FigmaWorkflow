import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbProps {
  productName: string;
}

export function ProductBreadcrumb({ productName }: BreadcrumbProps) {
  return (
    <div className="w-full bg-surface-subtle py-6 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center gap-3 text-sm text-content-muted">
        <Link href="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/shop" className="hover:text-primary transition-colors">
          Shop
        </Link>
        <ChevronRight className="h-4 w-4" />
        <div className="h-5 w-px bg-border mx-1" />
        <span className="font-medium text-content-primary truncate">{productName}</span>
      </div>
    </div>
  );
}
