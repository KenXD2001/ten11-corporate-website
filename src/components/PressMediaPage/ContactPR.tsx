"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Mail } from "lucide-react";

export default function ContactPR() {
  const [hovered, setHovered] = useState(false);

  // Motion variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 14 } },
  };

  const buttonVariants: Variants = {
    hover: { scale: 1.05, transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <motion.section
      className="w-full bg-gray-50 py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-6">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-primary mb-3"
          variants={itemVariants}
        >
          Contact Our PR Team
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg text-muted mb-10 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          For media inquiries, collaborations, or press opportunities, please reach out to our communications team.
        </motion.p>

        {/* Email Button */}
        <motion.div
          variants={itemVariants}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
        >
          <motion.a
            href="mailto:pr@ten11hospitality.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-semibold text-lg rounded-2xl shadow-md hover:shadow-lg transition-all"
            variants={buttonVariants}
            whileHover="hover"
          >
            <Mail size={20} />
            Email PR Team
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
