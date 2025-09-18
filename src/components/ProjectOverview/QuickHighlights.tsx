"use client";

import { Star, Users, Coffee, Shield } from "lucide-react";

const highlights = [
  { icon: Star, title: "Premium Service" },
  { icon: Users, title: "Customer Satisfaction" },
  { icon: Coffee, title: "Relaxing Environment" },
  { icon: Shield, title: "Safety & Hygiene" },
];

export default function QuickHighlights() {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-primary text-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 sm:mb-16 md:mb-20 w-full mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 md:gap-10 mb-4 text-background/80">
            <h2 className="text-base sm:text-lg uppercase tracking-widest">
              Quick Highlights
            </h2>
            <div className="border-b-2 w-16 sm:w-[100px] border-background/50"></div>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
            Discover the key features and benefits that make our lounges unique and premium.
          </h3>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {highlights.map((highlight, idx) => {
            const Icon = highlight.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center bg-background/10 border border-background rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 flex items-center justify-center mb-4 text-background">
                  <Icon className="w-10 h-10" />
                </div>
                <h4 className="text-lg font-semibold">{highlight.title}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
