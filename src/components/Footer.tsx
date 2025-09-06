"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Cloud, Twitter, Github, Linkedin, Mail, Target } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    if (!email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubscribing(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("Successfully subscribed! Welcome to SonikDrive updates.", {
        description: "You'll receive the latest features, security updates, and storage tips.",
      });
      setEmail("");
    } catch (error) {
      toast.error("Subscription failed. Please try again.");
    } finally {
      setIsSubscribing(false);
    }
  };

  const footerLinks = {
    // product: [
    //   { label: "Features", href: "#features" },
    //   { label: "Pricing", href: "#pricing" },
    //   { label: "Security", href: "#security" },
    //   { label: "API", href: "#api" },
    // ],
    company: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blogs" },
      // { label: "Careers", href: "#careers" },
      { label: "Contact", href: "/contact" },
    ],
    // support: [
    //   { label: "Help Center", href: "#help" },
    //   { label: "Community", href: "#community" },
    //   { label: "Status", href: "#status" },
    //   { label: "System Status", href: "#system" },
    // ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      // { label: "Cookie Policy", href: "#cookies" },
      // { label: "GDPR", href: "#gdpr" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/sonikdrive", label: "Twitter" },
    // { icon: Github, href: "#github", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/sonikdrive--553b51379", label: "LinkedIn" },
    { icon: Mail, href: "mailto:support@sonikdrive.com", label: "Email" },
  ];

  return (
    <footer className="bg-background-secondary border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section - left aligned */}
          <div className="lg:col-span-2 lg:col-start-1">
            <motion.div
              className="flex items-center space-x-2 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-2 rounded-lg bg-gradient-primary">
                <Cloud className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">SonikDrive</span>
            </motion.div>
            
            <motion.p
              className="text-muted-foreground mb-6 max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Secure, reliable, and easy-to-use cloud storage for individuals and businesses worldwide. */}
              Discover affordable personal cloud storage with SonikDrive. Store photos, files, and business data securely with fast uploads and no hidden costs.
            </motion.p>

            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 glass-card rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-glow transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.label}
                  target="_blank"
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Links Sections - right aligned on large screens */}
          <div className="lg:col-span-4 lg:col-start-3 flex flex-col lg:flex-row justify-end items-start lg:items-stretch gap-8 lg:gap-16">
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * (categoryIndex + 1) }}
                className="w-full lg:w-auto"
              >
                <h3 className="font-semibold text-foreground mb-4 capitalize text-right lg:text-left">
                  {category}
                </h3>
                <ul className="space-y-3 text-right lg:text-left">
                  {links.map((link, index) => (
                    <li key={link.label}>
                      <motion.a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                        whileHover={{ x: 4 }}
                      >
                        {link.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          className="glass-card p-6 rounded-xl mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Stay updated with SonikDrive
              </h3>
              <p className="text-muted-foreground">
                Get the latest features, security updates, and storage tips.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex items-center space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubscribing}
                className="px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 disabled:opacity-50"
              />
              <motion.button
                type="submit"
                disabled={isSubscribing}
                className="glass-button px-6 py-2 rounded-lg text-primary-foreground font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={!isSubscribing ? { scale: 1.05 } : {}}
                whileTap={!isSubscribing ? { scale: 0.95 } : {}}
              >
                {isSubscribing ? "Subscribing..." : "Subscribe"}
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-muted-foreground text-sm">
            © 2025 SonikDrive. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <span>Made with ❤️ for secure storage</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span>All systems operational</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;