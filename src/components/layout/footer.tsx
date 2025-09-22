"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Ten11Logo from "@/assets/images/Logos/Ten11-LOGO-BIG.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Top Section */}
      <div className="max-w-7xl mx-4 sm:mx-6 md:mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-8 sm:gap-12 py-12 border-b border-background/20">
        {/* Logo & Description */}
        <div>
          <div className="mb-4 sm:mb-6">
            <Image
              src={Ten11Logo}
              alt="TEN11 Logo"
              width={220}
              height={50}
              className="object-contain"
            />
          </div>
          <p className="text-sm sm:text-base text-background/70 leading-relaxed max-w-md">
            Ten11 Hospitality is committed to excellence in hospitality ventures. We build experiences that inspire trust and
            long-term relationships.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3 sm:mb-4 text-primary uppercase tracking-wide text-sm sm:text-base">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm sm:text-base">
            {[
              { name: "About", href: "/about" },
              { name: "Our Presence", href: "/presence" },
              { name: "Careers", href: "/careers" },
              { name: "Press", href: "/press" },
              { name: "Contact", href: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="hover:text-primary cursor-pointer transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="font-semibold mb-3 sm:mb-4 text-primary uppercase tracking-wide text-sm sm:text-base">
            Connect
          </h3>
          <div className="flex gap-2 sm:gap-3 mb-4 sm:mb-6">
            {[
              // { icon: "mdi:globe", link: "#" },
              // { icon: "mdi:twitter", link: "#" },
              // { icon: "mdi:facebook", link: "#" },
              {
                icon: "mdi:linkedin",
                link: "https://www.linkedin.com/company/ten-11-hospitality",
              },
            ].map((s, i) => (
              <a
                key={i}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-background/10 hover:bg-primary transition"
              >
                <Icon
                  icon={s.icon}
                  className="text-background text-base sm:text-lg"
                />
              </a>
            ))}
          </div>

          <p className="text-sm sm:text-base text-background/70">
            Dr. MGR Chennai Central Transit Hub, Chennai 600003
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-4 sm:mx-6 md:mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] items-center gap-2 sm:gap-4 py-6 text-xs sm:text-sm text-background/60">
        <p className="mb-1 sm:mb-0">
          © 2025{" "}
          <span className="font-semibold text-background">
            Ten11 Hospitality
          </span>
          . All rights reserved.
        </p>

        <p className="mb-1 sm:mb-0 hover:text-primary cursor-pointer transition">
          Privacy Statement
        </p>

        <p className="hover:text-primary cursor-pointer transition">
          Terms of Use
        </p>
      </div>
    </footer>
  );
}
