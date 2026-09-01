import { HeroBanner } from "@/components/modules/hero-banner";
import { CategoryRange } from "@/components/modules/category-range";
import { OurProducts } from "@/components/modules/our-products";
import { RoomsInspiration } from "@/components/modules/rooms-inspiration";
import { ShareSection } from "@/components/modules/share-section";

export default function Home() {
  return (
    <main className="w-full">
      <HeroBanner />
      <CategoryRange />
      <OurProducts />
      <RoomsInspiration />
      <ShareSection />
    </main>
  );
}
