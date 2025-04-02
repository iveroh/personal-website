"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => {
          setTheme(resolvedTheme === "dark" ? "light" : "dark");
        }}
        className="p-2 rounded-lg bg-transparent hover:bg-gray-200 dark:hover:bg-gray-400 transition-colors"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={resolvedTheme}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.3 }}
          >
            {resolvedTheme === "dark" ? <FiSun size={24} /> : <FiMoon size={24} />}
          </motion.div>
        </AnimatePresence>
      </button>
    </div>
  );
}
