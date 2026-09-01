import { ProductBreadcrumb } from "@/components/modules/product/product-breadcrumb";
import { ProductDetailsMain } from "@/components/modules/product/product-details-main";
import { ProductTabsDescription } from "@/components/modules/product/product-tabs-description";
import { RelatedProducts } from "@/components/modules/product/related-products";

export const metadata = {
  title: "Asgaard Sofa - Furniro",
  description: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero.",
};

export default function SingleProductPage() {
  return (
    <main className="w-full">
      <ProductBreadcrumb productName="Asgaard sofa" />
      <ProductDetailsMain />
      <ProductTabsDescription />
      <RelatedProducts />
    </main>
  );
}
