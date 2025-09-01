"use client";

import Image from "next/image";

export default function FoundersNote() {
  return (
    <section className="w-full bg-primary text-white py-24 sm:py-32 md:py-44 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 sm:gap-12 md:gap-16 items-start">
        {/* Left Side - Image (40%) */}
        <div className="md:col-span-2 relative w-full aspect-[3/4] sm:aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
          {/* Replace the div below with Image component when image is ready */}
          {/* <Image
            src="/images/AboutUS/founders.jpg"
            alt="Founders"
            fill
            className="object-cover"
          /> */}
          <div className="absolute inset-0 bg-background"></div>
        </div>

        {/* Right Side - Content (60%) */}
        <div className="md:col-span-3 flex flex-col gap-8 sm:gap-10 md:gap-12">
          {/* Top Section - Full width */}
          <div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 mb-4">
              <h2 className="text-sm sm:text-base uppercase tracking-widest text-background/90">
                Founder Notes
              </h2>
              <div className="border-b-2 border-background/90 w-16 sm:w-24"></div>
            </div>
            <blockquote className="italic text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light leading-relaxed sm:leading-snug md:leading-tight">
              “When we started Ten 11 Hospitality, our goal was simple – create
              spaces that travellers look forward to. We wanted every guest to
              feel at ease, enjoy a moment of peace, and leave with a smile.
              Over the years, this vision has only grown stronger. Today, every
              lounge we design and manage reflects our promise of comfort,
              quality, and care.”
            </blockquote>
          </div>

          {/* Bottom Section - Half width, right aligned */}
          <div className="w-full sm:w-3/4 md:w-1/2 ml-auto">
            <p className="mt-4 font-semibold text-base sm:text-lg md:text-xl">
              — Francis Gill & Manjit Singh
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
