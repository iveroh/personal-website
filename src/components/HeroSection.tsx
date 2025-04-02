"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useAuth } from "@/hooks/useAuth";

export default function HeroSection() {
  const { user } = useAuth();

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center text-center md:text-left px-4 gap-10">
      {/* Text content */}
      <div className="md:w-1/2">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.9 }}
        >
          Hi, I'm Iver 👋
        </motion.h1>

        <motion.p
          className="text-xl mb-8 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: false, amount: 0.7 }}
        >
          I create software, build things on the web, and love exploring new
          technology.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-4"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: false, amount: 0.7 }}
        >
          <a
            href="/projects"
            className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-2xl font-medium shadow-md hover:scale-105 transition"
          >
            View Projects
          </a>
          <a
            href="#about"
            className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-2xl font-medium shadow-md hover:scale-105 transition"
          >
            About Me
          </a>
        </motion.div>
      </div>

      {/* Profile image */}
      <motion.div
        className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <Image
          src="/creator.jpg"
          alt="Iver profile"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
    </section>
  );
}
