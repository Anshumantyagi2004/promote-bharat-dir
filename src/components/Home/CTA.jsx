"use client"
import React from "react";
import { motion } from "framer-motion";
import { Package, Phone, Send } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-[#0A5B93] py-10 px-4 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl text-center text-white"
      >
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Get free quotes from multiple sellers
        </h2>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl p-4 md:p-6 flex flex-col md:flex-row gap-4 shadow-lg"
        >
          {/* Product Input */}
          <div className="flex items-center gap-2 border border-gray-400 rounded-lg px-3 py-2 flex-1">
            <Package className="text-gray-800" size={18} />
            <input
              type="text"
              placeholder="Product / Service"
              className="w-full outline-none text-sm text-gray-800"
            />
          </div>

          {/* Phone Input */}
          <div className="flex items-center gap-2 border border-gray-400 rounded-lg px-3 py-2 flex-1">
            <Phone className="text-gray-800" size={18} />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full outline-none text-sm text-gray-800"
            />
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 bg-[#0A5B93] text-white px-6 py-2 rounded-lg font-medium"
          >
            <Send size={16} />
            Submit
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}