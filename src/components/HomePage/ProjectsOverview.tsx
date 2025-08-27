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
          // Animate cards one by one with delay
          projects.forEach((_, idx) => {
            setTimeout(() => {
              setVisibleIndexes((prev) => [...prev, idx]);
            }, idx * 300); // stagger 300ms each
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[var(--background)] dark:bg-[var(--background)] text-[var(--foreground)] py-24 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Top Section */}
        <div
          className={`mb-20 w-5/6 mx-0 transform transition-all duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]
            ${visibleIndexes.length ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
        >
          <div className="flex items-center gap-10 mb-4">
            <h2 className="text-lg uppercase tracking-widest text-[var(--foreground)]/90">
              PROJECTS
            </h2>
            <div className="border-b-2 border-[var(--foreground)]/90 w-[100px]"></div>
          </div>

          <h3 className="text-4xl md:text-5xl font-light leading-tight text-[var(--foreground)]">
            Discover our flagship lounges across India — where comfort,
            design, and technology converge.
          </h3>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((item, idx) => {
            const isVisible = visibleIndexes.includes(idx);
            return (
              <div
                key={idx}
                className={`flex flex-col space-y-8 transform transition-all duration-1000
                  ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
              >
                {/* Detail Section */}
                <div className="text-center lg:text-left flex flex-col gap-2">
                  <span className="text-sm text-[var(--primary)] block">{item.location}</span>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--foreground)]">
                    {item.title}
                  </h3>
                </div>

                {/* Card Section with Curtain Reveal */}
                <div className="relative overflow-hidden group cursor-pointer pl-15">
                  {/* Curtain layers */}
                  <div
                    className={`absolute inset-0 bg-[var(--foreground)] z-30 transform transition-transform duration-600 ease-[cubic-bezier(0.65,0,0.35,1)]
                      ${isVisible ? "-translate-y-full" : "translate-y-0"}`}
                    style={{ transitionDelay: `${idx * 200}ms` }}
                  ></div>
                  <div
                    className={`absolute inset-0 bg-[var(--primary)] z-20 transform transition-transform duration-600 ease-[cubic-bezier(0.65,0,0.35,1)]
                      ${isVisible ? "-translate-y-full" : "translate-y-0"}`}
                    style={{ transitionDelay: `${idx * 200 + 150}ms` }}
                  ></div>

                  {/* Image */}
                  <div className="relative w-full h-80 z-10">
                    <Image
                      src={item.imgSrc}
                      alt={item.alt}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute bottom-0 left-[60px] right-0 bg-[var(--foreground)]/90 text-[var(--background)] p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-[var(--accent-light)] mb-4">{item.description}</p>
                    <a className="text-[var(--primary)] font-semibold hover:underline">Learn More</a>
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
