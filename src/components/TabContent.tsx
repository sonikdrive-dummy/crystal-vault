"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";
import { 
  Share2, 
  Smartphone, 
  DollarSign, 
  Users, 
  Shield, 
  Briefcase,
  FileText,
  Settings,
  Lock,
  IndianRupee
} from "lucide-react";
import BusinessOnlyModal from "./BusinessOnlyModal";

interface TabContentProps {
  activeTab: "personal" | "business";
}

const TabContent = ({ activeTab }: TabContentProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    if (activeTab === "personal") {
      setIsModalOpen(true);
    } else {
      window.open("https://business.sonikdrive.com/signup", "_blank");
    }
  };
  const personalFeatures = [
    {
      icon: Share2,
      title: "Easy File Sharing",
      description: "Share files and folders with anyone using secure links. Control access with password protection and expiration dates."
    },
    {
      icon: Smartphone,
      title: "Cross-Device Sync",
      description: "Access your files from anywhere, on any device. Automatic sync keeps everything up-to-date across all your devices."
    },
    {
      icon: IndianRupee,
      title: "Affordable Plans",
      description: "Get started free trial with 25GB storage. Upgrade to premium plans with generous storage at competitive prices."
    },
    {
      icon: Lock,
      title: "Privacy First",
      description: "Your files are encrypted end-to-end. Only you have access to your data with zero-knowledge architecture."
    }
  ];

  const businessFeatures = [
    {
      icon: Users,
      title: "Developer-First API Access",
      description: "Programmatically upload, manage, and retrieve files with our developer-friendly RESTful API."
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Secure your business data with state-of-the-art encryption, API authentication, and proactive threat monitoring."
    },
    {
      icon: Briefcase,
      title: "Admin Controls",
      description: "Comprehensive admin dashboard with usage analytics, and security monitoring."
    },
    {
      icon: Settings,
      title: "Custom Integration",
      description: "API access, custom workflows, and integrations with popular business tools and platforms."
    }
  ];

  const features = activeTab === "personal" ? personalFeatures : businessFeatures;

  return (
    <section className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {activeTab === "personal" 
              ? "Perfect for Individual Users" 
              : "Built for Business Teams"
            }
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {activeTab === "personal"
              ? "Simple, secure, and affordable cloud storage for your personal files, photos, and documents."
              : "Scalable, secure, and collaborative storage solutions with enterprise-grade features and controls."
            }
          </p>
        </motion.div>

        <motion.div
          key={`${activeTab}-grid`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={`${activeTab}-${feature.title}`}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.button
            className="glass-button px-8 py-4 rounded-xl text-lg font-semibold text-primary-foreground shadow-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleButtonClick}
          >
            {activeTab === "personal" 
              ? "Start Free Personal Account" 
              : "Get Business Demo"
            }
          </motion.button>
        </motion.div>
      </div>
      
      <BusinessOnlyModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        type="personal" 
      />
    </section>
  );
};

export default TabContent;