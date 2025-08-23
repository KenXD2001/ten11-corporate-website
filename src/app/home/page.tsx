"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, Variants } from "framer-motion";
import HeroSection from "@/components/HomePage/HeroSection";
import NewsletterSection from "@/components/common/NewsletterSection";
import LoadingScreen from "@/components/layout/loading_screen";

const BrandPurposeSection = dynamic(
  () => import("@/components/HomePage/BrandPurpose"),
  { ssr: false }
);
const CoreHighlights = dynamic(
  () => import("@/components/HomePage/CoreHighlights"),
  { ssr: false }
);
const ProjectsOverview = dynamic(
  () => import("@/components/HomePage/ProjectsOverview"),
  { ssr: false }
);
const AboutSnapshot = dynamic(
  () => import("@/components/HomePage/AboutSnapshot"),
  { ssr: false }
);
const PressMedia = dynamic(
  () => import("@/components/HomePage/PressMedia"),
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

  // 🔹 Framer Motion Variants (TypeScript-friendly)
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="w-full">
      <HeroSection />

      {/* Brand Purpose */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      // className="container mx-auto px-6 py-12"
      >
        <BrandPurposeSection />
      </motion.div>

      {/* Core Highlights */}
      {/* <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      > */}
      <CoreHighlights />
      <div
        style={{ height: "600px" }}
        className="relative z-0 opacity-0 pointer-events-none"
      />
      {/* </motion.div> */}

      {/* Projects + About + Press */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      // className="container mx-auto px-6 py-12"
      >
        <ProjectsOverview />
        <AboutSnapshot />
        <PressMedia />
      </motion.div>

      {/* Newsletter */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <NewsletterSection />
      </motion.div>
    </div>
  );
}
