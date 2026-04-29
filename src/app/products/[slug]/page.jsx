import React from 'react'
import ProductPage from './ProductPage'
import axios from 'axios';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    try {
        const res = await axios.get(`https://promote-bharat.vercel.app/api/product/${slug}`);
        const prod = res.data.data
        if (!prod) {
            return {
                title: "Product Not Found",
                description: "No product found",
            };
        }

        return {
            title: prod.metaTitle || prod.name,
            description:
                prod.metaDescription ||
                prod.description?.replace(/<[^>]+>/g, "").slice(0, 150),
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
    const res = await axios.get(`https://promote-bharat.vercel.app/api/product/${slug}`);
    // console.log(res.data.data)
    const productDetails =res.data.data

    return (
        <ProductPage productDetails={productDetails} />
    )
}
