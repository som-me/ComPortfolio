"use client";
import { useRouter } from "next/navigation";
import { AeHead1, AeHead2 } from "../content.js";
import { FiArrowRight } from "react-icons/fi";

export default function Aesthetics() {
    const router = useRouter();

    const handleClick = () => {
        router.push("/contact");
    };
    return (
        <section className="bg-[#101010] pt-12 px-4">
            <div className="relative h-[36vh] md:h-[100vh] w-full flex items-center justify-center bg-[#0c0c0c] rounded-2xl border border-[#222] shadow-lg overflow-hidden group transition-transform">

                {/* Background Image */}
                <img
                    src="/DesignBook.svg"
                    alt="Designers Bay"
                    className="w-full h-[100vh] object-cover opacity-90 object-[85%_center] md:object-center"
                />

                {/* Overlay for better contrast */}
                <div className="absolute inset-0 bg-gradient-to-bl from-white/10 via-transparent to-black/50"></div>

                {/* Text Section (top-left) */}
                <div className="absolute md:max-w-2xl left-8 md:left-12 top-10 md:top-16 z-10">
                    <h2 className="text-2xl md:text-5xl leading-snug font-medium">
                        <span className="text-white">{AeHead1}</span>{" "}
                        <span className="text-[#b0b0b0]">{AeHead2}</span>
                    </h2>
                </div>

                {/* Button (bottom-left) */}
                <div className="absolute bottom-8 md:bottom-24 left-8 md:left-12 z-10">
                    <button
                        onClick={handleClick}
                        className="px-6 md:px-8 py-2 md:py-4 rounded-full border border-white text-white text-lg md:text-3xl font-medium flex items-center gap-2 transition-all duration-300 hover:bg-white hover:text-black group"
                    >
                        Book Now
                        <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                </div>
            </div>
        </section>
    );
}
