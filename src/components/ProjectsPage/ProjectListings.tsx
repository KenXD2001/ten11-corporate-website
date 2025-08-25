"use client";

import Image from "next/image";
import HomeProjects01 from "@/assets/images/Home/HomeProjects01.webp";
import HomeProjects02 from "@/assets/images/Home/HomeProjects02.webp";
import HomeProjects03 from "@/assets/images/Home/HomeProjects03.webp";

const projects = [
  {
    location: "New Delhi",
    title: "New Delhi – IRCTC Executive Lounge",
    description: "Premium service and comfort in India's busiest station.",
    imgSrc: HomeProjects01,
    alt: "New Delhi IRCTC Executive Lounge",
  },
  {
    location: "Chennai",
    title: "Chennai Central – INEJ Lounge",
    description: "Contemporary and spacious, crafted for today's travelers.",
    imgSrc: HomeProjects02,
    alt: "Chennai Central INEJ Lounge",
  },
  {
    location: "Mumbai",
    title: "Mumbai Central – INEJ Digital Lounge",
    description:
      "India's first all-digital lounge, changing hospitality with technology.",
    imgSrc: HomeProjects03,
    alt: "Mumbai Central INEJ Digital Lounge",
  },
];

export default function ProjectListings() {
  return (
    <section className="w-full bg-[var(--background)] dark:bg-[var(--background)] text-[var(--foreground)] py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Projects Grid */}
        <div>
          {/* Top Section */}
          <div className="mb-20 w-5/6 mx-0">
            <div className="flex items-center gap-10 mb-4">
              <h2 className="text-lg uppercase tracking-widest text-[var(--foreground)]/90">
                PROJECTS
              </h2>
              <div className="border-b-2 border-[var(--foreground)]/90 w-[100px]"></div>
            </div>

            <h3 className="text-4xl md:text-5xl font-light leading-tight text-[var(--foreground)]">
              Discover our flagship lounges across India — where comfort,
              design, and technology converge.
            </h3>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((item, idx) => (
              <div key={idx} className="flex flex-col space-y-8">
                {/* Detail Section */}
                <div className="text-center lg:text-left flex flex-col gap-2">
                  <span className="text-sm text-[var(--primary)] block">
                    {item.location}
                  </span>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--foreground)]">
                    {item.title}
                  </h3>
                </div>

                {/* Card Section */}
                <div className="relative overflow-hidden bg-muted group cursor-pointer pl-15">
                  {/* Image */}
                  <div className="relative w-full h-80">
                    {/* <Image
                      src={item.imgSrc}
                      alt={item.title}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    /> */}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute bottom-0 left-[60px] right-0 bg-[var(--foreground)]/90 text-[var(--background)] p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-[var(--accent-light)] mb-4">
                      {item.description}
                    </p>
                    <a
                      // href={item.link}
                      className="text-[var(--primary)] font-semibold hover:underline"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
