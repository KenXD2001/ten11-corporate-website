import CareersHero from "@/components/CareersPage/CareersHero";
import CareersIntro from "@/components/CareersPage/CareersIntro";
import CareerCTA from "@/components/CareersPage/CareerCTA";
import WhyWorkWithUs from "@/components/CareersPage/WhyWorkWithUs";
// import CurrentOpportunities from "@/components/CareersPage/CurrentOpportunities";
import ExtraSections from "@/components/CareersPage/ExtraSections";

export default function CareersPage() {
  return (
    <div>
      <CareersHero />
      <CareersIntro />
      <CareerCTA />
      <WhyWorkWithUs />
      {/* <CurrentOpportunities /> */}
      <ExtraSections />
    </div>
  );
}
