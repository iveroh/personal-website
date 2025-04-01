"use client"

import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer"
import Image from "next/image";
import { motion } from "framer-motion";
import ThemeSwitch from "@/components/ThemeSwitch";

export default function Home() {
  return (
    <main>
      <ThemeSwitch />
      <HeroSection />

      {/* Add other sections here */}
      <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center text-center md:text-left px-4 gap-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Text on left */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">A little about me</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              I'm a computer science student with a passion for building
              creative software and exploring new technologies. When I'm not
              coding, you'll probably find me climbing rocks, surfing waves, or
              exploring snowy peaks
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I love combining clean design with functional code — whether it's
              a full-stack web app, a game, or a cool side project
            </p>
          </motion.div>

          {/* Image on right */}
          <motion.div
            className="md:w-1/2 relative w-full h-64 md:h-[400px] rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <Image
              src="/macbook.png" // replace with your own image
              alt="creator"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
