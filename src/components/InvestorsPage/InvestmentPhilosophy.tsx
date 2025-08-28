"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import InvestmentImage from "@/assets/images/Home/HomeCore0102.webp";

const highlights = [
  {
    title: "Strategic Growth",
    description:
      "We focus on expanding our footprint in key transit hubs, ensuring accessibility and visibility.",
  },
  {
    title: "Sustainable Practices",
    description:
      "Our lounges are designed with eco-friendly materials and energy-efficient systems to minimize environmental impact.",
  },
  {
    title: "Innovative Design",
    description:
      "Each lounge features cutting-edge technology and modern aesthetics to enhance passenger experience.",
  },
];

export default function InvestmentPhilosophy() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto slide highlights
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % highlights.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-primary text-black py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Top Section */}
        <div className="mb-20 mx-0">
          <div className="flex items-center gap-10 mb-4">
            <h2 className="text-lg uppercase tracking-widest text-background">
              OUR INVESTMENT PHILOSOPHY
            </h2>
            <div className="border-b-2 border-background w-[100px]"></div>
          </div>

          <h3 className="text-4xl md:text-5xl font-light leading-tight text-background">
            At Ten11 Hospitality, we are committed to delivering exceptional value to our investors through strategic investments, sustainable practices, and innovative designs.
          </h3>
        </div>

        {/* Bottom Section: Image + Highlights */}
        <div className="flex flex-col lg:flex-row gap-24 items-start justify-center mx-auto max-w-[1280px]">
          {/* Right Image */}
          <div className="lg:w-auto relative">
            <div
              className="relative overflow-hidden shadow-2xl"
              style={{ width: "600px", height: "800px" }}
            >
              {/* <Image
                src={InvestmentImage}
                alt="Investment Strategy"
                fill
                className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                priority
              /> */}
              <div className="absolute inset-0 bg-background" />
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
                <h4 className="text-2xl md:text-3xl lg:text-4xl text-background font-light mb-4">
                  {highlight.title}
                </h4>
                <p className="text-lg md:text-xl lg:text-2xl text-background/80 leading-relaxed">
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
