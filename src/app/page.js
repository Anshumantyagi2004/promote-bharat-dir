import HeroSection from "@/components/Home/HeroSection";
import CategoryData from "@/data/CategoryData";
import IndustrySliderData from "@/data/IndustrySliderData";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center">
      <HeroSection />
      <IndustrySliderData />
      <CategoryData />
    </div>
  );
}
