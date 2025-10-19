import { BrHead1, BrHead2 } from "../content.js";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Brand() {
    return (
        <section className="bg-[#101010] pt-12 md:pt-36">
            {/* Image */}
            <div className="flex items-center justify-center">
                <img
                    src="/Favicon.svg"
                    alt="Brand Identity"
                    className="rotate-64 h-60 md:h-120"
                />
            </div>

            {/* Heading */}
            <h2 className="mt-12 px-8 md:px-36 md:mt-24 text-lg md:text-5xl leading-snug tracking-wider font-medium">
                <span className="text-white">{BrHead1}</span>{" "}
                <span className="text-[#b0b0b0]">{BrHead2}</span>
            </h2>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-12 md:mt-16 px-8 md:px-36">
                {/* Instagram */}
                <a
                    href="https://www.instagram.com/som_meher._/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-white transition-colors duration-300 text-2xl"
                >
                    <FaInstagram />
                </a>

                {/* LinkedIn */}
                <a
                    href="https://www.linkedin.com/in/som-meher"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-white transition-colors duration-300 text-2xl"
                >
                    <FaLinkedinIn />
                </a>
            </div>

            {/* Divider Line */}
            <div className="mt-8 md:mt-16 w-full h-[1px] bg-white/35"></div>
        </section>
    );
}
