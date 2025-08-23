"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HomeCore0101 from "@/assets/images/Home/HomeCore0101.webp";
import HomeCore0102 from "@/assets/images/Home/HomeCore0102.webp";
import HomeCore0201 from "@/assets/images/Home/HomeCore0201.webp";
import HomeCore0202 from "@/assets/images/Home/HomeCore0202.webp";
import HomeCore0301 from "@/assets/images/Home/HomeCore0301.webp";
import HomeCore0302 from "@/assets/images/Home/HomeCore0302.webp";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    title: "Innovation in Design",
    description:
      "India's first all-digital railway lounge sets new industry standards.",
    imgSrc1: HomeCore0101,
    imgSrc2: HomeCore0102,
    location: "New Delhi, India",
  },
  {
    title: "Operational Excellence",
    description:
      "Over 1,000,000 travelers served by 300+ trained professionals.",
    imgSrc1: HomeCore0201,
    imgSrc2: HomeCore0202,
    location: "Mumbai, India",
  },
  {
    title: "Passenger-Centric Care",
    description:
      "Luxury, hygiene, and warmth are at the heart of every journey.",
    imgSrc1: HomeCore0301,
    imgSrc2: HomeCore0302,
    location: "Bengaluru, India",
  },
];

export default function CoreHighlights() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    highlights.forEach((h) => {
      new window.Image().src = h.imgSrc1.src;
      new window.Image().src = h.imgSrc2.src;
    });
  }, []);

  useEffect(() => {
    if (!sectionRef.current || !pinRef.current) return;

    const scrollPerHighlight = 600;
    const totalScroll = highlights.length * scrollPerHighlight;

    gsap.set(sectionRef.current, { height: totalScroll });

    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: `+=${totalScroll}`,
      pin: pinRef.current,
      pinSpacing: false,
      scrub: 0.8,
      onUpdate: (self) => {
        const progress = self.progress;
        const index = Math.min(
          highlights.length - 1,
          Math.floor(progress * highlights.length)
        );
        setActiveIndex(index);
      },
    });

    return () => scrollTrigger.kill();
  }, []);

  const activeHighlight = highlights[activeIndex]

  return (
    <>
      <section ref={sectionRef} className="relative w-full">
        <div
          ref={pinRef}
          className="relative h-screen flex items-center justify-center"
        >
          <div className="absolute -left-[2%] mx-auto px-6 grid grid-cols-[10%_45%_45%] h-[400px] md:h-[500px] w-[60%] overflow-hidden relative">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="absolute inset-0 transition-all duration-700 ease-out"
                style={{
                  backgroundImage: `url(${h.imgSrc1.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: activeIndex === i ? 1 : 0,
                  transform: `scale(${activeIndex === i ? 1 : 1.1})`,
                }}
              />
            ))}

            <div className="absolute inset-0 bg-black/10" />

            <div />

            <div className="bg-white p-12 flex flex-col justify-center space-y-6 z-10 relative">
              <h2 className="text-2xl md:text-3xl font-normal text-gray-900 transition-opacity duration-500">
                {activeHighlight.title}
              </h2>
              <p className="text-gray-700 text-base leading-relaxed transition-opacity duration-500">
                {activeHighlight.description}
              </p>
            </div>

            <div className="relative flex flex-col justify-end p-12 z-10">
              <p className="absolute -bottom-10 text-xl text-gray-100 font-semibold transition-opacity duration-500">
                {activeHighlight.location}
              </p>
            </div>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-[16%] h-[300px] md:h-[400px] w-1/6 overflow-hidden shadow-2xl">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="absolute inset-0 transition-all duration-700 ease-out"
                style={{
                  backgroundImage: `url(${h.imgSrc2.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: activeIndex === i ? 1 : 0,
                  transform: `scale(${activeIndex === i ? 1 : 1.1})`,
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
