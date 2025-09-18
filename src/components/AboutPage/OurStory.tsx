"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import CardOneImage from "@/assets/images/Home/HomeCore0101.webp";
import TrainImage from "@/assets/images/AboutUS/TrainImage.png";
// import TimelinePath from "./TimelinePath";

const steps = [
  {
    title: "The Beginning",
    desc: "Back in 2019, in the busy heart of Delhi, two childhood friends – Francis Gill and Manjit Singh – decided to turn their shared dream into reality. Both had a passion for hospitality and a vision to create spaces where travellers could truly relax, feel valued, and enjoy world-class service.",
    img: CardOneImage,
  },
  {
    title: "The Meaning Behind Our Name",
    desc: "The name Ten 11 wasn't just picked at random – it came from a mix of inspiration, numerology, and belief. Francis discovered that 10 stood for leadership, innovation, and fresh beginnings, while 11 symbolised intuition, inspiration, and enlightenment. Together, these numbers reflected exactly what they wanted their company to stand for.",
    img: CardOneImage,
  },
  {
    title: "Redefining Hospitality",
    desc: "What started as Ten 11 Lounges soon became Ten 11 Hospitality, a name now known for redefining travel comfort. Today, we're on a mission to leave a strong mark in the railway and airport lounge sector – blending innovation, luxury, and heartfelt service.",
    img: CardOneImage,
  },
];

export default function OurStory() {
  const [activeStep, setActiveStep] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const trainRef = useRef<SVGImageElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current || !trainRef.current || !pathRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const screenCenter = window.innerHeight / 2;

      // progress relative to center
      let progress = (screenCenter - rect.top) / rect.height;
      progress = Math.min(1, Math.max(0, progress));

      // Step activation
      const stepIndex = Math.min(
        steps.length - 2,
        Math.round(progress * (steps.length - 1))
      );

      setActiveStep(stepIndex);

      // Train position
      const path = pathRef.current;
      const totalLength = path.getTotalLength();
      const point = path.getPointAtLength(totalLength * progress);

      const trainWidth = 100;
      const trainHeight = 100;

      trainRef.current.setAttribute("x", String(point.x - trainWidth / 2));
      trainRef.current.setAttribute("y", String(point.y - trainHeight / 2));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative bg-white">
      {/* Top Section */}
      <div className="w-full pt-20 md:pt-28 px-4 sm:px-6 md:px-12 lg:px-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl">
          <div className="w-full md:w-3/4 lg:w-2/3">
            <div className="flex items-center gap-4 mb-6">
              {/* <div className="h-px w-12 bg-primary/70"></div> */}
              <h2 className="text-base sm:text-lg uppercase tracking-widest">
                Our Story
              </h2>
              <div className="border-b-2 w-16 sm:w-[100px] border-foreground/50"></div>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
              How it all begins
            </h3>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <section
        ref={timelineRef}
        className="relative bg-white py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto relative">
          {/* SVG Timeline Path */}
          <svg
            className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[200px] z-30 pointer-events-none"
            viewBox="0 0 100 1000"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              ref={pathRef}
              d="M50 0 C 50 150, 0 250, 50 400 C 100 550, 50 650, 50 800"
              stroke="#d1d5db"
              strokeWidth={3}
              strokeDasharray="6 6"
              fill="transparent"
            />
            <image
              ref={trainRef}
              href={TrainImage.src}
              width="100"
              height="100"
              className="drop-shadow-lg"
            />
          </svg>

          {/* Steps */}
          <div className="flex flex-col space-y-28 md:space-y-36 relative z-20">
            {steps.map((step, idx) => {
              const isLeft = idx % 2 === 0;
              const isActive = idx === activeStep;

              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 transition-all duration-500 ${
                    !isLeft ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`md:w-1/2 w-full relative h-72 md:h-96 overflow-hidden rounded-xl shadow-lg transform transition-all duration-700 ${
                      isActive
                        ? "scale-105 opacity-100 translate-y-0"
                        : "opacity-60 translate-y-10"
                    }`}
                  >
                    <Image
                      src={step.img}
                      alt={step.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="md:w-1/2 w-full flex flex-col relative">
                    {/* Mobile dot */}
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-6 h-6 bg-primary/70 rounded-full flex items-center justify-center z-10 md:hidden">
                      <div className="w-3 h-3 bg-primary/30 rounded-full"></div>
                    </div>

                    <div
                      className={`p-6 md:p-8 bg-white rounded-lg border border-gray-100 shadow-sm transition-all duration-500 ${
                        isActive
                          ? "opacity-100 translate-y-0 shadow-lg ring-2 ring-primary/50"
                          : "opacity-60 translate-y-5"
                      }`}
                    >
                      <div className="flex items-center mb-4">
                        <div className="text-primary/70 font-mono text-lg font-medium mr-3">
                          0{idx + 1}
                        </div>
                        <div className="h-px w-8 bg-primary/70"></div>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                        {step.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
}
