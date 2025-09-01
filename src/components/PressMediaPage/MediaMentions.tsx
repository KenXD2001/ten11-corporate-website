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
    <section className="w-full bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Section */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6">
            <h2 className="text-sm sm:text-base uppercase tracking-widest">
              Media Mentions
            </h2>
            <div className="border-b-2 border-current w-16 sm:w-24"></div>
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-snug sm:leading-tight md:leading-tight cursor-pointer">
            Discover how leading publications and media outlets are highlighting
            Ten11 Hospitality’s journey, innovation, and impact in the industry.
          </h3>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Main Feature */}
          <div className="w-full">
            <a
              href={mentions[0].link}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden flex flex-col rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="relative w-full aspect-video bg-gray-200">
                <Image
                  src={mentions[0].image}
                  alt={mentions[0].title}
                  fill
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>
              <div className="p-6 flex flex-col justify-between">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-light mb-2 line-clamp-2 hover:underline">
                  {mentions[0].title}
                </h3>
                <p className="text-sm text-gray-500">{mentions[0].date}</p>
              </div>
            </a>
          </div>

          {/* Right Column - Two Smaller Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {mentions.slice(1).map((m) => (
              <a
                key={m.title}
                href={m.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden flex flex-col rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <div className="relative w-full aspect-video bg-gray-200">
                  <Image
                    src={m.image}
                    alt={m.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-4 flex flex-col justify-between">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-light mb-2 line-clamp-2 hover:underline">
                    {m.title}
                  </h3>
                  <p className="text-sm text-gray-500">{m.date}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-8">
          <Button variant="outline" className="group inline-flex items-center">
            <span>View More</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
