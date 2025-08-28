"use client";

import { useEffect, useState } from "react";

export default function InvestorsHero() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    // Negative multiplier for opposite movement
    setOffsetY(-window.scrollY * 0.05);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover transition-transform duration-500 ease-out"
        // style={{
        //   backgroundImage: "url('/images/AboutUS/Warmloungeinterior.jpeg')",
        //   transform: `translateY(${offsetY}px)`,
        // }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Text */}
      <div className="relative text-center px-6 z-10">
        <h1 className="text-6xl md:text-8xl font-base text-white mb-4">
          Partnering for the Future of Travel
        </h1>
        <p className="text-lg md:text-2xl text-white/80">
          Ten 11 Hospitality welcomes visionary investors who believe in
          transforming the way people travel. We are redefining transit
          hospitality by creating premium lounges that bring together comfort,
          technology, and service excellence.
        </p>
      </div>
    </section>
  );
}
