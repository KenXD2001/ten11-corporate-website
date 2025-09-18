"use client";

import Link from "next/link";
import { Mail } from "lucide-react";

export default function ExtraSections() {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-background text-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Section */}
          <div className="flex flex-col justify-start">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
              Contact Our PR Team
            </h2>
          </div>

          {/* Right Section */}
          <div className="flex flex-col justify-between">
            {/* Top Description */}
            <p className="text-lg sm:text-xl text-muted-foreground">
              For media inquiries, collaborations, or press opportunities,
              please reach out to our communications team.
            </p>

            {/* Bottom Button */}
            <div className="mt-8">
              <Link
                href="/careers"
                className="
                  relative inline-block px-6 py-3 rounded-xl font-medium
                  border border-primary text-primary
                  overflow-hidden transition-colors duration-300
                  hover:text-white
                  group
                "
              >
                <span
                  className="
                    absolute inset-0 bg-primary
                    translate-y-full group-hover:translate-y-0
                    transition-transform duration-300 ease-in-out
                  "
                ></span>
                <span className="relative z-10 flex gap-2">
                  <Mail size={20} />
                  Email PR Team
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
