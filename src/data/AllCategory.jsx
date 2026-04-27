import AllCategorySection from "@/components/Home/AllCategorySection";
import axios from "axios";

export default async function AllCategoryData() {
  try {
    const res = await axios.get("https://promote-bharat.vercel.app/api/industry");
    const industries = res.data || [];

    return <AllCategorySection industries={industries} />;
  } catch (error) {
    console.log(error.message);
    return <div>Failed to load industries</div>;
  }
}