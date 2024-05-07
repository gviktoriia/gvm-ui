"use client";

import Hero from "./components/MainPage/Hero/Hero";
import About from "./components/MainPage/About/About";
import Security from "./components/MainPage/Security/Security";
import Advertisement from "./components/MainPage/Advertisement/Advertisement";
import Price from "./components/MainPage/Price/Price";
import CTASection from "./components/MainPage/CTASection/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <Security />
      <Advertisement />
      <About />
      <Price />
      <CTASection />
    </>
  );
}
