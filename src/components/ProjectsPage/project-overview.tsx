"use client";

import Image from "next/image";

interface ProjectOverviewProps {
  title: string;
  description: string;
  imgSrc: any;
  features: string[];
  location: string;
}

export default function ProjectOverview({
  title,
  description,
  imgSrc,
  features,
  location,
}: ProjectOverviewProps) {
  return (
    <div className="space-y-6">
      {/* Image */}
      <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="object-cover object-center"
        />
        <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full">
          {location}
        </div>
      </div>

      {/* Content */}
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">{title}</h2>
        <p className="text-gray-700 leading-relaxed mb-6">{description}</p>

        <h3 className="text-lg font-medium mb-2">Key Features</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {features.map((feature, idx) => (
            <li
              key={idx}
              className="bg-gray-100 px-4 py-2 rounded-lg text-sm text-gray-800"
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
