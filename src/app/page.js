import ClienteleSlider from "@/components/Home/ClientSlider";
import CTA from "@/components/Home/CTA";
import HeroSection from "@/components/Home/HeroSection";
import Locations from "@/components/Home/Locations";
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
      <Locations />
      <CTA />
    </div>
  );
}
