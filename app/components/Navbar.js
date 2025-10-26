"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { navbarLinks, navbarTitle, LandingPageDash } from "../content.js";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("");
    const router = useRouter();

    const handleClick = (id) => {
        setActiveLink(id);
        setMenuOpen(false);

        // Route to the corresponding page
        if (id === "home") router.push("/");
        else router.push(`/${id}`);
    };

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [menuOpen]);

    return (
        <nav className="relative w-full flex justify-between items-center px-6 md:px-12 pt-5 font-[var(--font-roboto)] z-50">
            {/* Nav Logo */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => router.push("/")}>
                <img
                    src="/logo.svg"
                    alt="logo"
                    className="h-8 w-auto rounded object-contain"
                />
                <span className="flex items-center space-x-2">
                    {LandingPageDash}
                    <span className="text-gray-600 text-md">{navbarTitle}</span>
                </span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-8">
                {navbarLinks.map((link) => (
                    <button
                        key={link.id}
                        onClick={() => handleClick(link.id)}
                        className="text-black text-md hover:text-gray-600 transition-colors"
                    >
                        {link.label}
                    </button>
                ))}
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden z-50">
                {menuOpen ? (
                    <FiX
                        size={28}
                        className="text-black cursor-pointer transition-transform duration-100"
                        onClick={() => setMenuOpen(false)}
                    />
                ) : (
                    <FiMenu
                        size={28}
                        className="text-black cursor-pointer transition-transform duration-100"
                        onClick={() => setMenuOpen(true)}
                    />
                )}
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div
                    className="fixed inset-0 top-[70px] bg-black/95 backdrop-blur-sm flex flex-col items-start space-y-6 py-8 pl-8 w-full h-[calc(100vh-70px)] md:hidden z-40 animate-fadeSlideDown"
                >
                    {navbarLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => handleClick(link.id)}
                            className={`text-2xl ${activeLink === link.id ? "text-gray-400" : "text-white"} transition-colors`}
                        >
                            {link.label}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
}
