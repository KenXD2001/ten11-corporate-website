import Image from "next/image";
import Link from "next/link";

import HomePurposeBG from "@/assets/images/Home/HomePurposeBG.webp";

export default function AboutSnapshot() {
  const content = {
    title: "About Snapshot",
    paragraphs: [
      <>
        Founded in 2019 by childhood friends{" "}
        <span className="font-semibold">Francis Gill</span> and
        <span className="font-semibold"> Manjit Singh</span>, Ten 11 Hospitality
        was born from a shared dream — to make every journey more beautiful.
      </>,
      "What started as an idea between two friends has grown into a brand that reimagines travel through comfort, care, and innovation.",
      <>
        The name itself carries a deeper meaning. Inspired by numerology,{" "}
        <span className="font-semibold">10</span>
        signifies leadership and innovation, while{" "}
        <span className="font-semibold">11</span> represents intuition and
        enlightenment. Together, they embody the values that guide us — a
        commitment to excellence, thoughtful experiences, and world-class
        hospitality.
      </>,
      "At Ten 11, every lounge is not just a space, but a reflection of this vision: to transform waiting into an experience worth remembering.",
    ],
    cta: "Discover Our Story",
    alt: "Ten 11 Hospitality Founders",
  };

  return (
    <section className="container mx-auto px-6 py-24">
      <div className="bg-white shadow-xl overflow-hidden grid md:grid-cols-2">
        <div className="relative h-96 md:h-auto">
          <Image
            src={HomePurposeBG}
            alt={content.alt}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="p-12 space-y-6 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900 leading-tight">
            {content.title}
          </h2>

          {content.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-600 text-base leading-relaxed">
              {paragraph}
            </p>
          ))}

          <Link
            href="/about"
            className="mt-4 px-8 py-3 bg-background border border-primary text-foreground font-semibold hover:text-background hover:bg-primary transition-all shadow-lg w-fit"
          >
            {content.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
