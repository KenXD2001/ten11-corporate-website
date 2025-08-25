import AboutHero from "@/components/AboutPage/AboutHero";
import OurStory from "@/components/AboutPage/OurStory";
import FoundersNote from "@/components/AboutPage/FoundersNote";
import VisionMission from "@/components/AboutPage/VisionMission";
import CoreValues from "@/components/AboutPage/CoreValues";
import Differentiators from "@/components/AboutPage/Differentiators";
import OurPresence from "@/components/AboutPage/OurPresence";

export default function AboutPage() {
  return (
    <div className="w-full">
      {/*About Hero Section*/}
      <AboutHero />

      {/*Our Story Section*/}
      <OurStory />

      {/*Founders Note Section*/}
      <FoundersNote />

      {/*Vission Mission Section*/}
      <VisionMission />

      {/*Core Values Section*/}
      <CoreValues />

      {/*Differentiators Section*/}
      <Differentiators />

      {/*Our Presence Section*/}
      <OurPresence />
    </div>
  );
}
