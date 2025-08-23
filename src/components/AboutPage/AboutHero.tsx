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
    <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
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
      <div className="relative text-center px-6 z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Every Journey Deserves Comfort.
        </h1>
        <p className="text-lg md:text-2xl text-white/80">
          Discover how Ten11 Hospitality transforms waiting into an experience
          worth remembering.
        </p>
      </div>
    </section>
  );
}
