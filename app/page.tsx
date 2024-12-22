import Image from "next/image";
import Hero from "./Hero";
import Features from "./Features";
import Discover from "./Discover";
import Ayurvedic from "./Ayurvedic";

export default function Home() {
  return (
    <>
    {/* <h1>Hii this is</h1> */}
    <Hero/>
    <Features/>
    <Discover/>
    <Ayurvedic/>
    </>
  );
}
