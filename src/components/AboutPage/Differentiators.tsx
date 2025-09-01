"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import CoreImage from "@/assets/images/Home/HomeCore0202.webp";

const points = [
  "Excellence in every detail",
  "Innovation-led operations",
  "Experiences tailored to guests’ needs",
  "Modern, stylish lounge designs",
  "Sustainable and scalable growth models",
];

export default function Differentiators() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide points every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % points.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-primary text-white py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Top Section */}
        <div className="mb-12 sm:mb-16 md:mb-20 w-full md:w-5/6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 mb-4">
            <h2 className="text-sm sm:text-base uppercase tracking-widest text-background/90">
              WHAT MAKES US DIFFERENT
            </h2>
            <div className="border-b-2 border-background/90 w-16 sm:w-24"></div>
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light leading-snug sm:leading-tight md:leading-tight">
            We’re not just another service provider — we’re experience creators.
          </h3>
        </div>

        {/* Bottom Section: Image + Points */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start justify-center mx-auto max-w-[1280px]">
          {/* Left Image */}
          <div className="lg:w-auto w-full flex justify-center mb-12 lg:mb-0">
            <div className="relative w-full sm:w-[400px] md:w-[500px] lg:w-[600px] aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
              {/* Replace with Image when ready */}
              {/* <Image
                src={CoreImage}
                alt="Lounge interior with modern design"
                fill
                className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                priority
              /> */}
              <div className="absolute inset-0 bg-background" />
            </div>
          </div>

          {/* Right Points */}
          <div className="lg:w-1/2 flex flex-col justify-center space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
            {points.map((point, index) => (
              <div
                key={index}
                className={`transition-opacity duration-700 ease-in-out cursor-pointer ${
                  index === activeIndex ? "opacity-100" : "opacity-60"
                }`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-2 sm:mb-3">
                  {point}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
