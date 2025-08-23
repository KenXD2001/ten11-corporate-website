// components/layout/WhiteLogoScreen.tsx
import { motion, Transition } from 'framer-motion';
import Image from 'next/image';
import Ten11Logo from "@/assets/images/Logos/Ten11-LOGO-removebg.png";

export default function WhiteLogoScreen() {
  const logoVariants = {
    fadeInOut: {
      opacity: [0, 1, 0],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      } as Transition,
    },
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <motion.div
        className="w-48 h-48"
        variants={logoVariants}
        animate="fadeInOut"
      >
        <div className="w-24 h-24 bg-background rounded-full flex items-center justify-center text-white">
          <Image
            src={Ten11Logo}
            alt="TEN11 Logo"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
}