"use client";

import { useEffect, useState } from "react";

interface Project {
  slug: string;
  location: string;
  title: string;
  description: string;
}

interface ProjectOverviewHeroProps {
  project: Project;
}

export default function ProjectOverviewHero({ project }: ProjectOverviewHeroProps) {
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
        src="/ten11/videos/ProjectOverviewHeroVideo.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/ten11/fallback.jpg" // optional fallback
        className="absolute inset-0 w-full h-full object-cover opacity-0 animate-fadeIn"
        style={{
          transform: `translateY(${offsetY}px)`,
        }}
      />

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Project Title Overlay */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-4">
          {project.title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
          {project.description}
        </p>
      </div>

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
