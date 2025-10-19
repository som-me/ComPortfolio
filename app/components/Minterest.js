"use client";
import { MinTitle, MinTextOne, MinTextTwo } from "../content.js";

export default function Minterest() {
    return (
        <section className="bg-[#101010] pb-24 overflow-hidden">
            {/* Title */}
            <div className="text-white px-6 pt-12 md:pt-2 text-xl md:text-4xl font-semibold tracking-wider">
                {MinTitle}
            </div>

            {/* Responsive Layout */}
            <div className="flex flex-col md:grid md:grid-cols-2 gap-6 px-6 mt-12 md:pb-12">
                {/* Image Block */}
                <div className="relative flex items-center justify-center bg-[#0c0c0c] rounded-2xl border border-[#222] shadow-md overflow-hidden">
                    <img
                        src="/Minterest1.svg"
                        alt="Minterest Preview"
                        className="w-full h-[32vh] md:h-[64vh] object-cover opacity-90"
                    />
                    <h1 className="absolute top-6 md:top-8 left-6 text-[#b0b0b0] tracking-wider md:tracking-widest text-sm md:text-3xl">
                        {MinTextOne}
                    </h1>
                </div>

                {/* Video Block */}
                <div className="relative flex items-center justify-center bg-[#f5f5f5] rounded-2xl border border-[#e5e5e5] shadow-md overflow-hidden">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-[32vh] md:h-[64vh] object-cover"
                    >
                        <source src="/Minterest2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h1 className="absolute top-6 md:top-8 left-6 text-black tracking-wider md:tracking-widest text-sm md:text-3xl">
                        {MinTextTwo}
                    </h1>
                </div>
            </div>
        </section>
    );
}
