import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Pricing = () => {
  const [activeTab, setActiveTab] = useState<"personal" | "business">("personal");

  const personalPlans = [
    {
      name: "Monthly",
      price: "$9.99",
      period: "/month",
      storage: "100 GB",
      features: ["Cross-device sync", "File sharing", "Basic support", "30-day version history"],
      popular: false,
    },
    {
      name: "Semi-Annual",
      price: "$49.99",
      period: "/6 months",
      originalPrice: "$59.94",
      storage: "500 GB", 
      features: ["Everything in Monthly", "Priority support", "90-day version history", "Advanced sharing controls"],
      popular: true,
    },
    {
      name: "Yearly",
      price: "$89.99",
      period: "/year",
      originalPrice: "$119.88",
      storage: "1 TB",
      features: ["Everything in Semi-Annual", "Premium support", "1-year version history", "Advanced security"],
      popular: false,
    },
  ];

  const businessPlans = [
    {
      name: "Monthly",
      price: "$25",
      period: "/user/month",
      storage: "Unlimited",
      features: ["Team collaboration", "Admin controls", "Advanced security", "Priority support", "SSO integration"],
      popular: false,
    },
    {
      name: "Yearly",
      price: "$250",
      period: "/user/year", 
      originalPrice: "$300",
      storage: "Unlimited",
      features: ["Everything in Monthly", "Advanced analytics", "Compliance tools", "24/7 premium support", "Custom integrations"],
      popular: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Choose the perfect plan for your needs. Upgrade or downgrade at any time.
          </motion.p>

          {/* Tab Switcher */}
          <motion.div 
            className="flex justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-2 rounded-full">
              <div className="flex space-x-2">
                {["personal", "business"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab as "personal" | "business")}
                    className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                      activeTab === tab
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab === "personal" ? "For Individuals" : "For Business"}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {(activeTab === "personal" ? personalPlans : businessPlans).map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <Card className={`glass-card relative h-full ${plan.popular ? "ring-2 ring-primary" : ""}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-primary">{plan.price}</span>
                        <span className="text-muted-foreground ml-1">{plan.period}</span>
                      </div>
                      {plan.originalPrice && (
                        <div className="text-sm text-muted-foreground line-through mt-1">
                          {plan.originalPrice}
                        </div>
                      )}
                    </div>
                    <CardDescription className="text-lg font-medium mt-2">
                      {plan.storage} storage
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full glass-button ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      Choose {plan.name}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Enterprise CTA */}
          {activeTab === "business" && (
            <motion.div 
              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Card className="glass-card max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Need something more?</h3>
                  <p className="text-muted-foreground mb-6">
                    Contact our sales team for custom enterprise solutions with dedicated support, 
                    advanced compliance, and tailored integrations.
                  </p>
                  <Button variant="outline" className="glass-button">
                    Contact Sales
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;