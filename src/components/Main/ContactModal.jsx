"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, User, Tag, IndianRupee, Store, MapPin, Mail, MessageCircle } from "lucide-react";

export default function ContactModal({ open, setOpen, product }) {
    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* Overlay */}
                    <motion.div
                        className="fixed inset-0 bg-black/40 z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpen(false)}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 50 }}
                        transition={{ duration: 0.3 }}
                        className="fixed z-50 top-1/2 left-1/2 w-[90%] p-4 max-w-2xl -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg overflow-hidden"
                    >

                        <div className="grid md:grid-cols-2 gap-8 relative">
                            <button className="absolute -top-2 -right-1 text-gray-800 hover:text-black" onClick={() => setOpen(false)}>
                                <X />
                            </button>

                            <div className="md:flex flex-col hidden">
                                <div className="border border-gray-200 rounded-lg w-auto h-60">
                                    <img
                                        src={product.media?.[0]?.url}
                                        alt={product.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <h3 className="font-semibold mt-2 text-[#0A5B93]">
                                    {product.name}
                                </h3>
                                <div className='flex items-center justify-between mt-1'>
                                    {product.brandName && (
                                        <div className="flex bg-[#0A5B93] items-center gap-1 text-xs text-white px-2 py-1 rounded-xl">
                                            <Tag size={14} className="text-white" />
                                            <span>{product.brandName}</span>
                                        </div>
                                    )}

                                    <div className="flex items-center text-sm font-semibold text-gray-800 justify-center">
                                        <IndianRupee size={14} className="text-[#0A5B93] -mt-0.5" />
                                        {product.price ? product.price : "On Request"}
                                    </div>
                                </div>
                                <div className='flex items-center justify-between mt-1'>
                                    {product.supplierId?.name && (
                                        <div className="flex items-center gap-1 text-gray-800">
                                            <Store size={14} className="text-[#0A5B93]" />
                                            <span>{product.supplierId.name}</span>
                                        </div>
                                    )}

                                    <div className="flex items-center gap-1 text-gray-800">
                                        <MapPin size={14} className="text-[#0A5B93]" />
                                        <span>Delhi</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h2 className="font-semibold text-lg text-[#D01132] text-center">
                                    Contact Supplier
                                </h2>
                                <div className="flex items-center border rounded-lg px-2 border-gray-400">
                                    <User size={16} className="text-[#0A5B93]" />
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full p-2 outline-none text-black"
                                    />
                                </div>

                                <div className="flex items-center border rounded-lg px-2 border-gray-400">
                                    <Mail size={16} className="text-[#0A5B93]" />
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full p-2 outline-none text-black"
                                    />
                                </div>

                                <div className="flex items-center border rounded-lg px-2 border-gray-400">
                                    <Phone size={16} className="text-[#0A5B93]" />
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="w-full p-2 outline-none text-black"
                                    />
                                </div>

                                <div className="flex items-start border rounded-lg px-2 border-gray-400">
                                    <MessageCircle size={16} className="text-[#0A5B93] mt-3" />
                                    <textarea
                                        type="text"
                                        placeholder="Your Message"
                                        className="w-full p-2 outline-none text-black"
                                    />
                                </div>

                                <button className="w-full bg-[#0A5B93] text-white py-2 rounded-lg">
                                    Send Inquiry
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}