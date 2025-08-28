"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Mail } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const isInputEmpty = email.trim() === "";

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

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
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 25 } },
  };

  return (
    <motion.section
      className="w-full bg-primary py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-serif font-light text-background mb-3"
        >
          Subscribe to Our Newsletter
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-background/80 mb-10 max-w-2xl mx-auto text-sm"
        >
          Stay updated with our latest insights, media coverage, and
          innovations. Join our community of brand enthusiasts.
        </motion.p>

        <motion.form
          onSubmit={handleSubscribe}
          className="relative max-w-3xl mx-auto"
          variants={itemVariants}
        >
          <div className="relative flex items-center">
            <motion.input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`flex-1 px-5 py-3 ring-1 ring-background focus:outline-none focus:ring-2 focus:ring-background text-white placeholder-white caret-white shadow-sm font-sans transition-all duration-500 ${isInputEmpty ? "text-center" : "text-left"
                }`}
              variants={itemVariants}
            />

            <AnimatePresence>
              {!isInputEmpty && (
                <motion.button
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  type="submit"
                  className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center justify-center gap-2 px-5 py-2 bg-background text-primary font-semibold shadow-md hover:shadow-lg font-serif"
                >
                  <Mail size={18} />
                  Subscribe
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </motion.form>
      </div>
    </motion.section>
  );
}
