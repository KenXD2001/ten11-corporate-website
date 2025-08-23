import Image from "next/image";
import HomePurposeBG from "@/assets/images/Home/HomePurposeBG.webp";

export default function BrandPurposeSection() {
  const content = {
    title: "Beyond Transit, An Experience to Remember",
    paragraphs: [
      "Travel is more than just moving from one place to another — it's a journey of emotions, expectations, and moments in between.",
      <>
        At <span className="font-semibold text-primary">Ten11 Hospitality</span>
        , we believe every moment of your journey should matter — not just the
        destination. Our lounges combine comfort, hygiene, and innovation,
        ensuring every pause feels seamless.
      </>,
      "With elegant interiors, attentive service, and curated amenities, we transform waiting hours into meaningful experiences. It's not just a place to sit; it's a space to relax, recharge, and remember.",
    ],
    button: "Our Story",
    alt: "Lounge ambience with warm lighting and staff serving",
  };

  return (
    <section className="container mx-auto px-6 py-24">
      <div className="bg-white shadow-xl overflow-hidden grid md:grid-cols-2">
        <div className="p-12 space-y-6 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900 leading-tight">
            {content.title}
          </h2>

          {content.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-600 text-base leading-relaxed">
              {paragraph}
            </p>
          ))}

          <button className="mt-4 px-8 py-3 bg-background border border-primary text-foreground font-semibold hover:text-background hover:bg-primary transition-all shadow-lg w-fit">
            {content.button}
          </button>
        </div>

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
      </div>
    </section>
  );
}
