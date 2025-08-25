"use client";

import Button from "../common/Button";
import { ArrowRight, Download } from "lucide-react";

export default function PressReleases() {
  const releases = [
    {
      title: "Ten11 Hospitality announces Mumbai Digital Lounge Launch",
      date: "March 2025",
      file: "/pdfs/mumbai-digital-lounge.pdf",
    },
    {
      title: "Ten11 Hospitality secures strategic investment for expansion",
      date: "January 2025",
      file: "/pdfs/investment-announcement.pdf",
    },
  ];

  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Top Section */}
        <div className="mb-20 mx-0">
          <div className="flex items-center gap-10 mb-4">
            <h2 className="text-lg uppercase tracking-widest">
              Press Releases
            </h2>
            <div className="border-b-2 w-[100px]"></div>
          </div>

          <h3 className="text-4xl md:text-5xl font-light leading-tight">
            Explore our latest announcements, strategic milestones, and official
            press communications shaping the future of Ten11 Hospitality.
          </h3>
        </div>

        {/* Releases List */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {releases.map((r) => (
            <div
              key={r.title}
              className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition-shadow flex justify-between items-center"
            >
              <div>
                <p className="text-xl md:text-2xl font-light text-[var(--foreground)] hover:underline cursor-pointer mb-1">
                  {r.title}
                </p>
                <p className="text-sm text-gray-500">{r.date}</p>
              </div>

              <a
                href={r.file}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="group inline-flex items-center !border-1 !border-background !text-background !hover:bg-background !hover:text-primary"
                >
                  <span>Download</span>
                  <Download className="w-5 h-5 ml-2 group-hover:translate-y-0.5 transition-transform" />
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* View More Button */}
      <div className="text-center mt-16">
        <Button
          variant="outline"
          className="group inline-flex items-center !border-1 !border-background !text-background !hover:bg-background !hover:text-primary"
        >
          <span>View More</span>
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
}
