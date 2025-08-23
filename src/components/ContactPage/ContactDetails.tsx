import { Icon } from "@iconify/react";

export default function ContactDetails() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
          Contact Details
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div className="space-y-4">
            <p className="flex items-center gap-3">
              <Icon icon="mdi:email-outline" className="w-5 h-5 text-primary" /> General Enquiries:{" "}
              <a href="mailto:info@ten11hospitality.com" className="underline">
                info@ten11hospitality.com
              </a>
            </p>
            <p className="flex items-center gap-3">
              <Icon icon="mdi:briefcase-outline" className="w-5 h-5 text-primary" /> Careers:{" "}
              <a href="mailto:careers@ten11hospitality.com" className="underline">
                careers@ten11hospitality.com
              </a>
            </p>
            <p className="flex items-center gap-3">
              <Icon icon="mdi:newspaper-variant-outline" className="w-5 h-5 text-primary" /> Press:{" "}
              <a href="mailto:press@ten11hospitality.com" className="underline">
                press@ten11hospitality.com
              </a>
            </p>
            <p className="flex items-center gap-3">
              <Icon icon="mdi:account-circle-outline" className="w-5 h-5 text-primary" /> Customer Queries:{" "}
              <a href="mailto:reservations@ten11hospitality.com" className="underline">
                reservations@ten11hospitality.com
              </a>
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <p className="flex items-center gap-3">
              <Icon icon="mdi:phone-outline" className="w-5 h-5 text-primary" /> Chennai: 9025204414
            </p>
            <p className="flex items-center gap-3">
              <Icon icon="mdi:phone-outline" className="w-5 h-5 text-primary" /> Mumbai: Coming Soon
            </p>
            <p className="flex items-center gap-3">
              <Icon icon="mdi:whatsapp" className="w-5 h-5 text-primary" /> WhatsApp:{" "}
              <a
                href="https://wa.me/9311087377"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                9311087377
              </a>
            </p>
            <p className="flex items-center gap-3">
              <Icon icon="mdi:linkedin" className="w-5 h-5 text-primary" />{" "}
              <a
                href="https://www.linkedin.com/company/ten-11-hospitality"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
