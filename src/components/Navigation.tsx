"use client";

import { motion } from "framer-motion";
import { Cloud, Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blogs" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "/pricing" },
    { label: "For Business", href: "#features" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 glass-nav"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="p-2 rounded-lg bg-gradient-primary">
              <Cloud className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">CloudVault</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="/login"
              className="px-6 py-2 text-foreground hover:text-primary font-medium transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Log In
            </motion.a>
            <motion.a
              href="/signup"
              className="glass-button px-6 py-2 rounded-lg text-primary-foreground font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign Up
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-secondary/50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden overflow-hidden ${
            isMobileMenuOpen ? "max-h-screen" : "max-h-0"
          }`}
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-4 glass-card mt-4 rounded-lg p-4">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="block text-foreground hover:text-primary font-medium transition-colors duration-200"
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isMobileMenuOpen
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}
            <div className="pt-4 border-t border-border space-y-3">
              <motion.a 
                href="/login" 
                className="block w-full text-left text-foreground hover:text-primary font-medium transition-colors duration-200"
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isMobileMenuOpen
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.3, delay: navItems.length * 0.1 + 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Log In
              </motion.a>
              <motion.a 
                href="/signup" 
                className="glass-button block w-full px-4 py-2 rounded-lg text-primary-foreground font-medium text-center"
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isMobileMenuOpen
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.3, delay: navItems.length * 0.1 + 0.2 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign Up
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;