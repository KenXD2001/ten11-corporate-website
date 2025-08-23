"use client";

import Image from "next/image";
import Link from "next/link";

import HomeProjects01 from "@/assets/images/Home/HomeProjects01.webp";
import HomeProjects02 from "@/assets/images/Home/HomeProjects02.webp";
import HomeProjects03 from "@/assets/images/Home/HomeProjects03.webp";

const projects = [
  {
    title: "New Delhi – IRCTC Executive Lounge",
    description: "Premium service and comfort in India's busiest station.",
    imgSrc: HomeProjects01,
    alt: "New Delhi IRCTC Executive Lounge",
  },
  {
    title: "Chennai Central – INEJ Lounge",
    description: "Contemporary and spacious, crafted for today's travelers.",
    imgSrc: HomeProjects02,
    alt: "Chennai Central INEJ Lounge",
  },
  {
    title: "Mumbai Central – INEJ Digital Lounge",
    description:
      "India's first all-digital lounge, changing hospitality with technology.",
    imgSrc: HomeProjects03,
    alt: "Mumbai Central INEJ Digital Lounge",
  },
];

export default function ProjectsOverview() {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-normal text-foreground mb-6">
          Projects Overview
        </h2>
        <p className="text-sm text-muted leading-relaxed">
          From busy railway stations to India&apos;s first digital lounge, Ten 11
          Hospitality is redefining the waiting experience — blending comfort,
          convenience, and warm service.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-white shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.imgSrc}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-normal text-foreground group-hover:text-primary transition-colors duration-500">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <Link
          href="/projects"
          className="inline-block px-10 py-4 bg-background text-primary hover:bg-primary hover:text-background font-semibold shadow-md transition-colors duration-500 border border-primary"
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
}
