"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

// Dynamically load screens that don't need SSR (performance boost)
const CookieConsent = dynamic(() => import("@/components/layout/CookieConsent"), {
  ssr: false,
});
const LoadingScreen = dynamic(() => import("@/components/layout/loading_screen"), {
  ssr: false,
});

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [showWebsite, setShowWebsite] = useState(false);
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  const [hasRespondedToCookies, setHasRespondedToCookies] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const pathname = usePathname();

  // On first load, check cookie consent
  useEffect(() => {
    const hasResponded = localStorage.getItem("cookieConsentResponded");
    if (hasResponded) {
      setHasRespondedToCookies(true);
      setShowLoadingScreen(true);
    } else {
      // Show cookie instantly instead of waiting 3s (better UX)
      setShowCookieConsent(true);
    }
  }, []);

  // After cookies are accepted, show loading screen then page
  useEffect(() => {
    if (hasRespondedToCookies) {
      const loadingTimer = setTimeout(() => {
        setShowLoadingScreen(false);
        setIsPageLoaded(true);
        setShowWebsite(true);
      }, 2000);
      return () => clearTimeout(loadingTimer);
    }
  }, [hasRespondedToCookies]);

  // Transition between routes
  useEffect(() => {
    if (hasRespondedToCookies && pathname) {
      setShowWebsite(false);
      setShowLoadingScreen(true);

      const transitionTimer = setTimeout(() => {
        setShowLoadingScreen(false);
        setShowWebsite(true);
      }, 1200);

      return () => clearTimeout(transitionTimer);
    }
  }, [pathname, hasRespondedToCookies]);

  const handleCookieResponse = () => {
    localStorage.setItem("cookieConsentResponded", "true");
    setShowCookieConsent(false);
    setHasRespondedToCookies(true);
    setShowLoadingScreen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Fullscreen overlays */}
      {showLoadingScreen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
          <LoadingScreen isLoading={true} />
        </div>
      )}

      {showCookieConsent && (
        <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/50">
          <CookieConsent onResponse={handleCookieResponse} />
        </div>
      )}

      {!isPageLoaded && (
        <div className="fixed inset-0 z-[9997] flex items-center justify-center bg-background">
          <LoadingScreen isLoading={true} />
        </div>
      )}

      {/* Main site wrapper */}
      <div
        style={{
          opacity: showWebsite && isPageLoaded ? 1 : 0,
          transition: "opacity 0.8s ease-in-out",
          pointerEvents: showWebsite && isPageLoaded ? "auto" : "none",
        }}
        className="flex flex-col min-h-screen"
      >
        <header className="sticky top-0 z-50">
          <Header />
        </header>

        <main className="flex-grow z-0">{children}</main>

        <Footer />
      </div>
    </div>
  );
}