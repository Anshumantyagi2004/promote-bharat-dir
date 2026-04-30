import ClienteleSlider from "@/components/Home/ClientSlider";
import CTA from "@/components/Home/CTA";
import HeroSection from "@/components/Home/HeroSection";
import Locations from "@/components/Home/Locations";
import Footer from "@/components/Main/Footer";
import Navbar from "@/components/Main/Navbar";
import AllCategoryData from "@/data/AllCategory";
import CategoryData from "@/data/CategoryData";
import IndustrySliderData from "@/data/IndustrySliderData";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Navbar />
      <HeroSection />
      <IndustrySliderData />
      <CategoryData />
      <ClienteleSlider />
      <AllCategoryData />
      <Locations />
      <CTA />
      <Footer />
    </div>
  );
}
