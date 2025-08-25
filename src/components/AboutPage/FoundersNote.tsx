"use client";

import Image from "next/image";

export default function FoundersNote() {
  return (
    <section className="w-full bg-primary text-white py-44 px-6 md:px-34">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
        {/* Left Side - Image (40%) */}
        <div className="md:col-span-2 relative w-full aspect-[3/4] overflow-hidden">
          {/* <Image
            src="/images/AboutUS/founders.jpg"
            alt="Founders"
            fill
            className="object-cover"
          /> */}
          <div className="absolute inset-0 bg-background"></div>
        </div>

        {/* Right Side - Content (60%) */}
        <div className="md:col-span-3 flex flex-col gap-12">
          {/* Top Section - Full width */}
          <div>
            <div className="flex items-center gap-10 mb-4">
              <h2 className="text-lg uppercase tracking-widest text-background/90">
                Founder Notes
              </h2>
              <div className="border-b-2 border-background/90 w-[100px]"></div>
            </div>
            <blockquote className="italic text-2xl md:text-3xl lg:text-4xl font-light leading-tight">
              “When we started Ten 11 Hospitality, our goal was simple – create
              spaces that travellers look forward to. We wanted every guest to
              feel at ease, enjoy a moment of peace, and leave with a smile.
              Over the years, this vision has only grown stronger. Today, every
              lounge we design and manage reflects our promise of comfort,
              quality, and care.”
            </blockquote>
          </div>

          {/* Bottom Section - Half width, right aligned */}
          <div className="w-full md:w-1/2 ml-auto">
            <p className="mt-4 font-semibold text-lg">
              — Francis Gill & Manjit Singh
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
