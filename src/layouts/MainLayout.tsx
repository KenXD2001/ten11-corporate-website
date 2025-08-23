"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import CookieConsent from "@/components/layout/CookieConsent";
import WhiteLogoScreen from "@/components/layout/WhiteScreenLogo";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showWebsite, setShowWebsite] = useState(false);
  const [showLogoScreen, setShowLogoScreen] = useState(false);
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  const [hasRespondedToCookies, setHasRespondedToCookies] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const hasResponded = localStorage.getItem("cookieConsentResponded");
    if (hasResponded) {
      setHasRespondedToCookies(true);
      setShowLogoScreen(true);
    } else {
      const cookieTimer = setTimeout(() => {
        setShowCookieConsent(true);
      }, 3000);
      return () => clearTimeout(cookieTimer);
    }
  }, []);

  useEffect(() => {
    if (hasRespondedToCookies) {
      let logoTimer: NodeJS.Timeout | null = null;
      const websiteTimer: NodeJS.Timeout | null = null;

      if (showLogoScreen) {
        logoTimer = setTimeout(() => {
          setShowLogoScreen(false);
          setShowWebsite(true);
        }, 2000);
      }

      return () => {
        if (logoTimer) clearTimeout(logoTimer);
        if (websiteTimer) clearTimeout(websiteTimer);
      };
    }
  }, [hasRespondedToCookies, showLogoScreen]);

  useEffect(() => {
    if (hasRespondedToCookies && pathname) {
      setShowWebsite(false);
      setShowLogoScreen(true);

      const transitionTimer = setTimeout(() => {
        setShowLogoScreen(false);
        setShowWebsite(true);
      }, 1500);

      return () => clearTimeout(transitionTimer);
    }
  }, [pathname, hasRespondedToCookies]);

  const handleCookieResponse = () => {
    localStorage.setItem("cookieConsentResponded", "true");
    setShowCookieConsent(false);
    setHasRespondedToCookies(true);
    setShowLogoScreen(true);
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {showLogoScreen && <WhiteLogoScreen />}

      {showCookieConsent && <CookieConsent onResponse={handleCookieResponse} />}

      <div
        style={{
          opacity: showWebsite ? 1 : 0,
          transition: "opacity 1s ease-in-out",
        }}
        className="flex flex-col min-h-screen"
      >
        <header className="sticky top-0 z-40">
          <Header />
        </header>

        <main className="flex-grow">{children}</main>

        <Footer />
      </div>
    </div>
  );
}
