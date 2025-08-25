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
    <section className="w-full bg-primary text-white py-44 px-6 md:px-34">
      <div className="mx-auto max-w-7xl">
        {/* Top Section */}
        <div className="mb-20 w-full md:w-5/6 mx-0">
          <div className="flex items-center gap-10 mb-4">
            <h2 className="text-lg uppercase tracking-widest text-background/90">
              WHAT MAKES US DIFFERENT
            </h2>
            <div className="border-b-2 border-background/90 w-[100px]"></div>
          </div>

          <h3 className="text-4xl md:text-5xl font-light leading-tight">
            We’re not just another service provider — we’re experience creators.
          </h3>
        </div>

        {/* Bottom Section: Image + Points */}
        <div className="flex flex-col lg:flex-row gap-24 items-start justify-center mx-auto max-w-[1280px]">
          {/* Left Image */}
          <div className="lg:w-auto relative">
            <div
              className="relative overflow-hidden"
              style={{ width: "600px", height: "800px" }}
            >
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
          <div className="lg:w-1/2 flex flex-col justify-center space-y-12">
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
