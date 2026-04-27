import Category from "@/components/Home/Category";
import axios from "axios";

export default async function CategoryData() {
  try {
    const res = await axios.get("https://promote-bharat.vercel.app/api/category?type=main");
    const categories = res.data.data || [];

    return <Category categories={categories} />;
  } catch (error) {
    console.log(error.message);
    return <div>Failed to load categories</div>;
  }
}