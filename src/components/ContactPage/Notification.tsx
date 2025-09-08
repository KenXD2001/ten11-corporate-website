"use client";

import { motion } from "framer-motion";
import { X, CheckCircle, AlertTriangle } from "lucide-react";

type NotificationProps = {
  id: string;
  type: "success" | "error";
  message: string;
  duration?: number;
  onClose: (id: string) => void;
};

export default function Notification({
  id,
  type,
  message,
  duration = 3000,
  onClose,
}: NotificationProps) {
  const isSuccess = type === "success";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className={`flex flex-col max-w-sm rounded-xl shadow-xl overflow-hidden border
        ${
          isSuccess
            ? "bg-background text-foreground border-primary"
            : "bg-background text-foreground border-foreground"
        }`}
    >
      {/* Message Row */}
      <div className="flex items-center gap-3 px-5 py-4">
        {isSuccess ? (
          <CheckCircle className="w-6 h-6 text-primary" />
        ) : (
          <AlertTriangle className="w-6 h-6 text-foreground" />
        )}
        <p className="text-sm sm:text-base font-medium flex-1">{message}</p>
        <button
          onClick={() => onClose(id)}
          className="ml-auto hover:opacity-70 transition"
        >
          <X className="w-5 h-5 text-muted" />
        </button>
      </div>

      {/* Progress Bar */}
      <motion.div
        key={message} // restart animation on new message
        initial={{ width: "100%" }}
        animate={{ width: "0%" }}
        transition={{ duration: duration / 1000, ease: "linear" }}
        className={`h-1 ${
          isSuccess ? "bg-primary" : "bg-foreground"
        }`}
        onAnimationComplete={() => onClose(id)} // auto close when finished
      />
    </motion.div>
  );
}
