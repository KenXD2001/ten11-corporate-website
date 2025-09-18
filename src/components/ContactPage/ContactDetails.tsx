"use client";

import { Mail } from "lucide-react";

export default function ContactDetails() {
  const contacts = [
    {
      title: "General Information",
      team: "Ten11 Headquarters",
      email: "info@ten11hospitality.com",
      icon: <Mail className="h-6 w-6 text-primary" />,
    },
    {
      title: "Careers Contact",
      team: "Careers Team",
      email: "careers@ten11hospitality.com",
      icon: <Mail className="h-6 w-6 text-primary" />,
    },
    {
      title: "Press & Media",
      team: "PR Team",
      email: "media@ten11hospitality.com",
      icon: <Mail className="h-6 w-6 text-primary" />,
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-background text-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="mb-12 sm:mb-16 md:mb-20 w-full mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 md:gap-10 mb-4">
            <h2 className="text-base sm:text-lg uppercase tracking-widest">
              Contact Us
            </h2>
            <div className="border-b-2 w-16 sm:w-[100px] border-foreground/50"></div>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
            We’re here to assist with general enquiries, careers, and media
            relations
          </h3>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="flex flex-col items-start p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 bg-white"
            >
              {/* Icon */}
              <div className="mb-4">{contact.icon}</div>

              {/* Title */}
              <h4 className="text-lg font-semibold text-foreground mb-1">
                {contact.title}
              </h4>

              {/* Team */}
              <p className="text-sm text-muted mb-4">{contact.team}</p>

              {/* Email */}
              <a
                href={`mailto:${contact.email}`}
                className="text-sm font-medium text-primary hover:underline break-all"
              >
                {contact.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
