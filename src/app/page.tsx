//imports
import React from "react"
import { motion } from "framer-motion"

//components
import StickyNavbar from "@/components/StickyNavbar"
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer"
import PlanSection from "@/components/PlanSection";

export default function Homepage() {
  return (
    <div className="relative">
      <HeroSection />
      <StickyNavbar currentPage="home"/>
      <PlanSection />
      <Footer />
    </div>
  );
}