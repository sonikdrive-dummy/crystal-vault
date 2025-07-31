"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { User, Building2 } from "lucide-react";

interface TabSwitcherProps {
  activeTab: "personal" | "business";
  onTabChange: (tab: "personal" | "business") => void;
}

const TabSwitcher = ({ activeTab, onTabChange }: TabSwitcherProps) => {
  return (
    <div className="relative">
      <div className="glass-card p-2 rounded-xl inline-flex items-center space-x-2">
        {/* Personal Tab */}
        <motion.button
          className={`relative px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
            activeTab === "personal"
              ? "text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
          onClick={() => onTabChange("personal")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {activeTab === "personal" && (
            <motion.div
              className="absolute inset-0 bg-gradient-primary rounded-lg"
              layoutId="activeTab"
              initial={false}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}
            />
          )}
          <User className="h-4 w-4 relative z-10" />
          <span className="relative z-10">For Individuals</span>
        </motion.button>

        {/* Business Tab */}
        <motion.button
          className={`relative px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
            activeTab === "business"
              ? "text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
          onClick={() => onTabChange("business")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {activeTab === "business" && (
            <motion.div
              className="absolute inset-0 bg-gradient-primary rounded-lg"
              layoutId="activeTab"
              initial={false}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}
            />
          )}
          <Building2 className="h-4 w-4 relative z-10" />
          <span className="relative z-10">For Business</span>
        </motion.button>
      </div>
    </div>
  );
};

export default TabSwitcher;