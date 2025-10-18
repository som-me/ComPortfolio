import { heroText, heroCTA, heroCTAtext } from "../content.js";
import "../globals.css";

export default function Hero() {
    return (
        <section className="pt-24 px-6 md:px-24 lg:px-48">
            {/* Hero text */}
            <div className="tracking-wide text-4xl md:text-6xl lg:text-7xl">
                {heroText}
            </div>

            {/* CTA section */}
            <div className="pt-12 flex flex-col md:flex-row lg-flex-row items-start md:items-center gap-8">
                <button
                    className="bg-white hover:shadow-xl border border-black/20 text-black py-4 md:py-5 px-6 md:px-8 rounded-full transition-all duration-300"
                >
                    {heroCTA}
                </button>
                <span className="text-lg text-green-700">{heroCTAtext}</span>
            </div>
        </section>
    );
}
