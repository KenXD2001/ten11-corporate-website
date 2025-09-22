"use client";

import { AnimatePresence, motion } from "framer-motion";
import Notification from "./Notification";

export type NotificationItem = {
  id: string;
  type: "success" | "error";
  message: string;
};

type NotificationContainerProps = {
  notifications: NotificationItem[];
  removeNotification: (id: string) => void;
};

export default function NotificationContainer({
  notifications,
  removeNotification,
}: NotificationContainerProps) {
  return (
    <div className="fixed top-6 right-6 z-[9999] flex flex-col gap-4">
      <AnimatePresence initial={false}>
        {notifications.map((n) => (
          <motion.div key={n.id} layout>
            <Notification
              id={n.id}
              type={n.type}
              message={n.message}
              onClose={removeNotification}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
