"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import HomeProjects01 from "@/assets/images/Home/HomeProjects01.webp";
import HomeProjects02 from "@/assets/images/Home/HomeProjects02.webp";
import HomeProjects03 from "@/assets/images/Home/HomeProjects03.webp";

const projects = [
  {
    location: "New Delhi",
    title: "New Delhi – IRCTC Executive Lounge",
    description: "Premium service and comfort in India's busiest station.",
    imgSrc: HomeProjects01,
    alt: "New Delhi IRCTC Executive Lounge",
  },
  {
    location: "Chennai",
    title: "Chennai Central – INEJ Lounge",
    description: "Contemporary and spacious, crafted for today's travelers.",
    imgSrc: HomeProjects02,
    alt: "Chennai Central INEJ Lounge",
  },
  {
    location: "Mumbai",
    title: "Mumbai Central – INEJ Digital Lounge",
    description:
      "India's first all-digital lounge, changing hospitality with technology.",
    imgSrc: HomeProjects03,
    alt: "Mumbai Central INEJ Digital Lounge",
  },
];

export default function ProjectsOverview() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  // Observe section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          projects.forEach((_, idx) => {
            setTimeout(() => {
              setVisibleIndexes((prev) => [...prev, idx]);
            }, idx * 300); // stagger 300ms each
          });
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[var(--background)] text-[var(--foreground)] py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">

        {/* Top Section */}
        <div
          className={`mx-auto max-w-4xl transform transition-all duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]
            ${visibleIndexes.length ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6 mb-4 justify-center sm:justify-start">
            <h2 className="text-sm sm:text-base uppercase tracking-widest text-[var(--foreground)]/90">
              PROJECTS
            </h2>
            <div className="border-b-2 border-[var(--foreground)]/90 w-16 sm:w-24"></div>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-center sm:text-left text-[var(--foreground)]">
            Discover our flagship lounges across India — where comfort, design, and technology converge.
          </h3>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {projects.map((item, idx) => {
            const isVisible = visibleIndexes.includes(idx);
            return (
              <div
                key={idx}
                className={`flex flex-col space-y-4 sm:space-y-6 transform transition-all duration-1000
                  ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
              >
                {/* Detail Section */}
                <div className="text-center lg:text-left flex flex-col gap-1 sm:gap-2">
                  <span className="text-xs sm:text-sm md:text-base text-[var(--primary)] block">{item.location}</span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-[var(--foreground)] leading-snug">
                    {item.title}
                  </h3>
                </div>

                {/* Card Section with Curtain Reveal */}
                <div className="relative overflow-hidden group cursor-pointer">
                  {/* Curtain layers */}
                  <div
                    className={`absolute inset-0 bg-[var(--foreground)] z-30 transform transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]
                      ${isVisible ? "-translate-y-full" : "translate-y-0"}`}
                    style={{ transitionDelay: `${idx * 200}ms` }}
                  ></div>
                  <div
                    className={`absolute inset-0 bg-[var(--primary)] z-20 transform transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]
                      ${isVisible ? "-translate-y-full" : "translate-y-0"}`}
                    style={{ transitionDelay: `${idx * 200 + 150}ms` }}
                  ></div>

                  {/* Image */}
                  <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 z-10">
                    <Image
                      src={item.imgSrc}
                      alt={item.alt}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-[var(--foreground)]/90 text-[var(--background)] p-4 sm:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-xs sm:text-sm md:text-base mb-2 sm:mb-4">{item.description}</p>
                    <a className="text-[var(--primary)] font-semibold hover:underline text-sm sm:text-base">Learn More</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
