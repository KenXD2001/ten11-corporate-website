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
    aboutDescription: "Located at the heart of New Delhi Transit Hub, the IRCTC Executive Lounge offers a premium respite for travelers seeking comfort and convenience. Operated by Ten 11 Hospitality, this state-of-the-art lounge is designed to provide a serene environment amidst the bustling station, with modern amenities and exceptional service.",
    highlights: [
      { icon: "Star", title: "Premium Service" },
      { icon: "Users", title: "Customer Satisfaction" },
      { icon: "Coffee", title: "Relaxing Environment" },
      { icon: "Shield", title: "Safety & Hygiene" },
    ],
    accommodations: [
      {
        title: "Sleeping Pods",
        description: "Private, comfortable sleeping pods with premium bedding for restful naps between journeys.",
        imgSrc: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        title: "Executive Lounge",
        description: "Exclusive lounge area with premium seating, workstations, and personalized service for business travelers.",
        imgSrc: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      },
      {
        title: "Gourmet Dining",
        description: "Curated menu featuring local Delhi specialties and international cuisine in a sophisticated setting.",
        imgSrc: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        title: "Business Center",
        description: "Fully equipped business facilities with high-speed internet, printing services, and meeting spaces.",
        imgSrc: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        title: "Shower Facilities",
        description: "Premium shower rooms with luxury amenities, towels, and toiletries for refreshing during layovers.",
        imgSrc: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        title: "Entertainment Zone",
        description: "Relaxation area with premium TV channels, reading materials, and comfortable seating arrangements.",
        imgSrc: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      },
      {
        title: "Concierge Services",
        description: "Dedicated staff assistance for travel arrangements, bookings, and local information in Delhi.",
        imgSrc: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        title: "Luggage Storage",
        description: "Secure luggage storage facilities with 24/7 monitoring for hassle-free city exploration.",
        imgSrc: "https://images.unsplash.com/photo-1598488033097-9cb5ae8049b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      },
      {
        title: "Premium Lounge Access",
        description: "Exclusive access to premium areas with enhanced privacy, comfort, and personalized services.",
        imgSrc: "https://images.unsplash.com/photo-1582582621959-48d27397dc69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      },
      {
        title: "Digital Connectivity",
        description: "High-speed Wi-Fi, charging stations, and tech support throughout the lounge facility.",
        imgSrc: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      },
    ],
  },
  {
    slug: "chennai-inej-lounge",
    location: "Chennai",
    title: "Chennai Central – INEJ Lounge",
    description: "Contemporary and spacious, crafted for today's travelers.",
    imgSrc: HomeProjects02,
    alt: "Chennai Central INEJ Lounge",
    features: ["Sleeping Pods", "Gourmet Dining", "Business Center", "Relaxation Areas"],
    aboutDescription: "Located at the heart of Chennai Central Transit Hub, the INEJ Lounge offers a premium respite for travelers seeking comfort and convenience. Operated by Ten 11 Hospitality, this state-of-the-art lounge is designed to provide a serene environment amidst the bustling station, with modern amenities and exceptional service.",
    highlights: [
      { icon: "Star", title: "Premium Service" },
      { icon: "Users", title: "Customer Satisfaction" },
      { icon: "Coffee", title: "Relaxing Environment" },
      { icon: "Shield", title: "Safety & Hygiene" },
    ],
    accommodations: [
      {
        title: "Sleeping Pods",
        description: "Private, comfortable sleeping pods with premium bedding for restful naps between journeys.",
        imgSrc: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        title: "Executive Lounge",
        description: "Exclusive lounge area with premium seating, workstations, and personalized service for business travelers.",
        imgSrc: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      },
      {
        title: "Gourmet Dining",
        description: "Curated menu featuring local Chennai specialties and international cuisine in a sophisticated setting.",
        imgSrc: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        title: "Business Center",
        description: "Fully equipped business facilities with high-speed internet, printing services, and meeting spaces.",
        imgSrc: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        title: "Shower Facilities",
        description: "Premium shower rooms with luxury amenities, towels, and toiletries for refreshing during layovers.",
        imgSrc: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        title: "Entertainment Zone",
        description: "Relaxation area with premium TV channels, reading materials, and comfortable seating arrangements.",
        imgSrc: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      },
      {
        title: "Concierge Services",
        description: "Dedicated staff assistance for travel arrangements, bookings, and local information in Chennai.",
        imgSrc: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        title: "Luggage Storage",
        description: "Secure luggage storage facilities with 24/7 monitoring for hassle-free city exploration.",
        imgSrc: "https://images.unsplash.com/photo-1598488033097-9cb5ae8049b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      },
      {
        title: "Premium Lounge Access",
        description: "Exclusive access to premium areas with enhanced privacy, comfort, and personalized services.",
        imgSrc: "https://images.unsplash.com/photo-1582582621959-48d27397dc69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      },
      {
        title: "Digital Connectivity",
        description: "High-speed Wi-Fi, charging stations, and tech support throughout the lounge facility.",
        imgSrc: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      },
    ],
  },
  {
    slug: "mumbai-inej-lounge",
    location: "Mumbai",
    title: "Mumbai Central – INEJ Digital Lounge",
    description: "India's first all-digital lounge, changing hospitality with technology.",
    imgSrc: HomeProjects03,
    alt: "Mumbai Central INEJ Digital Lounge",
    features: ["Co-Working Spaces", "High-Speed Internet", "Digital Check-in", "Smart Lounges"],
    aboutDescription: "Located at the heart of Mumbai Central Transit Hub, the INEJ Digital Lounge offers a premium respite for travelers seeking comfort and convenience. Operated by Ten 11 Hospitality, this state-of-the-art lounge is designed to provide a serene environment amidst the bustling station, with modern amenities and exceptional service.",
    highlights: [
      { icon: "Star", title: "Premium Service" },
      { icon: "Users", title: "Customer Satisfaction" },
      { icon: "Coffee", title: "Relaxing Environment" },
      { icon: "Shield", title: "Safety & Hygiene" },
    ],
    accommodations: [
      {
        title: "Sleeping Pods",
        description: "Private, comfortable sleeping pods with premium bedding for restful naps between journeys.",
        imgSrc: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        title: "Executive Lounge",
        description: "Exclusive lounge area with premium seating, workstations, and personalized service for business travelers.",
        imgSrc: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      },
      {
        title: "Gourmet Dining",
        description: "Curated menu featuring local Mumbai specialties and international cuisine in a sophisticated setting.",
        imgSrc: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        title: "Business Center",
        description: "Fully equipped business facilities with high-speed internet, printing services, and meeting spaces.",
        imgSrc: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        title: "Shower Facilities",
        description: "Premium shower rooms with luxury amenities, towels, and toiletries for refreshing during layovers.",
        imgSrc: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        title: "Entertainment Zone",
        description: "Relaxation area with premium TV channels, reading materials, and comfortable seating arrangements.",
        imgSrc: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      },
      {
        title: "Concierge Services",
        description: "Dedicated staff assistance for travel arrangements, bookings, and local information in Mumbai.",
        imgSrc: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        title: "Luggage Storage",
        description: "Secure luggage storage facilities with 24/7 monitoring for hassle-free city exploration.",
        imgSrc: "https://images.unsplash.com/photo-1598488033097-9cb5ae8049b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      },
      {
        title: "Premium Lounge Access",
        description: "Exclusive access to premium areas with enhanced privacy, comfort, and personalized services.",
        imgSrc: "https://images.unsplash.com/photo-1582582621959-48d27397dc69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      },
      {
        title: "Digital Connectivity",
        description: "High-speed Wi-Fi, charging stations, and tech support throughout the lounge facility.",
        imgSrc: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      },
    ],
  },
  {
    slug: "vadodara-inej-lounge",
    location: "Vadodara",
    title: "Vadodara – INEJ Lounge",
    description: "Modern comfort and convenience in the heart of Gujarat's cultural capital.",
    imgSrc: HomeProjects01, // Using existing image, you can add a specific one later
    alt: "Vadodara INEJ Lounge",
    features: ["Premium Seating", "Local Cuisine", "Business Facilities", "Cultural Experience"],
    aboutDescription: "Located at the heart of Vadodara Transit Hub, the INEJ Lounge offers a premium respite for travelers seeking comfort and convenience. Operated by Ten 11 Hospitality, this state-of-the-art lounge is designed to provide a serene environment amidst the bustling station, with modern amenities and exceptional service that reflects the rich cultural heritage of Gujarat.",
    highlights: [
      { icon: "Star", title: "Premium Service" },
      { icon: "Users", title: "Customer Satisfaction" },
      { icon: "Coffee", title: "Relaxing Environment" },
      { icon: "Shield", title: "Safety & Hygiene" },
    ],
    accommodations: [
      {
        title: "Sleeping Pods",
        description: "Private, comfortable sleeping pods with premium bedding for restful naps between journeys.",
        imgSrc: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        title: "Executive Lounge",
        description: "Exclusive lounge area with premium seating, workstations, and personalized service for business travelers.",
        imgSrc: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      },
      {
        title: "Gourmet Dining",
        description: "Curated menu featuring local Vadodara specialties and international cuisine in a sophisticated setting.",
        imgSrc: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        title: "Business Center",
        description: "Fully equipped business facilities with high-speed internet, printing services, and meeting spaces.",
        imgSrc: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        title: "Shower Facilities",
        description: "Premium shower rooms with luxury amenities, towels, and toiletries for refreshing during layovers.",
        imgSrc: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        title: "Entertainment Zone",
        description: "Relaxation area with premium TV channels, reading materials, and comfortable seating arrangements.",
        imgSrc: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      },
      {
        title: "Concierge Services",
        description: "Dedicated staff assistance for travel arrangements, bookings, and local information in Vadodara.",
        imgSrc: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        title: "Luggage Storage",
        description: "Secure luggage storage facilities with 24/7 monitoring for hassle-free city exploration.",
        imgSrc: "https://images.unsplash.com/photo-1598488033097-9cb5ae8049b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      },
      {
        title: "Premium Lounge Access",
        description: "Exclusive access to premium areas with enhanced privacy, comfort, and personalized services.",
        imgSrc: "https://images.unsplash.com/photo-1582582621959-48d27397dc69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      },
      {
        title: "Digital Connectivity",
        description: "High-speed Wi-Fi, charging stations, and tech support throughout the lounge facility.",
        imgSrc: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      },
    ],
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
        <ProjectOverviewHero project={project} />
        <AboutProject project={project} />
        <QuickHighlights project={project} />
        <AccommodationSection project={project} />
    </section>
  );
}
