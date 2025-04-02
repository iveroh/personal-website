"use client";

import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import ThemeSwitch from "@/components/ThemeSwitch";
import ScrollIndicator from "@/components/ScrollIndicator";
import { useState } from "react";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main>
      <div
        className={`transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        <ThemeSwitch />
        <HeroSection />

        <section className="w-full py-20 px-4 md:px-20">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            {/* Text on left */}
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">A little about me</h2>
              <p className="text-lg mb-4">
                I'm a computer science student with a passion for building
                creative software and exploring new technologies. I’m most
                engaged when I get to create something from scratch — whether
                it’s a tool that solves a problem or an interface that feels
                great to use.
              </p>
              <p className="text-lg">
                Lately, I’ve been experimenting with full-stack projects,
                learning more about real-time databases, design systems, and how
                to make tech more accessible. I enjoy blending creativity with
                structure, and I’m always looking for ways to grow as both a
                developer and a designer.
              </p>
            </motion.div>

            {/* Image on right */}
            <motion.div
              className="md:w-1/2 w-full aspect-[3/2] relative rounded-lg overflow-hidden ml-8"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, view: 0.7 }}
            >
              <Image
                src="/macbook.png"
                alt="Macbook"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </section>

        <section className="w-full py-20 px-4 md:px-20">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
            {/* Text on right */}
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.7 }}
            >
              <h2 className="text-3xl font-bold mb-4">More About My Work</h2>
              <p className="text-lg mb-4">
                Surfing and climbing have always been more than just hobbies for
                me — they're a way to disconnect, challenge myself, and find
                flow. Whether I’m catching a wave at sunrise or scaling a steep
                route, these moments fuel my creativity and give me the clarity
                I bring into my work.
              </p>
              <p className="text-lg">
                I'm currently diving deeper into full-stack development,
                Firebase, and creating tools that improve lives — especially in
                health tech and education.
              </p>
            </motion.div>

            {/* Image on left */}
            <motion.div
              className="md:w-1/2 relative w-full h-64 md:h-[400px] rounded-lg overflow-hidden bg-transparent dark:bg-transparent -ml-6"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.7 }}
            >
              <Image
                src="/surfboard.png"
                alt="Surfboard"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
      <ScrollIndicator />
    </main>
  );
}
