"use client";

import Image from "next/image";
// import Link from "next/link";
import { motion, Variants } from "framer-motion";
import HomePurposeBG from "@/assets/images/Home/HomePurposeBG.webp";

export default function AboutSnapshot() {
  const content = {
    title: "About Snapshot",
    paragraphs: [
      <>
        Founded in 2019 by childhood friends{" "}
        <span className="font-semibold">Francis Gill</span> and
        <span className="font-semibold"> Manjit Singh</span>, Ten11 Hospitality
        was born to make every journey more enjoyable.
      </>,
      "From a simple idea between friends, it has grown into a brand redefining travel with comfort, care, and innovation.",
      <>
        The name <span className="font-semibold">10</span> signifies leadership,
        and <span className="font-semibold">11</span> represents intuition. Together,
        they reflect our commitment to excellence and thoughtful experiences.
      </>,
      "Each lounge embodies this vision, turning waiting into a memorable experience.",
    ],
    cta: "Discover Our Story",
    alt: "Ten 11 Hospitality Founders",
  };  

  // Motion variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const buttonVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        delay: 0.8
      }
    }
  };

  return (
    <motion.section
      className="mx-4 sm:mx-6 md:mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-24 max-w-7xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div className="bg-white shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* Image */}
        <motion.div
          className="relative h-64 sm:h-80 md:h-auto"
          variants={imageVariants}
        >
          <Image
            src={HomePurposeBG}
            alt={content.alt}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="p-3 sm:p-4 md:p-6 space-y-3 flex flex-col justify-center"
          variants={containerVariants}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-normal text-gray-900 leading-tight"
            variants={itemVariants}
          >
            {content.title}
          </motion.h2>

          {content.paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              className="text-gray-600 text-base sm:text-lg leading-relaxed"
              variants={itemVariants}
            >
              {paragraph}
            </motion.p>
          ))}

          <motion.button
            variants={buttonVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-6 sm:px-8 py-2 sm:py-3 bg-background border border-primary text-foreground font-semibold hover:text-background hover:bg-primary transition-all shadow-lg w-fit"
          >
            {content.cta}
          </motion.button>
        </motion.div>

      </motion.div>
    </motion.section>
  );
}
