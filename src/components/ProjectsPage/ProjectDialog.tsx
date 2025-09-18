"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { ReactNode, MouseEvent } from "react";

interface ProjectDialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function ProjectDialog({
  isOpen,
  onClose,
  children,
}: ProjectDialogProps) {
  // Prevent closing when clicking inside the dialog
  const handleDialogClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm" // Increased z-index
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Dialog container */}
          <motion.div
            className="relative w-[90%] h-[80%] bg-white rounded-2xl shadow-xl overflow-y-auto z-[10001]" // Even higher z-index
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={handleDialogClick}
          >
            {/* Dialog content */}
            <div className="p-6">{children}</div>
          </motion.div>

          {/* Close button with gap */}
          <button
            onClick={onClose}
            className="mt-6 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition z-[10002]" // Highest z-index
          >
            <X size={24} className="text-gray-700" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
