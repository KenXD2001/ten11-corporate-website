"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../common/Button";
import { ArrowRight } from "lucide-react";
import Media1 from "@/assets/images/Home/HomePress04.webp";
import Media2 from "@/assets/images/Home/HomePress02.webp";
import Media3 from "@/assets/images/Home/HomePress03.webp";

const newsCards = [
  {
    id: 1,
    img: Media1,
    date: "August 12, 2025",
    title: "Our Digital Lounge Sets New Benchmark in Hospitality",
  },
  {
    id: 2,
    img: Media2,
    date: "July 28, 2025",
    title: "National Expansion: Opening New Lounges Across Cities",
  },
  {
    id: 3,
    img: Media3,
    date: "June 30, 2025",
    title: "Recognized Among Top Innovative Hospitality Brands",
  },
];

export default function PressMedia() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          newsCards.forEach((_, idx) => {
            setTimeout(() => {
              setVisibleIndexes((prev) => [...prev, idx]);
            }, idx * 250); // stagger each card
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
      className="w-full py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-background text-foreground overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div
          className={`mb-12 sm:mb-16 md:mb-20 w-full md:w-5/6 mx-auto transform transition-all duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]
            ${visibleIndexes.length ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 md:gap-10 mb-4">
            <h2 className="text-base sm:text-lg uppercase tracking-widest">In The Spotlight</h2>
            <div className="border-b-2 w-16 sm:w-[100px] border-foreground/50"></div>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
            At Ten11 Hospitality, we redefine journeys with innovation, efficiency, and passenger care.
          </h3>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {newsCards.map((card, idx) => {
            const isVisible = visibleIndexes.includes(idx);

            return (
              <div
                key={card.id}
                className={`flex flex-col overflow-hidden transform transition-all duration-1000
                  ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
              >
                {/* Image Section with Curtain Reveal */}
                <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-xl">
                  {/* Curtain layers */}
                  <div
                    className={`absolute inset-0 bg-background z-30 transform transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]
                      ${isVisible ? "-translate-y-full" : "translate-y-0"}`}
                    style={{ transitionDelay: `${idx * 150}ms` }}
                  ></div>
                  <div
                    className={`absolute inset-0 bg-primary z-20 transform transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]
                      ${isVisible ? "-translate-y-full" : "translate-y-0"}`}
                    style={{ transitionDelay: `${idx * 150 + 100}ms` }}
                  ></div>

                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>

                {/* Content Section */}
                <div className="p-4 sm:p-6 flex flex-col flex-grow group">
                  <span className="text-sm text-muted mb-2">{card.date}</span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-light mb-2 sm:mb-3 group-hover:underline transition">
                    <Link href="/press-coverage">{card.title}</Link>
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explore Coverage Button */}
        <div className="mt-8 sm:mt-12 text-center">
          <Button variant="outline" className="group inline-flex items-center">
            <span>Explore Coverage</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
