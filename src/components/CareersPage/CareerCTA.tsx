"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Search, Users } from "lucide-react";
import Button from "../common/Button";

export default function CareerCTA() {
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const isInputEmpty = email.trim() === "";

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
    setEmail("");
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="w-full bg-primary text-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
        {/* Left Panel - Search Careers */}
        <div className="bg-primary text-background px-8 lg:px-12 py-16 lg:py-20 grid grid-rows-3 gap-8 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-background/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-background/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

          {/* Row 1: Heading */}
          <motion.div
            className="self-end"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-background/10 rounded-lg backdrop-blur-sm">
                <Search size={24} className="text-background" />
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                Search for careers
              </h3>
            </div>
          </motion.div>

          {/* Row 2: Subheading */}
          <motion.p
            className="text-lg md:text-xl lg:text-xl leading-relaxed text-background/90 self-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Find your next opportunity and learn more about our hiring process at Ten 11 Hospitality.
          </motion.p>

          {/* Row 3: Bottom button */}
          <motion.div
            className="self-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button variant="secondary" className="group bg-background text-primary hover:bg-background/90">
              View Open Opportunities
            </Button>
          </motion.div>
        </div>

        {/* Right Panel - Talent Network */}
        <div className="bg-primary text-background px-8 lg:px-12 py-16 lg:py-20 grid grid-rows-3 gap-8 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-background/10 rounded-full -translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-background/20 rounded-full translate-y-1/2 translate-x-1/2 blur-3xl"></div>

          {/* Row 1: Heading */}
          <motion.div
            className="self-end"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-background/10 rounded-lg backdrop-blur-sm">
                <Users size={24} className="text-background" />
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                Join Talent Network
              </h3>
            </div>
          </motion.div>

          {/* Row 2: Subheading */}
          <motion.p
            className="text-lg md:text-xl lg:text-xl leading-relaxed text-background/90 self-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Get notified of open positions that match your interests and experience the Ten 11 Hospitality culture.
          </motion.p>

          {/* Row 3: Email form */}
          <motion.form
            onSubmit={handleSubscribe}
            className="self-start w-full relative"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative flex items-center">
              <motion.input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={`w-full px-5 py-4 bg-background/10 backdrop-blur-md border border-background/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-background/50 text-background placeholder-background/70 caret-background shadow-lg font-sans transition-all duration-500 ${
                  isInputEmpty ? "text-center" : "text-left pr-16"
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
                    className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center gap-2 px-4 py-2 bg-background text-primary font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail size={16} />
                    <span>Subscribe</span>
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
            <motion.p
              className="text-background/70 text-sm mt-3 ml-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: isFocused || !isInputEmpty ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              We'll only send relevant opportunities
            </motion.p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
