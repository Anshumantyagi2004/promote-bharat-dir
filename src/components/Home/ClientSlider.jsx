"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Image from "next/image";

export default function ClienteleSlider() {
    const clients = [
        "/Clients/Amul.png",
        "/Clients/apple.png",
        "/Clients/Dell.png",
        "/Clients/doms.png",
        "/Clients/HP.png",
        "/Clients/Parker.png",
        "/Clients/Amul.png",
        "/Clients/apple.png",
        "/Clients/Dell.png",
        "/Clients/doms.png",
        "/Clients/HP.png",
        "/Clients/Parker.png",
    ];

    return (
        <section className="py-10 px-4 md:px-10 w-full bg-gray-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Explore products from Premium Brands
            </h2>

            <Swiper
                modules={[Autoplay, FreeMode]}
                // spaceBetween={40}
                // slidesPerView={2}
                loop={true}
                speed={4000}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 20
                    },
                }}
                className="max-l"
            >
                {clients.map((logo, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex items-center justify-center h-30 w-full  transition">
                            <Image
                                src={logo}
                                alt="client"
                                width={300}
                                height={260}
                                className="object-contain h-full w-full"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
