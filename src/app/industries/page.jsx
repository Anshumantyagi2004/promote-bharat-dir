import React from 'react'
import Industries from './Industries'
import axios from "axios";

export default async function page() {
    const res = await axios.get("https://promote-bharat.vercel.app/api/industry");
    const industries = res.data || [];
    return (
        <Industries industries={industries} />
    )
}
