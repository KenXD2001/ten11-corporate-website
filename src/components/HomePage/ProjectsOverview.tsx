"use client";

import Image from "next/image";
// import Link from "next/link";
import LinkButton from "../common/LinkButton";
import { motion, Variants, Transition } from "framer-motion";

import HomeProjects01 from "@/assets/images/Home/HomeProjects01.webp";
import HomeProjects02 from "@/assets/images/Home/HomeProjects02.webp";
import HomeProjects03 from "@/assets/images/Home/HomeProjects03.webp";

const projects = [
  {
    title: "New Delhi – IRCTC Executive Lounge",
    description: "Premium service and comfort in India's busiest station.",
    imgSrc: HomeProjects01,
    alt: "New Delhi IRCTC Executive Lounge",
  },
  {
    title: "Chennai Central – INEJ Lounge",
    description: "Contemporary and spacious, crafted for today's travelers.",
    imgSrc: HomeProjects02,
    alt: "Chennai Central INEJ Lounge",
  },
  {
    title: "Mumbai Central – INEJ Digital Lounge",
    description:
      "India's first all-digital lounge, changing hospitality with technology.",
    imgSrc: HomeProjects03,
    alt: "Mumbai Central INEJ Digital Lounge",
  },
];

export default function ProjectsOverview() {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
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

  const cardVariants: Variants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100
      }
    }
  };

  const buttonVariants: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
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

  const imageHoverVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.7,
        ease: "easeOut" as Transition["ease"], // cast to satisfy TypeScript
      },
    }
  };

  return (
    <motion.section
      className="mx-auto px-6 py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div
        className="max-w-3xl mx-auto text-center mb-12"
        variants={containerVariants}
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-normal text-foreground mb-6"
        >
          Projects Overview
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-sm text-muted leading-relaxed"
        >
          From busy railway stations to India&apos;s first digital lounge, Ten 11
          Hospitality is redefining the waiting experience — blending comfort,
          convenience, and warm service.
        </motion.p>
      </motion.div>

      <motion.div
        className="flex justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="group relative bg-white shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-500"
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="relative h-64 overflow-hidden"
                variants={imageHoverVariants}
                whileHover="hover"
              >
                <Image
                  src={project.imgSrc}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              </motion.div>

              <div className="p-5">
                <h3 className="text-lg font-normal text-foreground group-hover:text-primary transition-colors duration-500">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="mt-6 text-center"
        variants={buttonVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <LinkButton
          href="/projects"
          variant="outline"
        >
          View All Projects
        </LinkButton>
      </motion.div>
    </motion.section>
  );
}