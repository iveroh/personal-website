// components/BackToHome.tsx
"use client";

import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export default function BackToHome() {
  return (
    <div className="fixed top-4 left-4 z-50">
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border
                   text-gray-800 border-gray-800 hover:bg-gray-100
                   dark:text-white dark:border-white dark:hover:bg-white/10
                   transition-colors backdrop-blur-md"
      >
        <FiArrowLeft size={18} />
        <span className="font-medium">Home</span>
      </Link>
    </div>
  );
}
