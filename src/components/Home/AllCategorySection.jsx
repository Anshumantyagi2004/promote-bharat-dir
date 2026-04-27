"use client";
import Link from "next/link";
import Image from "next/image";

export default function IndustrySection({ industries = [] }) {
    return (
        <section className="px-4 md:px-10 py-10 bg-gray-200 space-y-12">

            {industries.filter((i) => i.mainCategory && i.mainCategory.length > 0)
                .map((industry) => (
                    <div key={industry._id}>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
                            {industry.name}
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                            <div className="relative h-75 rounded-lg overflow-hidden">
                                <Image
                                    src={industry.imageUrl}
                                    alt={industry.name}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/50 p-5 flex flex-col justify-end">
                                    <div className="text-white space-y-2 text-sm">
                                        {industry.mainCategory?.slice(0, 5).map((cat) => (
                                            <p key={cat._id}>● {cat.name}</p>
                                        ))}
                                    </div>
                                    <div className="mt-4 flex justify-center items-center">
                                        <Link
                                            href={`/industries/${industry.slug}`}
                                            className="inline-block bg-[#D01132] hover:bg-[#c10928] text-white px-4 py-2 rounded text-sm w-fit"
                                        >
                                            View All
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

                                {industry.mainCategory?.map((cat) => (
                                    <div
                                        key={cat._id}
                                        className="bg-white border rounded-lg p-4 flex gap-3 hover:shadow-md transition h-fit"
                                    >

                                        <div className="w-16 h-16 relative flex-shrink-0">
                                            <Image
                                                src={cat.imageUrl}
                                                alt={cat.name}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>

                                        <div>
                                            <Link
                                                href={`/categories/${cat.slug}`}
                                                className="font-semibold text-gray-800 hover:text-blue-600 text-sm"
                                            >
                                                {cat.name}
                                            </Link>

                                            <div className="mt-1 space-y-1 text-xs text-gray-600">
                                                {cat.subCategory?.slice(0, 4).map((sub) => (
                                                    <Link
                                                        key={sub._id}
                                                        href={`/categories/${sub.slug}`}
                                                        className="block hover:text-blue-500"
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                ))}
        </section>
    );
}