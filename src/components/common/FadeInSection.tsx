"use client";

import { ReactNode, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = {
  children: ReactNode;
  threshold?: number;
};

export default function FadeInSection({ children, threshold = 0.2 }: Props) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold, triggerOnce: true });

  if (inView) {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    });
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
}
