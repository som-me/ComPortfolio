"use client";
import { useRouter } from "next/navigation";
import { WrTitle, WrHead, WrBody, WrHead2, WrBody2 } from "../content";

export default function Works() {
    const router = useRouter();

    const handleClickA = () => {
        router.push("/DesignHouse");
    };
    const handleClickB = () => {
        router.push("/UniqueStyles");
    };

    return (
        <section className="overflow-hidden bottom-12">
            {/* Title */}
            <div className="relative text-black px-6 pt-14 text-xl md:text-4xl font-bold tracking-wider">
                {WrTitle}
            </div>

            {/* First Block */}
            <div className="flex flex-col gap-6 px-4 mt-12 md:pb-12">
                <div
                    onClick={handleClickA}
                    className="relative max-h-[36vh] md:max-h-[100vh] flex items-center justify-center bg-[#0c0c0c] rounded-2xl border border-[#222] shadow-lg overflow-hidden group cursor-pointer transition-transform"
                >
                    <img
                        src="/Work1.svg"
                        alt="Work Preview"
                        className="w-full h-[48vh] md:h-[100vh] object-cover opacity-90 transform transition-transform duration-300 ease-out group-hover:scale-105"
                    />
                    <div className="absolute left-6 md:left-12 right-12 bottom-12">
                        <h1 className="text-[#f0f0f0] font-extrabold tracking-wider md:tracking-widest text-lg md:text-2xl">
                            {WrHead}
                        </h1>
                        <h3 className="text-[#dddddd] md:tracking-widest">{WrBody}</h3>
                    </div>
                </div>
            </div>

            {/* Second Block */}
            <div className="flex flex-col gap-6 px-4 mt-12 pb-12">
                <div
                    onClick={handleClickB}
                    className="relative max-h-[36vh] md:max-h-[100vh] flex items-center justify-center bg-[#0c0c0c] rounded-2xl border border-[#222] shadow-lg overflow-hidden group cursor-pointer transition-transform"
                >
                    <img
                        src="/Work2.svg"
                        alt="Work Preview"
                        className="w-full h-[48vh] md:h-[100vh] object-cover opacity-90 transform transition-transform duration-300 ease-out group-hover:scale-105"
                    />
                    <div className="absolute left-6 md:left-12 right-12 bottom-12">
                        <h1 className="text-[#f0f0f0] font-extrabold tracking-wider md:tracking-widest text-lg md:text-2xl">
                            {WrHead2}
                        </h1>
                        <h3 className="text-[#dddddd] md:tracking-widest">{WrBody2}</h3>
                    </div>
                </div>
            </div>

            
        </section>
    );
}
