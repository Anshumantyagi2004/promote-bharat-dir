"use client";
import Link from "next/link";
import Image from "next/image";
import { LogIn, Menu, X, User, LogOut, Bell, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const profileRef = useRef(null);
    const [bellOpen, setBellOpen] = useState(false);
    const bellRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        function handleClickOutside(event) {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setProfileOpen(false);
            }
            if (bellRef.current && !bellRef.current.contains(event.target)) {
                setBellOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="w-full border-b border-b-gray-300 bg-white sticky top-0 z-50 h-16">
            <div className="mx-auto md:px-6 px-2 flex items-center justify-between">
                <div className="flex md:w-auto w-full gap-5 items-center justify-between">
                    <Link href="/">
                        <Image
                            src="/Logo/logo.webp"
                            alt="Promote Bharat"
                            width={200}
                            height={200}
                            className="object-contain h-16 w-50"
                        />
                    </Link>
                    <div className="relative">
                        <MapPin
                            className="absolute left-2 top-1/2 -translate-y-1/2 text-[#D01132]"
                            size={18}
                        />

                        <select className="w-full appearance-none border border-[#D01132] text-gray-700 pl-8 pr-4 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#D01132] bg-white shadow-sm">
                            <option>Select Location</option>
                            <option>Delhi</option>
                            <option>Mumbai</option>
                            <option>Bangalore</option>
                        </select>
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <Link href="https://promote-bharat.vercel.app/register/supplier" className="px-4 py-2.5 text-sm font-medium border text-white rounded-lg bg-[#D01132] hover:bg-[#c0102d]">
                        Register as Supplier
                    </Link>

                    <Link href="https://promote-bharat.vercel.app/register/buyer" className="px-4 py-2.5 text-sm border font-medium text-white bg-[#0A5B93] rounded-lg hover:bg-[#0a5183]">
                        Register as Buyer
                    </Link>

                    <Link href="https://promote-bharat.vercel.app/login" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        <LogIn size={18} />
                        Sign In
                    </Link>
                </div>

                {/* <button className="md:hidden bg-[#0A5B93] px-3 py-2 rounded-md" onClick={() => setOpen(!open)}>
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button> */}
            </div>
        </nav>
    );
}