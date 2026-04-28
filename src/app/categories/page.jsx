import React from 'react'
import Categories from './Categories'
import axios from 'axios';

export default async function page() {
  const res = await axios.get("https://promote-bharat.vercel.app/api/category?type=main");
  const categories = res.data.data || [];

  return (
    <Categories categories={categories} />
  )
}
