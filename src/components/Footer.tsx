// components/Footer.tsx
"use client";

import { Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-10 px-4 md:px-20 bg-gray-100 dark:bg-gray-950 border-t">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Iver O. Heggelund. All rights reserved.
        </p>
        <div className="flex gap-6 text-gray-600 dark:text-gray-300">
          <a
            href="https://github.com/iveroh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition cursor-pointer"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/iver-oprand-heggelund-59467232a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition cursor-pointer"
          >
            <Linkedin />
          </a>
          <a
            href="https://instagram.com/iverheggelund"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600 transition cursor-pointer"
          >
            <Instagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
