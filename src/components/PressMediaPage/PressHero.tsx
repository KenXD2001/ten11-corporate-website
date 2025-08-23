"use client";

import { useEffect, useState } from "react";

export default function PressHero() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(-window.scrollY * 0.05);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-center bg-cover transition-transform duration-500 ease-out"
        style={{
          backgroundImage: "url('/images/Press/media-hero.jpg')",
          transform: `translateY(${offsetY}px)`,
        }}
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Text */}
      <div className="relative text-center px-6 z-10 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          In the News
        </h1>
        <p className="text-lg md:text-xl text-white/80">
          From innovation to growth, our work is often featured in top
          publications. Stay updated with our journey.
        </p>
      </div>
    </section>
  );
}
