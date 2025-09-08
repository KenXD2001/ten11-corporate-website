"use client";

import Image from "next/image";
import HomePurposeBG from "@/assets/images/Home/HomeCore0301.webp";
import { useEffect, useRef, useState } from "react";
import Button from "../common/Button";
import { ArrowRight } from "lucide-react";

export default function AboutSnapshot() {
  const content = {
    title: "About Snapshot",
    paragraph:
      "At Ten11 Hospitality, every moment of your journey matters. Our lounges blend comfort, hygiene, and innovation, transforming waiting into a relaxing experience. With elegant interiors, attentive service, and thoughtful amenities, we turn pauses into memorable moments — creating spaces where travelers can unwind, recharge, and truly enjoy the journey.",
    button: "Discover Our Story",
    alt: "Ten 11 Hospitality Founders",
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
    <section ref={sectionRef} className="w-full py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 sm:gap-10 lg:gap-12">
          
          {/* Left Section - Image with Curtain Reveal */}
          <div className="w-full sm:w-3/4 md:w-2/3 lg:w-[440px] relative aspect-[3/4] overflow-hidden mx-auto lg:mx-0">
            {/* White Curtain */}
            <div
              className={`absolute inset-0 bg-primary z-30 transform transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]
                ${isVisible ? "-translate-y-full" : "translate-y-0"}`}
            ></div>

            {/* Black Curtain */}
            <div
              className={`absolute inset-0 bg-background z-20 transform transition-transform duration-700 delay-500 ease-[cubic-bezier(0.65,0,0.35,1)]
                ${isVisible ? "-translate-y-full" : "translate-y-0"}`}
            ></div>

            {/* Image */}
            <div className={`absolute inset-0 z-10 ${isVisible ? "" : "hidden"}`}>
              <Image
                src={HomePurposeBG}
                alt={content.alt}
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* Right Section - Content */}
          <div
            className={`w-full sm:w-4/5 md:w-3/4 lg:w-[640px] space-y-6 sm:space-y-8 lg:space-y-10 text-center lg:text-left transform transition-all duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]
              ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
          >
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-20 h-20 sm:w-24 sm:h-24 bg-primary/5 mix-blend-multiply filter blur-xl animate-pulse"></div>
              <h3
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-background leading-tight relative transition-transform duration-1000
                  ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              >
                {content.title}
              </h3>
            </div>

            <p
              className={`text-background/80 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-full sm:max-w-xl mx-auto lg:mx-0 transition-transform duration-1000 delay-200
                ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              {content.paragraph}
            </p>

            <Button
              variant="outline"
              className={`group inline-flex items-center transition-transform duration-1000 delay-400 !border-1 !border-background !text-background !hover:bg-background !hover:text-primary
                ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <span>{content.button}</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
