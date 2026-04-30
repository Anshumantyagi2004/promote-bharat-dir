"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Menu,
    X,
    Home,
    Info,
    ShoppingBag,
    Mail,
    Phone, User,
    MapPin, Users, Briefcase, Award, Clock, Eye, FileText, MessageCircle, Plus, Minus
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import CountUp from "react-countup";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Portfolio() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#home", icon: Home },
        { name: "About", href: "#about-us", icon: Info },
        { name: "Products", href: "#products", icon: ShoppingBag },
        { name: "Contact", href: "#contact-us", icon: Mail },
    ];

    const products = [
        { id: 1, name: "Product One", image: "/feature2.webp" },
        { id: 2, name: "Product Two", image: "/feature2.webp" },
        { id: 3, name: "Product Three", image: "/feature2.webp" },
        { id: 4, name: "Product Four", image: "/feature2.webp" },
        { id: 5, name: "Product Five", image: "/feature2.webp" },
        { id: 6, name: "Product Six", image: "/feature2.webp" },
    ];

    const stats = [
        {
            icon: Clock,
            number: 15,
            suffix: "+",
            label: "Years Experience",
        },
        {
            icon: Users,
            number: 1000,
            suffix: "+",
            label: "Happy Clients",
        },
        {
            icon: Briefcase,
            number: 500,
            suffix: "+",
            label: "Projects Completed",
        },
        {
            icon: Award,
            number: 50,
            suffix: "+",
            label: "Awards Won",
        },
    ];

    const faqs = [
        {
            question: "What services do you offer?",
            answer: "We provide a wide range of digital solutions including web development, design, and business automation services."
        },
        {
            question: "How long does a project take?",
            answer: "Project timelines depend on complexity, but most projects are completed within 2–6 weeks."
        },
        {
            question: "Do you offer support after delivery?",
            answer: "Yes, we provide ongoing support and maintenance to ensure your product runs smoothly."
        },
        {
            question: "Can I request custom features?",
            answer: "Absolutely! We specialize in building tailored solutions based on your specific needs."
        },
        {
            question: "How can I get a quote?",
            answer: "You can use our contact form or click the ‘Request a Quote’ button to get started."
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (<>
        <section className="w-full bg-gray-50 border-b border-b-gray-200 sticky top-0 z-50">
            <div className="flex justify-between items-center px-4 py-2">
                <Link href="" className="border border-gray-200 p-1">
                    <Image
                        width={200}
                        height={200}
                        src="/logo.webp"
                        alt="Logo"
                        className="w-auto h-16"
                    />
                </Link>

                <div className="hidden lg:flex items-center gap-6 text-black">
                    {navLinks.map((link, index) => {
                        const Icon = link.icon;
                        return (
                            <Link key={index} href={link.href}
                                className="border border-gray-200 flex items-center gap-2 px-4 py-2 rounded-lg text-xl font-semibold bg-white hover:bg-orange-100 hover:text-orange-600 transition-all duration-200 shadow-sm hover:shadow-md"
                            >
                                <Icon size={18} />
                                {link.name}
                            </Link>
                        );
                    })}

                    <button className="flex items-center text-xl font-semibold gap-2 bg-orange-400 hover:bg-orange-500 px-5 py-2 rounded-lg text-white">
                        <Phone size={18} />
                        Get in Touch
                    </button>
                </div>

                <button className="lg:hidden bg-orange-400 hover:bg-orange-500 p-3 rounded-lg text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {isOpen && (
                <div className="lg:hidden flex flex-col gap-4 px-4 pb-4 text-black">
                    {navLinks.map((link, index) => {
                        const Icon = link.icon;
                        return (
                            <Link
                                key={index}
                                href={link.href}
                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white hover:bg-orange-100 hover:text-orange-600 transition-all duration-200 shadow-sm hover:shadow-md"
                            >
                                <Icon size={18} />
                                {link.name}
                            </Link>
                        );
                    })}

                    <button className="flex items-center justify-center gap-2 bg-orange-400 hover:bg-orange-500 px-5 py-2 rounded-lg text-white">
                        <Phone size={18} />
                        Get in Touch
                    </button>
                </div>
            )}
        </section>

        <section className="relative w-full min-h-[70vh] flex items-center justify-center">
            <div className="absolute inset-0">
                <img
                    src="/vision.webp" // replace with your image
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="relative z-10 max-w-7xl w-full grid md:grid-cols-2 gap-10 px-6 py-12 items-center">
                <div className="text-white">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-2">
                        Grow Your Business With Smart Solutions
                    </h1>
                    <p className="text-gray-200 max-w-md">
                        We help you build modern digital products that scale fast
                        and convert better. Let’s create something powerful together.
                    </p>
                    <button className="bg-orange-500 mt-6 hover:bg-orange-600 px-6 py-3 rounded-lg text-white font-medium">
                        Get Started
                    </button>
                </div>

                {/* Right Form */}
                <div className="bg-white rounded-xl shadow-lg px-4 py-6 space-y-4">
                    <h2 className="text-xl font-semibold text-gray-800 text-center flex justify-center items-center flex-col">
                        Get in Touch
                        <div className="w-10 h-1 rounded-md mt-1 bg-orange-500"></div>
                    </h2>

                    <div className="flex items-center border border-gray-400 rounded-lg px-3 py-2">
                        <User size={18} className="text-gray-600 mr-2" />
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full outline-none text-gray-800"
                        />
                    </div>

                    <div className="flex items-center justify-between gap-2">
                        <div className="flex w-full items-center border rounded-lg border-gray-400 px-3 py-2">
                            <Mail size={18} className="text-gray-600 mr-2" />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full outline-none text-gray-800"
                            />
                        </div>

                        <div className="flex w-full items-center border rounded-lg border-gray-400 px-3 py-2">
                            <Phone size={18} className="text-gray-600 mr-2" />
                            <input
                                type="tel"
                                placeholder="Your Phone"
                                className="w-full outline-none text-gray-800"
                            />
                        </div>
                    </div>

                    <div className="flex items-center border border-gray-400 rounded-lg px-3 py-2">
                        <MapPin size={18} className="text-gray-600 mr-2" />
                        <input
                            type="text"
                            placeholder="Your City"
                            className="w-full outline-none text-gray-800"
                        />
                    </div>

                    <textarea
                        placeholder="Your Message"
                        rows={3}
                        className="w-full border border-gray-400 rounded-lg px-3 py-2 outline-none text-gray-800"
                    />

                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg">
                        Submit
                    </button>
                </div>
            </div>
        </section>

        <section className="bg-gray-50 py-6 md:px-15 px-4">
            <Swiper
                spaceBetween={20}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 5 },
                }}
                modules={[Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                className="pb-6! pt-4!"
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <motion.div whileHover={{ y: -5 }}
                            className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 flex flex-col"
                        >
                            <div className="w-full h-60 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain transition duration-300 hover:scale-105"
                                />
                            </div>

                            <div className="p-3 flex flex-col gap-2 grow">
                                <h3 className="text-center font-semibold text-lg text-gray-800">
                                    {product.name}
                                </h3>
                            </div>

                            <div className="p-3 pt-0">
                                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg">
                                    Get a Quote
                                </button>
                            </div>
                        </motion.div>

                    </SwiperSlide>
                ))}
            </Swiper>
        </section>

        <section className="bg-amber-50 px-4 py-10 md:px-10 grid grid-cols-1 lg:grid-cols-2">
            <div className="">
                <div className="w-fit text-lg px-4 py-1 mb-2 rounded-full font-medium text-orange-600 bg-orange-200">
                    About us
                </div>
                <h1 className="text-3xl md:text-5xl mb-4 text-black font-bold">
                    India’s Trusted Bar Bending Machine Importer
                </h1>

                <p className="text-black">
                    Founded in 2013, Shree Shakti Infratech has established itself as a trusted and leading Bar Bending Machine Importer in India, delivering high-performance construction machinery built for precision, durability, and long-term reliability.
                    <br />
                    As an ISO-certified company, we are committed to providing advanced imported machines that meet the evolving demands of modern construction and infrastructure projects. Our solutions are designed to enhance productivity, improve efficiency, and ensure superior construction quality.
                </p>
            </div>

            <div>
                <Image
                    width={200}
                    height={200}
                    className="w-full h-80 object-contain"
                    alt="image"
                    src={"/feature2.webp"}
                />
            </div>
        </section>

        <section className="relative py-10">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/banner.png"
                    alt="background"
                    className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {stats.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: false }}
                                className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg text-white"
                            >
                                {/* Icon */}
                                <div className="flex justify-center mb-3 text-orange-400">
                                    <Icon size={32} />
                                </div>

                                {/* Number */}
                                <h3 className="text-2xl md:text-3xl font-bold">
                                    <CountUp end={item.number} duration={2} />
                                    {item.suffix}
                                </h3>

                                {/* Label */}
                                <p className="text-white/80 mt-1">
                                    {item.label}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>

        <section className="py-10 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
                        Our Popular Products
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Explore our most demanded and trusted products
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            viewport={{ once: false }}
                            whileHover={{ y: -8 }}
                            className="relative bg-white rounded-xl shadow-sm border overflow-hidden group border-gray-200"
                        >
                            <div className="w-full h-60 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain group-hover:scale-105 transition duration-300"
                                />
                            </div>

                            <div className="absolute inset-0 flex items-end justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300">
                                <button className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition mb-15">
                                    <Eye size={20} />
                                </button>
                            </div>

                            <div className="p-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {product.name}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        <section className="relative py-16">

            {/* Background */}
            <div className="absolute inset-0">
                <img
                    src="/banner.png"
                    alt="cta background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/70"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto text-center px-4 text-white">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold mb-4"
                >
                    Ready to Grow Your Business?
                </motion.h2>

                <p className="text-gray-200 mb-8">
                    Contact us today and get the best solutions tailored for your needs.
                </p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >

                    {/* Call Now */}
                    <a
                        href="tel:+1234567890"
                        className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-medium transition"
                    >
                        <Phone size={18} />
                        Call Now
                    </a>

                    {/* Request Quote */}
                    <button className="flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-lg font-medium transition">
                        <FileText size={18} />
                        Request a Quote
                    </button>

                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/1234567890"
                        target="_blank"
                        className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-medium transition"
                    >
                        <MessageCircle size={18} />
                        WhatsApp
                    </a>

                </motion.div>
            </div>
        </section>

        <section className="py-10 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
                <div className="flex justify-center">
                    <img
                        src="/feature2.webp" // replace with your image
                        alt="machine"
                        className="max-h-112 object-contain"
                    />
                </div>

                <div>
                    <div className="mb-6">
                        <p className="text-orange-500 font-semibold uppercase text-sm">
                            Popular Questions
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    {/* FAQ */}
                    <div className="space-y-3">
                        {faqs.map((faq, index) => {
                            const isOpen = activeIndex === index;

                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg border overflow-hidden"
                                >
                                    {/* Question */}
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full flex justify-between items-center px-4 py-4 text-left"
                                    >
                                        <span className="font-medium text-gray-800">
                                            {faq.question}
                                        </span>

                                        {isOpen ? (
                                            <Minus size={18} className="text-gray-800" />
                                        ) : (
                                            <Plus size={18} className="text-gray-800" />
                                        )}
                                    </button>

                                    {/* Answer */}
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="px-4 pb-4 text-gray-600"
                                            >
                                                {faq.answer}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>

        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="bg-white p-2 rounded-lg">
                    <Image
                        src="/logo.webp"
                        alt="Promote Bharat"
                        width={200}
                        height={200}
                        className="rounded-xl shadow-lg"
                    />
                </div>

                {/* Social Icons */}
                <div className="flex gap-6">
                    <Link href="#" className="hover:text-white transition">
                        <FaFacebook size={25} />
                    </Link>

                    <Link href="#" className="hover:text-white transition">
                        <FaInstagram size={25} />
                    </Link>

                    <Link href="#" className="hover:text-white transition">
                        <FaLinkedin size={25} />
                    </Link>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="md:flex justify-around border-t border-gray-800 py-6 text-center text-base text-gray-300">
                <p>© Copyright 2024 Promote Bharat</p>

                <p className="mt-1">
                    Developed & Manage by <span className="text-white">Promozione Branding Pvt Ltd.</span>
                </p>
            </div>
        </footer>
    </>)
}
