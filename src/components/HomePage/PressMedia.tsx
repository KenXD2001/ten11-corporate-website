"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import LinkButton from "../common/LinkButton";

import Media1 from "@/assets/images/Home/HomePress04.webp";
import Media2 from "@/assets/images/Home/HomePress02.webp";
import Media3 from "@/assets/images/Home/HomePress03.webp";
import Media4 from "@/assets/images/Home/HomePress04.webp";
import Media5 from "@/assets/images/Home/HomePress05.webp";
import Media6 from "@/assets/images/Home/HomePress06.webp";

import "swiper/css";
import "swiper/css/navigation";

const newsCards = [
  {
    id: 1,
    img: Media1,
    title: "Our Digital Lounge Sets New Benchmark in Hospitality",
    desc: "India's first all-digital lounge redefines guest experiences with seamless check-ins, smart services, and an immersive ambiance.",
  },
  {
    id: 2,
    img: Media2,
    title: "National Expansion: Opening New Lounges Across Cities",
    desc: "Our growing footprint in India brings comfort and innovation closer to travelers nationwide with a focus on premium services.",
  },
  {
    id: 3,
    img: Media3,
    title: "Recognized Among Top Innovative Hospitality Brands",
    desc: "From design to digital integration, we are being acknowledged for creating spaces that transform the way people travel.",
  },
  {
    id: 4,
    img: Media4,
    title: "Partnering With Industry Leaders for Smarter Services",
    desc: "Collaboration with global tech firms ensures that our lounges remain future-ready and meet the highest standards.",
  },
  {
    id: 5,
    img: Media5,
    title: "Featured in Leading Business Magazines Nationwide",
    desc: "Media coverage highlights our journey from startup vision to becoming a trusted name in the hospitality sector.",
  },
  {
    id: 6,
    img: Media6,
    title: "Innovation Driving Customer-Centric Experiences",
    desc: "Every feature is designed to deliver comfort, personalization, and convenience to elevate customer satisfaction.",
  },
];

export default function PressMedia() {
  return (
    <section className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-normal text-foreground mb-6">
          Press & Media
        </h2>

        <p className="text-sm text-muted mb-12 max-w-3xl mx-auto">
          Our innovation and excellence have gained recognition in the media,
          from India&apos;s first all-digital lounge to our growing national
          presence.
        </p>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            loop
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {newsCards.map((card) => (
              <SwiperSlide key={card.id} className="px-2 pb-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white shadow-md overflow-hidden flex flex-col text-left hover:shadow-lg transition"
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-foreground line-clamp-3 mb-3">
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted line-clamp-5 mb-4">
                      {card.desc}
                    </p>
                    <Link
                      href="/press-coverage"
                      className="mt-auto text-primary font-medium hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="swiper-button-prev-custom absolute top-1/2 -left-8 transform -translate-y-1/2 bg-primary text-background rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-secondary transition z-20">
            <ChevronLeft size={24} />
          </button>
          <button className="swiper-button-next-custom absolute top-1/2 -right-8 transform -translate-y-1/2 bg-primary text-background rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-secondary transition z-20">
            <ChevronRight size={24} />
          </button>
        </div>

        <LinkButton href="/press-coverage" className="mt-2">
          Explore Coverage
        </LinkButton>
      </div>
    </section>
  );
}
