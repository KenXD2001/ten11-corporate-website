"use client";

import { useEffect, useState } from "react";
import HomeCoreImage from "@/assets/images/Home/HomeCore0101.webp";

export default function ProjectsHero() {
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
        style={{
          backgroundImage: `url(${HomeCoreImage.src})`,
          transform: `translateY(${offsetY}px)`,
          height: "110%",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text */}
      <div className="relative text-center px-6 z-10">
        <h1 className="text-6xl md:text-8xl font-base text-white mb-4">
          Our Projects
        </h1>
        <p className="text-lg md:text-2xl text-white/80">
          Every project we build focuses on a single goal — to provide luxury,
          comfort, and ease for travelers.
        </p>
      </div>
    </section>
  );
}
