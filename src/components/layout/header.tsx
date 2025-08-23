"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
// import { Icon } from "@iconify/react";
// import useTheme from "@/hooks/useTheme";
import { useEffect, useState, useCallback } from "react";
import Ten11Logo from "@/assets/images/Logos/Ten11-LOGO.svg";

const navLeft = [
  { name: "Home", path: "/home" },
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
  // const { theme, toggleTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = useCallback(() => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        setIsVisible(true);
      } else if (currentScrollY > 300 && currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader, { passive: true });
      return () => window.removeEventListener("scroll", controlHeader);
    }
  }, [controlHeader]);

  const renderNav = (items: { name: string; path: string }[]) =>
    items.map((item) => {
      const isActive = pathname === item.path;
      return (
        <Link
          key={item.path}
          href={item.path}
          className={`relative font-light group pb-0.5 transition-colors ${
            isActive ? "text-primary" : "text-foreground"
          }`}
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
      className={`w-full bg-background text-foreground border-b border-primary shadow-sm fixed top-0 left-0 transition-transform duration-500 ease-in-out z-40 ${isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="container mx-auto flex justify-between items-center relative h-24 px-6">
        {/* Left Nav */}
        <nav className="flex gap-10 font-medium uppercase tracking-wider">
          {renderNav(navLeft)}
        </nav>

        {/* Logo - absolute centered */}
        <Image
          src={Ten11Logo}
          alt="TEN11 Logo"
          width={60}
          height={40}
          className="object-contain absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />

        {/* Right Nav */}
        <div className="flex gap-10 items-center font-medium uppercase tracking-wider">
          {renderNav(navRight)}
          {/* <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-primary/20 hover:bg-primary/30 transition font-light text-lg"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Icon icon="ph:moon-bold" className="text-foreground" />
            ) : (
              <Icon icon="ph:sun-bold" className="text-yellow-400" />
            )}
          </button> */}
        </div>
      </div>
    </header>

  );
}
