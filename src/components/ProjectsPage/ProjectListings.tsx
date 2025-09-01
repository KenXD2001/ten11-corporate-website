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
    <section className="w-full bg-[var(--background)] text-[var(--foreground)] py-16 sm:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        {/* Top Section */}
        <div className="mb-12 sm:mb-20 w-full sm:w-5/6 mx-auto md:mx-0">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-10 mb-4">
            <h2 className="text-sm sm:text-base md:text-lg uppercase tracking-widest text-[var(--foreground)]/90">
              PROJECTS
            </h2>
            <div className="border-b-2 border-[var(--foreground)]/90 w-12 sm:w-16 md:w-[100px]"></div>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-snug sm:leading-tight text-[var(--foreground)]">
            Discover our flagship lounges across India — where comfort, design,
            and technology converge.
          </h3>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {projects.map((item, idx) => (
            <div key={idx} className="flex flex-col space-y-6 sm:space-y-8">
              {/* Detail Section */}
              <div className="text-center lg:text-left flex flex-col gap-1 sm:gap-2">
                <span className="text-xs sm:text-sm text-[var(--primary)] block">
                  {item.location}
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-[var(--foreground)]">
                  {item.title}
                </h3>
              </div>

              {/* Card Section */}
              <div className="relative overflow-hidden bg-muted group cursor-pointer rounded-xl">
                {/* Image */}
                <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80">
                  {/* <Image
                    src={item.imgSrc}
                    alt={item.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  /> */}
                </div>

                {/* Hover Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-[var(--foreground)]/90 text-[var(--background)] p-4 sm:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-sm sm:text-base md:text-lg text-[var(--accent-light)] mb-3 sm:mb-4">
                    {item.description}
                  </p>
                  <a
                    className="text-[var(--primary)] text-sm sm:text-base font-semibold hover:underline"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
