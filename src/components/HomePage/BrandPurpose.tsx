"use client";

import Image from "next/image";
import HomePurposeBG from "@/assets/images/Home/HomePurposeBG.webp";
import { useEffect, useRef, useState } from "react";

export default function BrandPurposeSection() {
  const content = {
    title: "Beyond Transit, An Experience to Remember",
    paragraph:
      "Travel is more than just moving from one place to another — it’s a journey of emotions, expectations, and moments in between.",
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl flex flex-col items-center text-center space-y-6">
        {/* Title */}
        <h3
          className={`text-4xl md:text-5xl font-light text-gray-900 leading-tight transform transition-all duration-700 ease-out
    ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          {content.title}
        </h3>

        {/* Subtitle */}
        <p
          className={`text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl transform transition-all duration-700 ease-out delay-200
    ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          {content.paragraph}
        </p>

        {/* Image with Curtain Reveal */}
        <div className="rounded-3xl relative w-5/6 h-[450px] overflow-hidden mx-auto">
          {/* White Curtain */}
          <div
            className={`absolute inset-0 bg-background z-30 transform transition-transform duration-600 ease-[cubic-bezier(0.65,0,0.35,1)]
      ${isVisible ? "-translate-y-full" : "translate-y-0"}`}
          ></div>

          {/* Black Curtain */}
          <div
            className={`absolute inset-0 bg-primary z-20 transform transition-transform duration-600 delay-600 ease-[cubic-bezier(0.65,0,0.35,1)]
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
