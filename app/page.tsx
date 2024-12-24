import Image from "next/image";
import Hero from "./Hero";
import Features from "./Features";
import Discover from "./Discover";
import Ayurvedic from "./Ayurvedic";
import Restore from "./Restore";
import HeroWithCarousel from "./Approach";
import Stories from "./Stories";
import AyurvedaExpertes from "./AyurvedaExpertes";
import AmrutamApp from "./AmrutamApp";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
    {/* <h1>Hii this is</h1> */}
    <div className="max-w-screen overflow-x-hidden ">
    <Hero/>
    <Features/>
    <Discover/>
    <Ayurvedic/>
    <Restore/>
    <HeroWithCarousel/>
    <Stories/>
    <AyurvedaExpertes/>
    <AmrutamApp/>
    <Footer/>

    </div>

    </>
  );
}
