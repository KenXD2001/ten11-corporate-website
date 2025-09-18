import Image from "next/image";
import { notFound } from "next/navigation";
import HomeProjects01 from "@/assets/images/Home/HomeProjects01.webp";
import HomeProjects02 from "@/assets/images/Home/HomeProjects02.webp";
import HomeProjects03 from "@/assets/images/Home/HomeProjects03.webp";
import ProjectOverviewHero from "@/components/ProjectOverview/HeroSection";
import AboutProject from "@/components/ProjectOverview/AboutProject";
import AccommodationSection from "@/components/ProjectOverview/Accomodations";
import QuickHighlights from "@/components/ProjectOverview/QuickHighlights";

const projects = [
  {
    slug: "new-delhi-irctc-executive-lounge",
    location: "New Delhi",
    title: "New Delhi – IRCTC Executive Lounge",
    description: "Premium service and comfort in India's busiest station.",
    imgSrc: HomeProjects01,
    alt: "New Delhi IRCTC Executive Lounge",
    features: ["Beds & Recliners", "Unlimited Buffet", "Shower Facilities", "Massage Chairs"],
  },
  {
    slug: "chennai-inej-lounge",
    location: "Chennai",
    title: "Chennai Central – INEJ Lounge",
    description: "Contemporary and spacious, crafted for today's travelers.",
    imgSrc: HomeProjects02,
    alt: "Chennai Central INEJ Lounge",
    features: ["Sleeping Pods", "Gourmet Dining", "Business Center", "Relaxation Areas"],
  },
  {
    slug: "mumbai-inej-digital-lounge",
    location: "Mumbai",
    title: "Mumbai Central – INEJ Digital Lounge",
    description: "India's first all-digital lounge, changing hospitality with technology.",
    imgSrc: HomeProjects03,
    alt: "Mumbai Central INEJ Digital Lounge",
    features: ["Co-Working Spaces", "High-Speed Internet", "Digital Check-in", "Smart Lounges"],
  },
];

// ✅ Pre-generate all slugs for SSG
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// ✅ Correctly handle async params
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="w-full">
        <ProjectOverviewHero />
        <AboutProject />
        <QuickHighlights />
        <AccommodationSection />
    </section>
  );
}
