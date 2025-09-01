"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import HeroBG from "@/assets/images/Home/HomeHeroBG.webp";
import { ArrowRight } from "lucide-react";

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

      const scrollProgress = Math.min(Math.max((scrollY - sectionTop) / sectionHeight, 0), 1);
      const newZoom = scrollProgress * 20;

      setZoomLevel((prev) => (Math.abs(prev - newZoom) > 0.1 ? newZoom : prev));

      if (textRef.current) {
        textRef.current.style.transform = `translateY(${scrollProgress * 40}px)`;
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
      className="relative w-screen min-h-[70vh] sm:min-h-[80vh] md:min-h-screen flex items-center justify-center text-center text-background overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-500 ease-out"
        style={{
          backgroundImage: `url(${HeroBG.src})`,
          transform: `scale(${1 + zoomLevel / 100})`,
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/30 z-0 animate-pulse-slow" />

      {/* Text Content */}
      <div
        ref={textRef}
        className="relative z-10 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-3xl xl:max-w-4xl px-4 sm:px-6 md:px-8 lg:px-12"
        style={{ opacity: 1, transition: "all 0.5s ease-out" }}
      >
        <p className="text-2xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extralight mb-4 sm:mb-6">
          Redefining Transit Hospitality, One Lounge at a Time.
        </p>

        <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-10">
          Beyond Transit, An Experience to Remember.
        </p>

        <button className="group px-[10vw] py-[3vw] sm:px-6 sm:py-3 md:px-8 md:py-4 bg-background text-foreground text-xs sm:text-sm md:text-base uppercase hover:bg-primary hover:text-background transition duration-300">
          <div className="flex items-center justify-center">
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 w-1.5 h-10 sm:h-12 border border-foreground rounded-full overflow-hidden">
        <div
          ref={scrollIndicatorRef}
          className="bg-foreground w-full h-0 transition-all duration-300"
        />
      </div>
    </section>
  );
}
