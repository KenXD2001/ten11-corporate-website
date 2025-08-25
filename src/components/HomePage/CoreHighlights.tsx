"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import HomeCoreImage from "@/assets/images/Home/HomeCore0101.webp";

const highlights = [
  {
    title: "Innovation in Design",
    description:
      "India’s first all-digital railway lounge sets new industry standards.",
  },
  {
    title: "Operational Excellence",
    description:
      "Over 1,000,000 travelers served by 300+ trained professionals.",
  },
  {
    title: "Passenger-Centric Care",
    description:
      "Luxury, hygiene, and warmth are at the heart of every journey.",
  },
];

export default function CoreHighlights() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto slide highlights
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % highlights.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-primary text-white py-44 px-34">
      <div className="mx-auto">
        {/* Top Section */}
        <div className="mb-20 w-5/6 mx-0">
          <div className="flex items-center gap-10 mb-4">
            <h2 className="text-lg uppercase tracking-widest text-background/90">
              CORE HIGHLIGHTS
            </h2>
            <div className="border-b-2 border-background/90 w-[100px]"></div>
          </div>

          <h3 className="text-4xl md:text-5xl font-light leading-tight">
            At Ten11 Hospitality, we excel in innovation, operations, and
            passenger-centric care — redefining every journey experience.
          </h3>
        </div>

        {/* Bottom Section: Image + Highlights */}
        <div className="flex flex-col lg:flex-row gap-16 items-start justify-center mx-auto max-w-[1280px]">
          {/* Right Image */}
          <div className="lg:w-auto relative">
            <div
              className="relative overflow-hidden shadow-2xl"
              style={{ width: "600px", height: "800px" }}
            >
              <Image
                src={HomeCoreImage}
                alt="Lounge interior with modern design"
                fill
                className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>

          {/* Right Highlights */}
          <div className="lg:w-1/2 flex flex-col justify-center space-y-12">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className={`transition-opacity duration-700 ease-in-out ${
                  index === activeIndex ? "opacity-100" : "opacity-60"
                }`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <h4 className="text-2xl md:text-3xl lg:text-4xl font-light mb-4">
                  {highlight.title}
                </h4>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
