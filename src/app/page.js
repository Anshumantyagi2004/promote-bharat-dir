import ClienteleSlider from "@/components/Home/ClientSlider";
import HeroSection from "@/components/Home/HeroSection";
import AllCategoryData from "@/data/AllCategory";
import CategoryData from "@/data/CategoryData";
import IndustrySliderData from "@/data/IndustrySliderData";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <HeroSection />
      <IndustrySliderData />
      <CategoryData />
      <ClienteleSlider />
      <AllCategoryData />
    </div>
  );
}
