"use client";

import { useEffect, useState } from "react";

export default function AboutHero() {
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
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover transition-transform duration-500 ease-out"
        style={{
          backgroundImage: "url('/images/AboutUS/Warmloungeinterior.jpeg')",
          transform: `translateY(${offsetY}px)`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Text */}
      <div className="relative z-10 px-4 sm:px-6 md:px-12 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-white mb-4 leading-tight">
          About Us
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/80 max-w-3xl mx-auto">
          Every Journey Deserves Comfort
        </p>
      </div>
    </section>
  );
}
