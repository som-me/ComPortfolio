import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Banner />
    </>
  );
}
