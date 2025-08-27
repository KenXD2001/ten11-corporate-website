"use client";

import Image from "next/image";
import HomePurposeBG from "@/assets/images/Home/HomePurposeBG.webp";
import { useEffect, useRef, useState } from "react";
import Button from "../common/Button";
import { ArrowRight } from "lucide-react";

export default function BrandPurposeSection() {
  const content = {
    title: "Beyond Transit, An Experience to Remember",
    paragraph:
      "At Ten11 Hospitality, every moment of your journey matters. Our lounges blend comfort, hygiene, and innovation, transforming waiting into a relaxing experience. With elegant interiors, attentive service, and thoughtful amenities, we turn pauses into memorable moments — creating spaces where travelers can unwind, recharge, and truly enjoy the journey.",
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
      { threshold: 0.6 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <div
            className={`w-[640px] space-y-8 text-center lg:text-left transform transition-all duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
          >
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-primary/5 mix-blend-multiply filter blur-xl animate-pulse"></div>
              <h3
                className={`text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 leading-tight relative transition-transform duration-1000
                  ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
              >
                {content.title}
              </h3>
            </div>

            <p
              className={`text-gray-600 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto lg:mx-0 transition-transform duration-1000 delay-200
                ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
            >
              {content.paragraph}
            </p>

            <Button
              variant="outline"
              className={`group inline-flex items-center transition-transform duration-1000 delay-400
                ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
            >
              <span>{content.button}</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

          {/* Right Image with Sequential Curtain Reveal */}
          <div className="w-[440px] relative aspect-[3/4] overflow-hidden">
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
              className={`absolute inset-0 z-10 ${isVisible ? "" : "hidden"}`}
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
      </div>
    </section>
  );
}
