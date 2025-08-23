"use client";

import { useEffect, useState } from "react";

export default function CareersHero() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(-window.scrollY * 0.05);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-center bg-cover transition-transform duration-500 ease-out"
        style={{
          backgroundImage: "url('/images/Careers/team-lounge.jpg')",
          transform: `translateY(${offsetY}px)`,
        }}
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Text */}
      <div className="relative text-center px-6 z-10 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Grow With India’s Next-Gen Hospitality Brand.
        </h1>
        <p className="text-lg md:text-xl text-white/80">
          We believe in cultivating a workplace culture that celebrates
          creativity, rewards performance, and nurtures personal and professional
          growth.
        </p>
      </div>
    </section>
  );
}
