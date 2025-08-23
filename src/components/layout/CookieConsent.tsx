"use client";

import { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import CookieDialog from "../Cookie/CookieDialog";

interface CookieConsentProps {
  onResponse: () => void;
}

export default function CookieConsent({ onResponse }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showCustomizeModal, setShowCustomizeModal] = useState(false);
  const [openAccordion, setOpenAccordion] = useState("essentials"); // default open
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Show immediately when component mounts
    setIsVisible(true);

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowCustomizeModal(false);
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const handleAccept = () => {
    handleResponse();
    localStorage.setItem("cookieConsent", "accepted");
    localStorage.setItem("cookieConsentResponded", "true");
  };

  const handleReject = () => {
    handleResponse();
    localStorage.setItem("cookieConsent", "rejected");
    localStorage.setItem("cookieConsentResponded", "true");
  };

  const handleResponse = () => {
    setIsVisible(false);
    // Notify parent that user has responded
    onResponse();
  };

  const toggleCustomizeModal = () => {
    setShowCustomizeModal(!showCustomizeModal);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setShowCustomizeModal(false);
    }
  };

  const toggleAccordion = (section: string) => {
    setOpenAccordion((prev) => (prev === section ? "" : section));
  };

  return (
    <>
      {/* Backdrop with blur effect - only show when cookie consent is visible */}
      {isVisible && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-60 transition-opacity duration-500" />
      )}

      {/* Cookie Consent Component */}
      <div
        className={`
          fixed left-1/2 transform -translate-x-1/2 
          bg-background/80 backdrop-blur-md 
          rounded-lg shadow-2xl border border-primary/20 
          p-6 w-[80%]
          transition-all duration-500 ease-in-out z-70
          ${isVisible ? "bottom-6 opacity-100" : "-bottom-full opacity-0"}
        `}
      >
        <div className="flex flex-col gap-4">
          {/* Top Row: Heading + Customize */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-primary/10 p-2 rounded-full mr-3">
                <Icon icon="ph:cookie" className="text-2xl text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Cookie Preferences
              </h3>
            </div>

            {/* Customise Button */}
            <button
              onClick={toggleCustomizeModal}
              className="flex items-center gap-1 py-2 px-4 text-foreground/80 hover:text-foreground transition-colors"
            >
              Customise Settings
              <Icon icon="mdi:arrow-right" className="text-sm" />
            </button>
          </div>

          {/* Bottom Row: Text + Buttons */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Left Text */}
            <div>
              <h4 className="text-foreground/90 mb-2 font-medium text-sm">
                We use cookies to enhance your user experience.
              </h4>
              <p className="text-foreground/80 text-sm">
                You can accept all cookies or customise settings to change your
                preferences. Learn more in our{" "}
                <span className="underline hover:no-underline hover:font-medium cursor-pointer transition-all">
                  Cookie Statement.
                </span>
              </p>
            </div>

            {/* Right Buttons */}
            <div className="flex gap-3 shrink-0 w-full md:w-auto">
              <button
                onClick={handleReject}
                className="flex-1 py-2 px-4 rounded-md border border-primary/30 text-foreground hover:bg-muted transition-colors whitespace-nowrap text-center"
              >
                Reject All
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 py-2 px-4 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors whitespace-nowrap text-center"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>

      <CookieDialog
        show={showCustomizeModal}
        onClose={() => setShowCustomizeModal(false)}
        openAccordion={openAccordion}
        setOpenAccordion={setOpenAccordion}
      />
    </>
  );
}
