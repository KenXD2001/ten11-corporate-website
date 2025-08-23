"use client";

import { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import AccordionItem from "./AccordionItem";

interface CookieDialogProps {
  show: boolean;
  onClose: () => void;
  openAccordion: string;
  setOpenAccordion: (value: string) => void;
}

export default function CookieDialog({
  show,
  onClose,
  openAccordion,
  setOpenAccordion,
}: CookieDialogProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  const accordionData = [
    {
      title: "Essentials",
      value: "essentials",
      isFirst: true,
      content:
        "Without these cookies, Ten11 website may not work properly. These cookies are strictly necessary for Ten11 sites to ensure security, ease of use and functionality. Others provide you with services available across our websites and are needed to use some of its features.",
    },
    {
      title: "Analytics",
      value: "analytics",
      content:
        "Analytics cookies are used to understand how visitors use Ten11 website. This includes capturing visitors’ location, how pages are browsed, patterns and preferences within their journey, time spent on site, and additional data that helps us improve your experience. Some of these include third party cookies used by external companies, which provide a service to Ten11, and are implemented to provide you with a quick and seamless personalised experience.",
    },
    {
      title: "Performance and Functional",
      value: "performance",
      content:
        "We use performance & functional cookies to further improve Ten11 website in order to always provide you with the best possible online experience. For example, to ensure the speed of our web pages, enable video content and faster browsing. These technologies are not always essential but without these cookies, certain website functionality may become unavailable. Some of these cookies are third party cookies used by third party companies which provide a service to Ten11.",
    },
    {
      title: "Advertising and Marketing",
      value: "advertising",
      content:
        "Advertising and marketing cookies are used to limit the number of times you see an advert, to show you adverts relevant to you, and to help measure the effectiveness of marketing activities. These cookies can be third party cookies used by third party companies, which provide a service to Ten11. Among others, they include social media cookies. Advertising and Marketing cookies can be utilised to build a profile of your interests based on the browsing information they collect from you, which includes identifying your browser and terminal equipment. If you do not allow these cookies you will get a less targeted experience.",
    },
  ];

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && modalRef.current === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!show) return null;

  const handleSave = () => {
    onClose();
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-80 flex items-center justify-center p-4 animate-fadeIn"
    >
      <div
        ref={modalRef}
        className="bg-background rounded-lg shadow-2xl border border-primary/20 max-w-2xl w-full max-h-[80vh] overflow-y-auto transition-all duration-300"
      >
        <div className="p-6">
          <h3 className="text-base font-semibold text-foreground mb-6">
            Customise Cookie Settings
          </h3>

          <div className="space-y-4">
            {accordionData.map((item) => (
              <AccordionItem
                key={item.value}
                title={item.title}
                content={item.content}
                isFirst={item.isFirst}
                value={item.value}
                openAccordion={openAccordion}
                setOpenAccordion={setOpenAccordion}
              />
            ))}
          </div>

          <button className="flex items-center gap-1 mt-6 text-foreground/80 hover:text-foreground transition-colors">
            View Cookie Statement
            <Icon icon="mdi:arrow-right" className="text-sm" />
          </button>

          <div className="flex justify-between items-center mt-8">
            <button
              className="py-2 px-6 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              onClick={handleSave}
            >
              Save
            </button>
            <div className="flex gap-3">
              <button className="py-2 px-4 rounded-md border border-primary/30 text-foreground hover:bg-muted transition-colors">
                Reject All
              </button>
              <button className="py-2 px-4 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                Enable All and Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
