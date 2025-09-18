"use client";

import { useEffect, useState } from "react";

export default function ProjectOverviewHero() {
  const [offsetY, setOffsetY] = useState(0);

  // Handle parallax scroll effect
  const handleScroll = () => {
    setOffsetY(-window.scrollY * 0.04); // subtle parallax
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        src="/videos/ProjectOverviewHeroVideo.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/fallback.jpg" // optional fallback
        className="absolute inset-0 w-full h-full object-cover opacity-0 animate-fadeIn"
        style={{
          transform: `translateY(${offsetY}px)`,
        }}
      />

      {/* Dark Overlay for text readability */}
      {/* <div className="absolute inset-0 bg-black/10"></div> */}

      {/* Fade-in animation using Tailwind + custom keyframes */}
      <style jsx>{`
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1.2s forwards;
        }
      `}</style>
    </section>
  );
}
