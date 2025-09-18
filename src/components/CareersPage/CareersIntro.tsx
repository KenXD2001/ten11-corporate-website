"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CareersIntro() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  const text = `At Ten 11 Hospitality LLP, we’re not just building luxury lounges, we’re building a team of passionate individuals who are shaping the future of hospitality. If you’re driven by excellence, inspired by innovation, and motivated to make a difference, we’d love to hear from you.

  We believe in cultivating a workplace culture that celebrates creativity, rewards performance, and nurtures personal and professional growth.`;

  useEffect(() => {
    if (!sectionRef.current || !textRef.current) return;

    const words = textRef.current.querySelectorAll("span");

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 110%", // Changed to trigger earlier
          toggleActions: "play none none none",
        },
      }
    );

    // Animate words color on scroll
    gsap.to(words, {
      color: "rgba(0,0,0,1)",
      stagger: 0.06,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 110%", // Changed to trigger earlier
        end: "bottom center",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[var(--background)] p-6 sm:p-12 md:p-16 lg:p-24"
    >
      <div className="max-w-6xl mx-auto">
        <p
          ref={textRef}
          className="text-2xl md:text-5xl font-light leading-relaxed text-justify"
        >
          {text.split(" ").map((word, i) => (
            <span
              key={i}
              className="mr-2 text-[var(--foreground)]/20 inline-block"
            >
              {word}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}