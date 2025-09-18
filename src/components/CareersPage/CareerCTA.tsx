"use client";

import Link from "next/link";

export default function CareerCTA() {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Section */}
          <div className="flex flex-col justify-start">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
              Life at Ten11 Hospitality
            </h2>
          </div>

          {/* Right Section */}
          <div className="flex flex-col justify-between">
            {/* Top Description */}
            <p className="text-lg sm:text-xl text-muted-foreground">
              We put as much care into the growth and development of our people
              as we do into delivering exceptional hospitality, because our
              success depends on fostering a culture that values fresh
              perspectives and embraces every challenge.
            </p>

            {/* Bottom Button */}
            <div className="mt-8">
              <Link
                href="/careers/opportunities"
                className="
                  relative inline-block px-6 py-3 rounded-xl font-medium
                  border border-white text-white
                  overflow-hidden transition-colors duration-300
                  hover:text-primary
                  group
                "
                >
                <span
                  className="
                    absolute inset-0 bg-white
                    translate-y-full group-hover:translate-y-0
                    transition-transform duration-300 ease-in-out
                  "
                ></span>
                <span className="relative z-10">Explore Opportunities</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
