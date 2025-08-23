"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import HeroBG from "@/assets/images/Home/HomeHeroBG.webp";

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  const [zoomLevel, setZoomLevel] = useState(0);
  const isInView = useRef(false);
  const rafId = useRef<number | null>(null);

  const handleScroll = useCallback(() => {
    if (!heroRef.current || !isInView.current) return;

    if (rafId.current) cancelAnimationFrame(rafId.current);

    rafId.current = requestAnimationFrame(() => {
      const hero = heroRef.current!;
      const scrollY = window.scrollY;
      const sectionTop = hero.offsetTop;
      const sectionHeight = hero.offsetHeight;

      const scrollProgress = Math.min(
        Math.max((scrollY - sectionTop) / sectionHeight, 0),
        1
      );
      const newZoom = scrollProgress * 20;

      setZoomLevel((prev) => (Math.abs(prev - newZoom) > 0.1 ? newZoom : prev));

      if (textRef.current) {
        textRef.current.style.transform = `translateY(${
          scrollProgress * 40
        }px)`;
        textRef.current.style.opacity = `${1 - scrollProgress}`;
      }

      if (scrollIndicatorRef.current) {
        scrollIndicatorRef.current.style.height = `${scrollProgress * 100}%`;
      }
    });
  }, []);

  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isInView.current = entry.isIntersecting;

          if (!entry.isIntersecting) {
            setZoomLevel(0);
            if (textRef.current) {
              textRef.current.style.transform = "translateY(0)";
              textRef.current.style.opacity = "1";
            }
            if (scrollIndicatorRef.current) {
              scrollIndicatorRef.current.style.height = "0%";
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(heroEl);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.unobserve(heroEl);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [handleScroll]);

  return (
    <section
      ref={heroRef}
      className="relative w-screen h-screen flex items-center justify-center text-center text-background overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${HeroBG.src})`,
          transform: `scale(${1 + zoomLevel / 100})`,
        }}
      />

      <div className="absolute inset-0 bg-black/30 z-0 animate-pulse-slow" />

      <div
        ref={textRef}
        className="relative z-10 max-w-3xl px-6"
        style={{ opacity: 1 }}
      >
        <p className="text-4xl md:text-5xl lg:text-6xl font-extralight mb-6">
          Redefining Transit Hospitality, One Lounge at a Time.
        </p>
        <p className="text-base md:text-lg lg:text-xl mb-10">
          From railways to airports, we are changing waiting into an
          unforgettable experience.
        </p>
        <button className="px-5 py-6 bg-background text-foreground text-base uppercase hover:bg-primary hover:text-background transition duration-300">
          Explore Projects
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 w-1.5 h-12 border border-background rounded-full overflow-hidden">
        <div ref={scrollIndicatorRef} className="bg-background w-full h-0" />
      </div>
    </section>
  );
}
