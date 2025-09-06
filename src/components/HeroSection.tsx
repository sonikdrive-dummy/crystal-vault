"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Shield, Zap, Users } from "lucide-react";
import BusinessOnlyModal from "./BusinessOnlyModal";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGetStartedClick = () => {
    setIsModalOpen(true);
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Shield className="h-4 w-4 text-success" />
            <span className="text-sm font-medium text-foreground">
              End-to-end encrypted storage
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Secure Cloud Storage for{" "}
            <span className="gradient-text">Everyone</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Optimized for Performance. Designed for Trust.
            {/* Store, share, and collaborate with ease and confidence. 
            Your files are safe, accessible, and always in sync. */}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <motion.button
              className="glass-button px-8 py-4 rounded-xl text-lg font-semibold text-primary-foreground flex items-center space-x-2 shadow-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGetStartedClick}
            >
              <span>Get Started Free</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>

            {/* <motion.button
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-200 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                <Play className="h-5 w-5 ml-1" />
              </div>
              <span className="text-lg font-medium">Watch Demo</span>
            </motion.button> */}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <div className="flex items-center space-x-2">
              <Zap className="h-4 w-4 text-warning" />
              <span>Lightning fast sync</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-success" />
              <span>Guarded with Care</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-accent" />
              <span>Trusted by 1M+ users</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
      
      <BusinessOnlyModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        type="general" 
      />
    </section>
  );
};

export default HeroSection;