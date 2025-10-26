"use client";
import React, { useRef, useState } from "react";
import { contactContent } from "../content";
import {
    FaInstagram,
    FaBehance,
    FaLinkedin,
    FaDribbble,
    FaPinterestP,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import emailjs from "@emailjs/browser";

export default function TempContact() {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setIsSending(false);
                    setIsSent(true);
                    form.current.reset();
                    setTimeout(() => setIsSent(false), 4000);
                },
                (error) => {
                    setIsSending(false);
                    console.error("❌ FAILED...", error.text);
                }
            );
    };

    const { heading, subText, fields, altContact, footer } = contactContent;

    return (
        <section className="bg-black text-white min-h-screen px-6 md:px-16 py-20 flex flex-col justify-between">
            {/* Header */}
            <div>
                <div className="relative">
                    <h1 className="text-6xl md:text-8xl font-extrabold tracking-widest">
                        {heading}
                    </h1>
                    <button className="absolute top-2 right-0 bg-white text-black text-sm md:text-base px-4 py-1 rounded-full rotate-6 transition-transform hover:rotate-0 hover:scale-105">
                        {subText}
                    </button>
                </div>

                {/* Form */}
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 max-w-4xl"
                >
                    <input
                        type="text"
                        name="name"  // ✅ must match your EmailJS {{name}}
                        placeholder={fields.name}
                        required
                        className="w-full bg-transparent border-b border-gray-600 focus:border-white py-2 outline-none transition-all duration-300"
                    />
                    <input
                        type="text"
                        name="company"  // optional
                        placeholder={fields.company}
                        className="w-full bg-transparent border-b border-gray-600 focus:border-white py-2 outline-none transition-all duration-300"
                    />
                    <input
                        type="email"
                        name="email"  // ✅ must match your EmailJS {{email}}
                        placeholder={fields.email}
                        required
                        className="w-full bg-transparent border-b border-gray-600 focus:border-white py-2 outline-none transition-all duration-300"
                    />
                    <input
                        type="text"
                        name="title"  // ✅ must match your EmailJS {{title}}
                        placeholder={fields.phone}
                        className="w-full bg-transparent border-b border-gray-600 focus:border-white py-2 outline-none transition-all duration-300"
                    />
                    <div className="md:col-span-2 relative">
                        <textarea
                            name="message"  // ✅ must match your EmailJS {{message}}
                            placeholder={fields.message}
                            required
                            rows="3"
                            className="w-full bg-transparent border-b border-gray-600 focus:border-white py-2 outline-none transition-all duration-300"
                        />
                        <button
                            type="submit"
                            disabled={isSending}
                            className="absolute right-0 top-0 translate-y-2 text-2xl hover:translate-x-1 transition-transform"
                        >
                            {isSending ? "..." : <FiArrowRight />}
                        </button>
                    </div>
                </form>

                {/* Status Message */}
                <div className="mt-6 text-sm">
                    {isSending && <p className="text-gray-400">Sending...</p>}
                    {isSent && (
                        <p className="text-green-400">
                            Message sent successfully! I’ll get back to you soon.
                        </p>
                    )}
                </div>

                {/* Alternative Contact */}
                <div className="mt-12 text-right text-sm text-gray-300">
                    <p>{altContact.question}</p>
                    <a
                        href={`mailto:${altContact.email}`}
                        className="text-white hover:underline hover:text-gray-200 transition-all"
                    >
                        {altContact.email}
                    </a>
                </div>
            </div>

            {/* Footer */}
            <footer className="mt-24 border-t border-gray-700 pt-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 gap-6">
                <div className="flex items-center gap-3">
                    <div className="text-2xl font-bold">CB</div>
                    <span>{footer.Name}</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <span>{footer.follow}</span>
                    <div className="flex gap-4 text-xl">
                        {[FaInstagram, FaBehance, FaLinkedin, FaDribbble, FaPinterestP].map(
                            (Icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="hover:text-white transition-transform transform hover:scale-110"
                                >
                                    <Icon />
                                </a>
                            )
                        )}
                    </div>
                </div>

                <p className="text-xs text-gray-500 mt-6 md:mt-0 text-center md:text-right">
                    {footer.developedBy}
                </p>
            </footer>
        </section>
    );
}
