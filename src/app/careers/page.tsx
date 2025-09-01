import CareersIntro from "@/components/CareersPage/CareersIntro";
import CareersHero from "@/components/CareersPage/CareersHero";
import WhyWorkWithUs from "@/components/CareersPage/WhyWorkWithUs";
import CurrentOpportunities from "@/components/CareersPage/CurrentOpportunities";
import ExtraSections from "@/components/CareersPage/ExtraSections";

export default function CareersPage() {
  return (
    <div>
      <CareersHero />
      <CareersIntro />
      <WhyWorkWithUs />
      <CurrentOpportunities />
      <ExtraSections />
    </div>
  );
}
