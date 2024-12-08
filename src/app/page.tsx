import HeroSection from "@/components/HomePage/HeroSection";
import ArrivalSection from "@/components/HomePage/ArrivalSection";
import TopSelling from "@/components/HomePage/TopSelling";
import CategorySection from "@/components/HomePage/CategorySection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  ">
      <HeroSection />
      <div className="container mx-auto xl:px-[45px] px-7 md:px-7 py-[100px] ">
        <ArrivalSection />
        <TopSelling />
        <CategorySection />
      </div>
    </main>
  );
}
