"use client";

import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import HeroSection from "@/components/HomePage/HeroSection";
import NewsletterSection from "@/components/common/NewsletterSection";
import LoadingScreen from "@/components/layout/loading_screen";

const BrandPurposeSection = dynamic(
  () => import('@/components/HomePage/BrandPurpose'),
  { ssr: false }
);
const CoreHighlights = dynamic(
  () => import('@/components/HomePage/CoreHighlights'),
  { ssr: false }
);
const ProjectsOverview = dynamic(
  () => import('@/components/HomePage/ProjectsOverview'),
  { ssr: false }
);
const AboutSnapshot = dynamic(
  () => import('@/components/HomePage/AboutSnapshot'),
  { ssr: false }
);
const PressMedia = dynamic(
  () => import('@/components/HomePage/PressMedia'),
  { ssr: false }
);

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return <LoadingScreen isLoading={true} />;
  }

  return (
    <div className="w-full">
      <HeroSection />

      <div className="container mx-auto px-6 py-12">
        <BrandPurposeSection />
      </div>

      <CoreHighlights />

      <div className="container mx-auto px-6 py-12">
        <ProjectsOverview />
        <AboutSnapshot />
        <PressMedia />
      </div>

      <NewsletterSection />
    </div>
  );
}