import "./globals.css";
import { Geist, Geist_Mono, Roboto, Plaster } from "next/font/google";

import { ReactLenis } from './utils/lenis'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const plaster = Plaster({
  variable: "--font-plaster",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Som - UX designer",
  description: "Designers Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="favicon.svg" />
      </head>
      <ReactLenis root>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${plaster.variable} antialiased`}
        >
          {children}
        </body>
      </ReactLenis>

    </html>
  );
}
