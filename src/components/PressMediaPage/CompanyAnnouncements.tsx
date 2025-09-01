"use client";

import Image from "next/image";
import Button from "../common/Button";
import { ArrowRight } from "lucide-react";

export default function CompanyAnnouncements() {
  const announcements = [
    {
      date: "July 2025",
      text: "Expansion plans announced for new lounges across Tier-1 cities.",
      image: "/images/announcement1.jpg",
    },
    {
      date: "May 2025",
      text: "Partnership with global F&B brands to elevate guest experiences.",
      image: "/images/announcement2.jpg",
    },
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Section */}
        <div className="space-y-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-6 justify-center md:justify-start">
            <h2 className="text-sm sm:text-base uppercase tracking-widest">
              Company Announcements
            </h2>
            <div className="border-b-2 border-current w-16 sm:w-24"></div>
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-snug cursor-pointer">
            Stay updated on Ten11 Hospitality’s latest initiatives, expansions, and strategic partnerships.
          </h3>
        </div>

        {/* Announcements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Featured Announcement */}
          {announcements[0] && (
            <div className="w-full">
              <div className="block overflow-hidden flex flex-col rounded-lg shadow hover:shadow-lg transition-shadow">
                <div className="relative w-full aspect-video bg-gray-200">
                  <Image
                    src={announcements[0].image}
                    alt={announcements[0].text}
                    fill
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                    priority
                  />
                </div>
                <div className="p-6 flex flex-col justify-between">
                  <p className="text-sm text-gray-500 mb-2">{announcements[0].date}</p>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-[var(--foreground)] line-clamp-2 hover:underline cursor-pointer">
                    {announcements[0].text}
                  </h3>
                </div>
              </div>
            </div>
          )}

          {/* Right Column - Smaller Announcements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {announcements.slice(1).map((a, idx) => (
              <div
                key={idx}
                className="block overflow-hidden flex flex-col rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <div className="relative w-full aspect-video bg-gray-200">
                  <Image
                    src={a.image}
                    alt={a.text}
                    fill
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-4 flex flex-col justify-between">
                  <p className="text-sm text-gray-500 mb-2">{a.date}</p>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-light text-[var(--foreground)] line-clamp-2 hover:underline cursor-pointer">
                    {a.text}
                  </h3>
                </div>
              </div>
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
