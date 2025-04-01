"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import ThemeSwitch from "@/components/ThemeSwitch";
import BackToHome from "@/components/BackToHome";

export default function ProjectsPage() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setIsAdmin(docSnap.data().isAdmin === true);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  const mockProjects = [
    {
      id: "1",
      title: "Portfolio Website",
      description: "A personal site to showcase my projects and blog posts.",
    },
    {
      id: "2",
      title: "Event Planner App",
      description: "A full-stack Firebase app to create and join events.",
    },
  ];

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <ThemeSwitch />
      <BackToHome />
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold">Projects</h1>

        {isAdmin && (
          <Link
            href="/projects/new"
            className="bg-black text-white px-5 py-2 rounded-xl font-medium hover:bg-gray-800 transition cursor-pointer"
          >
            Post Project
          </Link>
        )}
      </div>

      <div className="grid gap-8">
        {mockProjects.map((project) => (
          <motion.article
            key={project.id}
            className="border rounded-lg p-6 shadow-sm bg-white dark:bg-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">
              {project.description}
            </p>
          </motion.article>
        ))}
      </div>
    </main>
  );
}
