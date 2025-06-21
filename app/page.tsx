"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Navbar from "@/components/landing/Navbar"
import HeroSection from "@/components/landing/HeroSection"
import CompanyLogos from "@/components/landing/CompanyLogos"
import PerformanceSection from "@/components/landing/PerformanceSection"
import FeaturesSection from "@/components/landing/FeaturesSection"
import PricingSection from "@/components/landing/PricingSection"
import ResourcesSection from "@/components/landing/ResourcesSection"
import FAQSection from "@/components/landing/FAQSection"
import TrustedSection from "@/components/landing/TrustedSection"
import Footer from "@/components/landing/Footer"
import AutoScrollDemo from "@/components/landing/AutoScrollDemo"
import CustomCursor from "@/components/ui/custom-cursor"

export default function LandingPage() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  return (
    <div className="min-h-screen bg-white">
      <CustomCursor />
      <Navbar />

      <motion.div style={{ opacity }} className="relative">
        <main>
          <div id="hero">
            <HeroSection />
          </div>
          <CompanyLogos />
          <div id="performance">
            <PerformanceSection />
          </div>
          <div id="features">
            <FeaturesSection />
          </div>
          <div id="pricing">
            <PricingSection />
          </div>
          <div id="resources">
            <ResourcesSection />
          </div>
          <div id="faq">
            <FAQSection />
          </div>
          <TrustedSection />
        </main>
      </motion.div>

      <Footer />
      <AutoScrollDemo />
    </div>
  )
}
