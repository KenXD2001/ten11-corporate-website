"use client";

import Image from "next/image";
import HomePurposeBG from "@/assets/images/Home/HomeCore0301.webp";
import { useEffect, useRef, useState } from "react";

export default function BrandPurposeSection() {
  const content = {
    title: "Innovating comfort and care for modern travellers",
    paragraph:
      "Every journey deserves more than movement , it deserves thoughtful spaces that enrich the experience.",
    button: "Our Story",
    alt: "Lounge ambience with warm lighting and staff serving",
  };

  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
      className="w-full py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="w-full container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center space-y-6 sm:space-y-8 md:space-y-10">
        {/* Title */}
        <h3
          className={`text-2xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 leading-snug sm:leading-tight transform transition-all duration-700 ease-out
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
        >
          {content.title}
        </h3>

        {/* Paragraph */}
        <p
          className={`text-sm xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl transform transition-all duration-700 ease-out delay-200
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
        >
          {content.paragraph}
        </p>

        {/* Image with Curtain Reveal */}
        <div
          className="relative w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] h-[220px] sm:h-[280px] md:h-[340px] lg:h-[400px] xl:h-[450px] rounded-3xl overflow-hidden"
        >
          {/* White Curtain */}
          <div
            className={`absolute inset-0 bg-background z-30 transform transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]
      ${isVisible ? "-translate-y-full" : "translate-y-0"}`}
          ></div>

          {/* Black Curtain */}
          <div
            className={`absolute inset-0 bg-primary z-20 transform transition-transform duration-700 delay-600 ease-[cubic-bezier(0.65,0,0.35,1)]
      ${isVisible ? "-translate-y-full" : "translate-y-0"}`}
          ></div>

          {/* Image */}
          <div
            className={`absolute inset-0 z-10 rounded ${
              isVisible ? "" : "hidden"
            }`}
          >
            <Image
              src={HomePurposeBG}
              alt={content.alt}
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
