"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import Ten11Logo from "@/assets/images/Logos/Ten11-LOGO.svg";
import { Menu, X } from "lucide-react";

const navLeft = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Investors", path: "/investors" },
];

const navRight = [
  { name: "Careers", path: "/careers" },
  { name: "Press/Media", path: "/press" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Hide/show on scroll
  const controlHeader = useCallback(() => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 0) setIsVisible(true);
      else if (currentScrollY > 300 && currentScrollY > lastScrollY) setIsVisible(false);
      else if (currentScrollY < lastScrollY) setIsVisible(true);
      setLastScrollY(currentScrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader, { passive: true });
      return () => window.removeEventListener("scroll", controlHeader);
    }
  }, [controlHeader]);

  // Close mobile menu on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  const renderNav = (items: { name: string; path: string }[]) =>
    items.map((item) => {
      const isActive = pathname === item.path;
      return (
        <Link
          key={item.path}
          href={item.path}
          prefetch={false}
          className={`relative font-base group pb-0.5 transition-colors text-base sm:text-lg md:text-base ${
            isActive ? "text-primary" : "text-foreground"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {item.name}
          <span
            className={`absolute left-0 -bottom-0.5 h-[1px] w-0 bg-primary transition-all duration-300 ease-in-out group-hover:w-full ${
              isActive ? "w-full" : ""
            }`}
          />
        </Link>
      );
    });

  return (
    <header
      className={`w-full bg-background text-foreground border-b border-primary shadow-sm fixed top-0 left-0 transition-transform duration-500 ease-in-out z-50 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center h-16 sm:h-20 px-4 sm:px-6 md:px-6">
        {/* Desktop Nav Left */}
        <nav
          className="hidden md:flex gap-6 lg:gap-10 font-medium uppercase tracking-wider"
          aria-label="Main Navigation Left"
        >
          {renderNav(navLeft)}
        </nav>

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center justify-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
          aria-label="Ten11 Hospitality Home"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Image
            src={Ten11Logo}
            alt="TEN11 Logo"
            width={70}
            height={35}
            priority
            className="object-contain sm:w-20 sm:h-10 md:w-20 md:h-10"
          />
        </Link>

        {/* Desktop Nav Right */}
        <nav
          className="hidden md:flex gap-6 lg:gap-10 items-center font-medium uppercase tracking-wider"
          aria-label="Main Navigation Right"
        >
          {renderNav(navRight)}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex justify-center items-center w-10 h-10 relative z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-controls="mobile-menu"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 sm:w-8 sm:h-8 text-foreground transition-transform duration-300" />
          ) : (
            <Menu className="w-6 h-6 sm:w-8 sm:h-8 text-foreground transition-transform duration-300" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed top-0 right-0 w-64 sm:w-72 md:w-80 h-screen bg-background shadow-xl transform transition-transform duration-500 ease-in-out z-40 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav
          className="flex flex-col gap-6 font-medium uppercase tracking-wider h-full justify-center px-6"
          aria-label="Mobile Navigation"
        >
          {[...navLeft, ...navRight].map((item, index) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                prefetch={false}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`relative font-base text-lg ${
                  isActive ? "text-primary" : "text-foreground"
                } ${isMobileMenuOpen ? "menu-item-fade-in" : ""}`}
                style={{
                  animationDelay: isMobileMenuOpen ? `${0.1 + index * 0.1}s` : "0s",
                }}
              >
                {item.name}
                <span
                  className={`absolute left-0 -bottom-0.5 h-[1px] w-0 bg-primary transition-all duration-300 ease-in-out group-hover:w-full ${
                    isActive ? "w-full" : ""
                  }`}
                />
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
