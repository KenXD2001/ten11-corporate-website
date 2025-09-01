"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import HomeCoreImage from "@/assets/images/Home/HomeCore0101.webp";

const points = [
  "Work alongside experienced global leaders in hospitality",
  "Be part of first-of-its-kind lounge projects in India",
  "Fast-track growth in a rapidly expanding organization",
  "A collaborative and inclusive team environment",
  "Learn from the best in the business",
];

export default function WhyWorkWithUs() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % points.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-primary text-white py-44 px-8 md:px-32">
      <div className="mx-auto max-w-7xl">
        {/* Top Section */}
        <div className="mb-20 w-full md:w-5/6">
          <div className="flex items-center gap-10 mb-4">
            <h2 className="text-lg uppercase tracking-widest text-background/90">
              WHY WORK WITH US
            </h2>
            <div className="border-b-2 border-background/90 w-[100px]" />
          </div>

          <h3 className="text-4xl md:text-5xl font-light leading-tight">
            Join Ten 11 Hospitality to grow with a team that’s redefining lounges across India — innovation, collaboration, and excellence await.
          </h3>
        </div>

        {/* Bottom Section: Image + Highlights */}
        <div className="flex flex-col lg:flex-row gap-16 items-start justify-center mx-auto max-w-[1280px]">
          {/* Left Image */}
          <div className="lg:w-1/2 relative">
            <div className="relative w-full h-[800px] overflow-hidden shadow-2xl">
              <Image
                src={HomeCoreImage}
                alt="Lounge interior with modern design"
                fill
                className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                priority
              />
            </div>
          </div>

          {/* Right Points */}
          <div className="lg:w-1/2 flex flex-col justify-center space-y-12" aria-live="polite">
            {points.map((point, index) => (
              <div
                key={index}
                className={`transition-opacity duration-700 ease-in-out cursor-pointer ${
                  index === activeIndex ? "opacity-100" : "opacity-60"
                }`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <h4 className="text-2xl md:text-3xl lg:text-4xl font-light mb-4">
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
