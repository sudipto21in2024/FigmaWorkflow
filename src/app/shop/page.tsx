import { ShopHero } from "@/components/modules/shop/shop-hero";
import { ShopFilterBar } from "@/components/modules/shop/shop-filter-bar";
import { ShopProductGrid } from "@/components/modules/shop/shop-product-grid";
import { FeaturesBenefitsBar } from "@/components/shared/features-benefits-bar";

export const metadata = {
  title: "Shop - Furniro",
  description: "Explore our collection of modern furniture and interior decor.",
};

export default function ShopPage() {
  return (
    <main className="w-full">
      <ShopHero />
      <ShopFilterBar />
      <ShopProductGrid />
      <FeaturesBenefitsBar />
    </main>
  );
}
