"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TrustSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp Inc.",
      content: "CloudVault has transformed how our team collaborates. The security features give us peace of mind while the interface is incredibly intuitive.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Freelance Designer",
      company: "Independent",
      content: "Perfect for managing client files. The sync is instant and I never worry about losing my work. The free tier is generous too!",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Manager",
      company: "StartupXYZ",
      content: "We switched from our old provider and couldn't be happier. The admin controls and team features are exactly what we needed.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const trustedCompanies = [
    "TechCorp", "StartupXYZ", "DesignStudio", "InnovateLab", "DataFlow", "CloudTech"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Trusted By Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground mb-8">Trusted by 1M+ users worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {trustedCompanies.map((company, index) => (
              <motion.div
                key={company}
                className="text-muted-foreground font-medium text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.6, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of satisfied users who trust SonikDrive
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="glass-card p-6 rounded-xl group hover:shadow-glow transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
              >
                <Quote className="h-8 w-8 text-primary mb-4 opacity-60" />
                
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-warning fill-current" />
                  ))}
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Badge */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-card inline-flex items-center space-x-4 px-6 py-4 rounded-xl">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-sm font-medium text-foreground">SOC 2 Compliant</span>
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-sm font-medium text-foreground">GDPR Ready</span>
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-sm font-medium text-foreground">256-bit Encryption</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;