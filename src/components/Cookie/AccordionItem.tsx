import { useState } from "react";
import { Icon } from "@iconify/react";

interface AccordionItemProps {
  title: string;
  content: string;
  isFirst?: boolean;
  value: string;
  openAccordion: string;
  setOpenAccordion: (value: string) => void;
}

export default function AccordionItem({
  title,
  content,
  isFirst = false,
  value,
  openAccordion,
  setOpenAccordion,
}: AccordionItemProps) {
  const isOpen = openAccordion === value;
  const [switchOn, setSwitchOn] = useState(isFirst);

  const toggleAccordion = () => {
    setOpenAccordion(isOpen ? "" : value);
  };

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={toggleAccordion}
        className="flex justify-between items-center w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 transition"
      >
        {/* Left: Title */}
        <span className="text-left font-medium">{title}</span>

        {/* Right: Always Active / Switch + Arrow */}
        <div className="flex items-center gap-2">
          {isFirst ? (
            <span className="font-medium">
              Always Active
            </span>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSwitchOn(!switchOn);
              }}
              className={`relative inline-flex h-5 w-10 items-center rounded-full transition ${
                switchOn ? "bg-primary" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  switchOn ? "translate-x-5" : "translate-x-1"
                }`}
              />
            </button>
          )}

          {isOpen ? (
            <Icon icon="mdi:chevron-up" className="text-xl" />
          ) : (
            <Icon icon="mdi:chevron-down" className="text-xl" />
          )}
        </div>
      </button>

      {/* Content */}
      {isOpen && (
        <div className="px-4 py-3 text-gray-700 animate-fadeIn">
          {content}
        </div>
      )}
    </div>
  );
}
