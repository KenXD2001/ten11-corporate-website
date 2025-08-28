"use client";

import Image from "next/image";
import Button from "../common/Button";
import { ArrowRight } from "lucide-react";

export default function MediaMentions() {
  const mentions = [
    {
      title: "Ten11 launches India’s first fully digital railway lounge",
      date: "Aug 15, 2023",
      image: "/images/news1.jpg",
      link: "#",
    },
    {
      title: "Transforming railway stations into world-class hospitality hubs",
      date: "Sep 2, 2023",
      image: "/images/news2.jpg",
      link: "#",
    },
    {
      title: "Innovation in travel comfort: Ten11 Hospitality",
      date: "Oct 5, 2023",
      image: "/images/news3.jpg",
      link: "#",
    },
  ];

  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Top Section */}
        <div className="mb-20 mx-0">
          <div className="flex items-center gap-10 mb-4">
            <h2 className="text-lg uppercase tracking-widest">
              Media Mentions
            </h2>
            <div className="border-b-2 w-[100px]"></div>
          </div>

          <h3 className="text-4xl md:text-5xl font-light leading-tight cursor-pointer">
            Discover how leading publications and media outlets are highlighting
            Ten11 Hospitality’s journey, innovation, and impact in the industry.
          </h3>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="w-full">
            <a
              href={mentions[0].link}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden bg-white flex flex-col"
            >
              <div className="relative aspect-video w-full bg-muted">
                <Image
                  src={mentions[0].image}
                  alt={mentions[0].title}
                  fill
                  className="object-cover transition-transform duration-500"
                  priority
                />
              </div>

              <div className="p-6 flex flex-col justify-between">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-[var(--foreground)] mb-2 line-clamp-2 hover:underline cursor-pointer">
                  {mentions[0].title}
                </h3>
                <p className="text-sm text-gray-500">{mentions[0].date}</p>
              </div>
            </a>
          </div>

          {/* Right Column - 2 side-by-side cards */}
          <div className="grid grid-cols-2 gap-6">
            {mentions.slice(1).map((m) => (
              <a
                key={m.title}
                href={m.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden bg-white flex flex-col"
              >
                <div className="relative aspect-video w-full bg-muted">
                  <Image
                    src={m.image}
                    alt={m.title}
                    fill
                    className="object-cover transition-transform duration-500"
                  />
                </div>

                <div className="p-4 flex flex-col justify-between">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-light text-[var(--foreground)] mb-2 line-clamp-2 hover:underline cursor-pointer">
                    {m.title}
                  </h3>
                  <p className="text-sm text-gray-500">{m.date}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* View More Button */}
      <div className="text-center">
        <Button variant="outline" className="group inline-flex items-center">
          <span>View More</span>
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
}
