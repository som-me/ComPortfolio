"use client";
import { useEffect, useRef } from "react";
import { bannerText, bannerSubText, heroVideo, heroVideoDesk } from "../content.js";

export default function Banner() {
    const videoRefMobile = useRef(null);
    const videoRefDesktop = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const video = entry.target;
                    if (entry.isIntersecting) {
                        video.play();
                    } else {
                        video.pause();
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (videoRefMobile.current) observer.observe(videoRefMobile.current);
        if (videoRefDesktop.current) observer.observe(videoRefDesktop.current);

        return () => {
            if (videoRefMobile.current) observer.unobserve(videoRefMobile.current);
            if (videoRefDesktop.current) observer.unobserve(videoRefDesktop.current);
        };
    }, []);

    return (
        <section className="bg-[#101010]">
            <div className="text-white pt-16 md:pt-32 mt-16 md:mt-24 flex flex-col px-6 md:px-108 items-center">
                <span className="text-3xl leading-10 md:leading-15 tracking-wide md:tracking-wider md:text-4xl lg:text-5xl text-center">
                    {bannerText}
                </span>
                <span className="text-sm tracking-wide md:text-lg lg:text-xl text-center text-[#B0B0B0] pt-3 py-16">
                    {bannerSubText}
                </span>
            </div>

            <div className="px-2 py-6 md:mt-10 flex items-center justify-center">
                {/* Mobile video */}
                <video
                    ref={videoRefMobile}
                    loop
                    muted
                    playsInline
                    className="shadow-lg max-w-full block md:hidden pb-20"
                >
                    <source src={heroVideo.mp4} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Desktop video */}
                <video
                    ref={videoRefDesktop}
                    loop
                    muted
                    playsInline
                    className="shadow-lg max-w-full hidden md:block pb-12"
                >
                    <source src={heroVideoDesk.mp4} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
}
