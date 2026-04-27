import IndustrySlider from "@/components/Home/IndustrySlider";
import axios from "axios";

export default async function IndustrySliderData() {
  try {
    const res = await axios.get("https://promote-bharat.vercel.app/api/industry");
    const industries = res.data || [];

    return <IndustrySlider industries={industries} />;
  } catch (error) {
    console.log(error.message);
    return <div>Failed to load industries</div>;
  }
}