"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion, Variants } from "framer-motion";
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

// Motion variants
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 14 } },
};

// const imageHoverVariants: Variants = {
//   hover: { scale: 1.1, transition: { duration: 0.7, ease: "easeOut" } },
// };

export default function PressMedia() {
  return (
    <section className="py-16 sm:py-20 bg-background relative">
      <div className="max-w-7xl mx-4 sm:mx-6 md:mx-auto px-4 sm:px-6 md:px-12 text-center relative z-10">

        {/* Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-normal text-foreground mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          Press & Media
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-sm sm:text-base text-muted mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Our innovation and excellence have gained recognition in the media,
          from India&apos;s first all-digital lounge to our growing national
          presence.
        </motion.p>

        {/* Swiper */}
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
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {newsCards.map((card) => (
              <SwiperSlide key={card.id} className="px-2 sm:px-3 pb-4 flex">
                <motion.div
                  className="group bg-white shadow-md overflow-hidden flex flex-col text-left hover:shadow-lg transition flex-grow"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={containerVariants}
                >
                  {/* Image */}
                  <motion.div
                    className="relative w-full h-40 sm:h-48 md:h-56 overflow-hidden flex-shrink-0"
                    variants={cardVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </motion.div>

                  {/* Card content */}
                  <motion.div className="p-4 sm:p-6 flex flex-col flex-grow" variants={cardVariants}>
                    <h3 className="text-base sm:text-lg md:text-lg font-semibold text-foreground line-clamp-2 mb-2 sm:mb-3">
                      {card.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted line-clamp-3 mb-3 sm:mb-4">
                      {card.desc}
                    </p>
                    <Link
                      href="/press-coverage"
                      className="mt-auto text-primary font-medium hover:underline text-sm sm:text-base"
                    >
                      Read More →
                    </Link>
                  </motion.div>
                </motion.div>
              </SwiperSlide>            
            ))}
          </Swiper>

          {/* Navigation buttons */}
          <button className="swiper-button-prev-custom absolute top-1/2 -left-6 sm:-left-8 transform -translate-y-1/2 bg-primary text-background rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg hover:bg-secondary transition z-20">
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button className="swiper-button-next-custom absolute top-1/2 -right-6 sm:-right-8 transform -translate-y-1/2 bg-primary text-background rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg hover:bg-secondary transition z-20">
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Explore Coverage Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <LinkButton href="/press-coverage" className="mt-4 sm:mt-6">
            Explore Coverage
          </LinkButton>
        </motion.div>
      </div>
    </section>
  );
}
