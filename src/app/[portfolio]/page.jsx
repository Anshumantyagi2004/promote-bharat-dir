import React from 'react'
import Portfolio from './Portfolio'
import axios from 'axios';

export async function generateMetadata({ params }) {
    const { portfolio } = await params;
    try {
        const res = await axios.get("https://promote-bharat.vercel.app/api/category");
        const portfolioData = res.data.data.find((i) => (i.slug == portfolio))
        if (!portfolioData) {
            return {
                title: "Portfolio",
                description: "Portfolio",
            };
        }

        return {
            title: portfolioData.metaTitle || portfolioData.name,
            description:
                portfolioData.metaDescription ||
                portfolioData.description?.replace(/<[^>]+>/g, "").slice(0, 150),
        };

    } catch (err) {
        return {
            title: "Page",
            description: "Page",
        };
    }
}

export default function page() {
    return (
        <Portfolio />
    )
}
