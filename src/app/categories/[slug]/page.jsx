import React from 'react'
import Category from './Category'
import axios from 'axios';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    try {
        const res = await axios.get("https://promote-bharat.vercel.app/api/category");
        const category = res.data.data.find((i) => (i.slug == slug))
        if (!category) {
            return {
                title: "Product Not Found",
                description: "No product found",
            };
        }

        return {
            title: category.metaTitle || category.name,
            description:
                category.metaDescription ||
                category.description?.replace(/<[^>]+>/g, "").slice(0, 150),
        };

    } catch (err) {
        return {
            title: "Category",
            description: "Category page",
        };
    }
}

export default async function page({ params }) {
    const { slug } = await params
    const res = await axios.get("https://promote-bharat.vercel.app/api/category");
    const category = res.data.data.find((i) => (i.slug == slug))

    const res1 = await axios.get("https://promote-bharat.vercel.app/api/industry");
    const industry = res1.data.find((i) => (i._id == category.industryId))

    const res4 = await axios.get(`https://promote-bharat.vercel.app/api/category/${category._id}`);
    const subCategory = res4.data.data.subcategories

    return (
        <Category category={category} industry={industry} subCategory={subCategory} />
    )
}
