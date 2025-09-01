// src/app/page.tsx
import HeroSection from "@/components/HomePage/HeroSection";
import BrandPurposeSection from "@/components/HomePage/BrandPurpose";
import CoreHighlights from "@/components/HomePage/CoreHighlights";
import ProjectsOverview from "@/components/HomePage/ProjectsOverview";
import AboutSnapshot from "@/components/HomePage/AboutSnapshot";
import PressMedia from "@/components/HomePage/PressMedia";
import NewsletterSection from "@/components/common/NewsletterSection";

// Add a simple loading state for initial page load
export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* Brand Purpose Section */}
      <BrandPurposeSection />

      {/* Core Highlights Section */}
      <CoreHighlights />

      {/* Projects Overview Section */}
      <ProjectsOverview />

      {/* About Snapshot Section */}
      <AboutSnapshot />

      {/* Press Media Section */}
      <PressMedia />
      
      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
}