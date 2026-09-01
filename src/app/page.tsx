import { Header } from "@/components/modules/header";
import { HeroBanner } from "@/components/modules/hero-banner";
import { CategoryRange } from "@/components/modules/category-range";
import { OurProducts } from "@/components/modules/our-products";
import { RoomsInspiration } from "@/components/modules/rooms-inspiration";
import { ShareSection } from "@/components/modules/share-section";
import { Footer } from "@/components/modules/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-content-primary">
      <Header />
      <main className="flex-1 min-w-0">
        <HeroBanner />
        <CategoryRange />
        <OurProducts />
        <RoomsInspiration />
        <ShareSection />
      </main>
      <Footer />
    </div>
  );
}
