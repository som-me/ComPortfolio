import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Minterest from "./components/Minterest";
import Works from "./components/Works";
import Footer from "./components/Footer";
import Aesthetics from "./components/Aesthetics";
import Brand from "./components/Brand";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Banner />
      <Minterest />
      <Works />
      <Aesthetics />
      <Brand />
      <Footer />
    </>
  );
}
