"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TabSwitcher from "@/components/TabSwitcher";
import TabContent from "@/components/TabContent";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"personal" | "business">("personal");

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Tab Switcher Section */}
      <section id="features" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              className="flex justify-center mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <TabSwitcher activeTab={activeTab} onTabChange={setActiveTab} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <TabContent activeTab={activeTab} />

      {/* Trust & Testimonials */}
      {/* <TrustSection /> */}

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
