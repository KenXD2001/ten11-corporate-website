"use client";

import { useEffect, useRef, useState } from "react";

const values = [
  "Constant Innovation & Adaptability",
  "Unforgettable Experiences",
  "Teamwork",
  "Exceptional Service",
];

export default function CoreValues() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [typedIndexes, setTypedIndexes] = useState<number>(-1);

  // Observer for scroll threshold (20%)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Typing effect – reveal titles one by one
  useEffect(() => {
    if (visible && typedIndexes < values.length - 1) {
      const timeout = setTimeout(() => {
        setTypedIndexes((prev) => prev + 1);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [visible, typedIndexes]);

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-20 overflow-x-hidden"
    >
      <div className="mx-auto max-w-5xl text-center">
        {/* Heading */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-sm sm:text-base uppercase tracking-widest text-foreground mb-4">
            Our Core Values
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-snug sm:leading-tight">
            Our global employees are deeply committed to the values that define
            our character and culture.
          </h3>
        </div>

        {/* CUT E Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          {values.map((val, i) => (
            <div key={i} className="flex flex-col items-center">
              {/* Initial Letter */}
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-primary">
                {val[0]}
              </h1>
              {/* Typing Reveal */}
              <p
                className={`text-base sm:text-lg md:text-xl font-light mt-4 transition-all duration-500 ${
                  typedIndexes >= i
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                {typedIndexes >= i ? val : ""}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
