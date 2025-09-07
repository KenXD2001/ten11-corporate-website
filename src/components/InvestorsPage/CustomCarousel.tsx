"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Logo from "@/assets/images/Logos/Ten11-LOGO.svg";

export default function CustomCarousel() {
  const partners = Array.from({ length: 10 }).map((_, i) => ({
    name: `Partner ${i + 1}`,
    logo: Logo,
  }));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  const containerRef = useRef<HTMLDivElement>(null);

  // Update slidesToShow based on window width
  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;
      if (width < 480) setSlidesToShow(1);
      else if (width < 640) setSlidesToShow(2);
      else if (width < 1024) setSlidesToShow(3);
      else setSlidesToShow(5);
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? partners.length - slidesToShow : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= partners.length - slidesToShow ? 0 : prev + 1
    );
  };

  return (
    <section className="py-16 sm:py-24 bg-gray-50 relative px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center relative">
        {/* Heading */}
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-light leading-snug sm:leading-tight text-[var(--foreground)] mb-8">
          Discover our flagship lounges across India — where comfort, design,
          and technology converge.
        </h3>

        <div className="w-full">
          {/* Carousel wrapper */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300"
              style={{
                width: `${(partners.length / slidesToShow) * 100}%`,
                transform: `translateX(-${
                  (currentIndex / partners.length) * 100
                }%)`,
              }}
            >
              {partners.map((partner, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 flex items-center justify-center p-4"
                  style={{ width: `${100 / partners.length}%` }}
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    className="object-contain w-20 sm:w-24 md:w-28 lg:w-32 h-auto"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 left-0 sm:left-0 md:left-0 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-lg z-20"
            style={{ transform: "translate(-50%, -50%)" }} // fully outside
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 right-0 sm:right-0 md:right-0 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-lg z-20"
            style={{ transform: "translate(50%, -50%)" }} // fully outside
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
}
