"use client";

import { motion, Variants } from "framer-motion";
import { Linkedin, Users, TrendingUp, Briefcase } from "lucide-react";

export default function LinkedInSection() {
  const handleLinkedInClick = () => {
    // Replace with your actual LinkedIn company page URL
    window.open("https://linkedin.com/company/ten11-hospitality", "_blank");
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

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 12 } 
    },
  };

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Industry Insights",
      description: "Stay ahead with the latest trends in hospitality and transit sector"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Career Opportunities",
      description: "Discover exciting career opportunities and company updates"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Professional Network",
      description: "Connect with industry professionals and thought leaders"
    }
  ];

  return (
    <motion.section
      className="w-full bg-primary py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-serif font-light text-white mb-4"
          >
            Connect with Us on LinkedIn
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-white/90 mb-8 max-w-3xl mx-auto text-lg leading-relaxed"
          >
            Join our professional network and stay connected with Ten11 Hospitality. 
            Follow us for industry insights, company updates, and career opportunities.
          </motion.p>

          <motion.button
            variants={itemVariants}
            onClick={handleLinkedInClick}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Linkedin className="w-5 h-5" />
            Follow Us on LinkedIn
          </motion.button>
        </div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4 text-white">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
