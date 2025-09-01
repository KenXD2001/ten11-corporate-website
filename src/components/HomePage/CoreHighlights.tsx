"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "../common/Button";
import HomePillar01 from "@/assets/images/Home/HomePillars01.webp";
import HomePillar02 from "@/assets/images/Home/HomePillars02.webp";
import HomePillar03 from "@/assets/images/Home/HomePillars03.webp";

const cards = [
  {
    id: 1,
    img: HomePillar01,
    title: "Lounge digital kiosk → Innovation in Design",
    subtitle: "India’s first all-digital railway lounge sets new industry standards.",
  },
  {
    id: 2,
    img: HomePillar02,
    title: "Smiling staff welcoming guests → Operational Excellence",
    subtitle: "Over 1,000,000 travelers served by 300+ trained professionals.",
  },
  {
    id: 3,
    img: HomePillar03,
    title: "Traveler enjoying coffee and comfort → Passenger-Centric Care",
    subtitle: "Luxury, hygiene, and warmth are at the heart of every journey.",
  },
];

export default function HighlightsGridModern() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cards.forEach((_, idx) => {
            setTimeout(() => {
              setVisibleIndexes((prev) => [...prev, idx]);
            }, idx * 200);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const middleIndex = Math.floor(cards.length / 2);

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-primary text-foreground overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div
          className={`mb-12 sm:mb-16 text-center transform transition-all duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]
            ${visibleIndexes.length ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-light text-white mb-4">
            The Three Pillars of Excellence
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-xl sm:max-w-2xl mx-auto">
            Travel isn’t just about where you’re going, it’s about how you feel along the way. At Ten 11 Hospitality, every moment matters. Comfort. Care. Convenience - redefined
          </p>
        </div>

        {/* Modern Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {cards.map((card, idx) => {
            const isVisible = visibleIndexes.includes(idx);
            const isHovered = hoveredIndex === idx;
            const isMiddle = idx === middleIndex;

            // Determine scale
            const scaleClass =
              isHovered
                ? "scale-105"
                : isMiddle && hoveredIndex === null
                ? "scale-105"
                : "scale-100";

            const shadowClass =
              isHovered || (isMiddle && hoveredIndex === null)
                ? "shadow-2xl"
                : "shadow-lg";

            return (
              <div
                key={card.id}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`flex flex-col bg-white rounded-2xl overflow-hidden transform transition-all duration-500 p-4 sm:p-5 md:p-6 ${scaleClass} ${shadowClass} 
                  ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                {/* Image with Curtain Reveal */}
                <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80 rounded-xl overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-primary z-30 transform transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]
                      ${isVisible ? "-translate-y-full" : "translate-y-0"}`}
                    style={{ transitionDelay: `${idx * 150}ms` }}
                  ></div>
                  <div
                    className={`absolute inset-0 bg-background z-20 transform transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]
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

                {/* Card Content */}
                <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow text-center">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-gray-900">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">{card.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-8 sm:mt-12 text-center">
          <Button
            variant="outline"
            className="group inline-flex items-center bg-background text-foreground hover:bg-primary hover:text-white transition-colors duration-300 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5"
          >
            <span>Explore More</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
}
