import React from 'react'
import IndustryPage from './IndustryPage'
import axios from 'axios';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    try {
        const res = await axios.get("https://promote-bharat.vercel.app/api/industry");
        const industry = res.data.find((i) => (i.slug == slug))
        if (!industry) {
            return {
                title: "Product Not Found",
                description: "No product found",
            };
        }

        return {
            title: industry.metaTitle || industry.name,
            description:
                industry.metaDescription ||
                industry.description?.replace(/<[^>]+>/g, "").slice(0, 150),
        };

    } catch (err) {
        return {
            title: "Product",
            description: "Product page",
        };
    }
}

export default async function page({ params }) {
    const { slug } = await params
    const res = await axios.get("https://promote-bharat.vercel.app/api/industry");
    const industry = res.data.find((i) => (i.slug == slug))
    return (
        <IndustryPage industry={industry} />
    )
}
