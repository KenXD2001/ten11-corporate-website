import Image from "next/image";
import { motion, Variants } from "framer-motion";
import HomePurposeBG from "@/assets/images/Home/HomePurposeBG.webp";

export default function BrandPurposeSection() {
  const content = {
    title: "Beyond Transit, An Experience to Remember",
    paragraphs: [
      "Travel is more than moving from one place to another — it's a journey of moments.",
      <>
        At <span className="font-semibold text-primary">Ten11 Hospitality</span>, we
        ensure every pause matters. Our lounges combine comfort, hygiene, and
        innovation for a seamless experience.
      </>,
      "Elegant interiors, attentive service, and curated amenities make waiting a pleasure, turning moments into memories.",
    ],
    button: "Our Story",
    alt: "Lounge ambience with warm lighting and staff serving",
  };  

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const imageVariants: Variants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        delay: 0.3
      }
    }
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
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="bg-white shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* Text Content */}
        <motion.div
          className="p-3 sm:p-4 md:p-6 space-y-3 flex flex-col justify-center"
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-normal text-gray-900 leading-tight"
          >
            {content.title}
          </motion.h2>

          {content.paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              variants={itemVariants}
              className="text-gray-600 text-base sm:text-lg leading-relaxed"
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
            {content.button}
          </motion.button>
        </motion.div>

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

      </div>
    </motion.section>
  );
}