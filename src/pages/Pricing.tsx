import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Pricing = () => {
  const [activeTab, setActiveTab] = useState<"personal" | "business">("personal");
  const [personalTerm, setPersonalTerm] = useState<"monthly" | "semi-annually" | "annually">("monthly");
  const [businessTerm, setBusinessTerm] = useState<"monthly" | "annually">("monthly");

  const personalPlans = {
    monthly: [
      {
        id: "trial",
        name: "Trial Plan",
        price: "$0",
        period: "/week",
        storage: "25 GB",
        features: ["7-day free trial", "Basic file sharing", "Cross-device sync", "Email support"],
        popular: false,
        originalPrice: undefined,
      },
      {
        id: "basic",
        name: "Basic",
        price: "$29",
        period: "/month",
        storage: "50 GB",
        features: ["Cross-device sync", "File sharing", "Basic support", "30-day version history"],
        popular: false,
        originalPrice: undefined,
      },
      {
        id: "standard",
        name: "Standard",
        price: "$49",
        period: "/month",
        storage: "100 GB",
        features: ["Everything in Basic", "Priority support", "90-day version history", "Advanced sharing"],
        popular: true,
        originalPrice: undefined,
      },
      {
        id: "premium",
        name: "Premium",
        price: "$229",
        period: "/month",
        storage: "500 GB",
        features: ["Everything in Standard", "Premium support", "1-year version history", "Advanced security"],
        popular: false,
        originalPrice: undefined,
      },
      {
        id: "pro",
        name: "SonikDrive Pro",
        price: "$349",
        period: "/month",
        storage: "1 TB",
        features: ["Everything in Premium", "24/7 support", "Unlimited version history", "Enterprise security"],
        popular: false,
        originalPrice: undefined,
      },
    ],
    "semi-annually": [
      {
        id: "basic",
        name: "Basic",
        price: "$174",
        period: "/6 months",
        originalPrice: "$174",
        storage: "50 GB",
        features: ["Cross-device sync", "File sharing", "Basic support", "30-day version history"],
        popular: false,
      },
      {
        id: "standard",
        name: "Standard",
        price: "$294",
        period: "/6 months",
        originalPrice: "$294",
        storage: "100 GB",
        features: ["Everything in Basic", "Priority support", "90-day version history", "Advanced sharing"],
        popular: true,
      },
      {
        id: "premium",
        name: "Premium",
        price: "$1,314",
        period: "/6 months",
        originalPrice: "$1,374",
        storage: "500 GB",
        features: ["Everything in Standard", "Premium support", "1-year version history", "Advanced security"],
        popular: false,
      },
      {
        id: "pro",
        name: "SonikDrive Pro",
        price: "$2,034",
        period: "/6 months",
        originalPrice: "$2,094",
        storage: "1 TB",
        features: ["Everything in Premium", "24/7 support", "Unlimited version history", "Enterprise security"],
        popular: false,
      },
    ],
    annually: [
      {
        id: "basic",
        name: "Basic",
        price: "$348",
        period: "/year",
        originalPrice: "$348",
        storage: "50 GB",
        features: ["Cross-device sync", "File sharing", "Basic support", "30-day version history"],
        popular: false,
      },
      {
        id: "standard",
        name: "Standard",
        price: "$540",
        period: "/year",
        originalPrice: "$588",
        storage: "100 GB",
        features: ["Everything in Basic", "Priority support", "90-day version history", "Advanced sharing"],
        popular: true,
      },
      {
        id: "premium",
        name: "Premium",
        price: "$2,508",
        period: "/year",
        originalPrice: "$2,748",
        storage: "500 GB",
        features: ["Everything in Standard", "Premium support", "1-year version history", "Advanced security"],
        popular: false,
      },
      {
        id: "pro",
        name: "SonikDrive Pro",
        price: "$3,948",
        period: "/year",
        originalPrice: "$4,188",
        storage: "1 TB",
        features: ["Everything in Premium", "24/7 support", "Unlimited version history", "Enterprise security"],
        popular: false,
      },
    ],
  };

  const businessPlans = {
    monthly: [
      {
        id: "trial",
        name: "Trial",
        price: "$0",
        period: "/fortnight",
        storage: "50 GB",
        features: ["14-day free trial", "Team collaboration", "Basic admin controls", "Email support"],
        popular: false,
        originalPrice: undefined,
      },
      {
        id: "launch",
        name: "Launch",
        price: "$139",
        period: "/user/month",
        storage: "100 GB",
        features: ["Team collaboration", "Admin controls", "Advanced security", "Priority support", "SSO integration"],
        popular: false,
        originalPrice: undefined,
      },
      {
        id: "grow",
        name: "Grow",
        price: "$599",
        period: "/user/month",
        storage: "500 GB",
        features: ["Everything in Launch", "Advanced analytics", "Compliance tools", "24/7 support", "Custom integrations"],
        popular: true,
        originalPrice: undefined,
      },
      {
        id: "scale",
        name: "Scale",
        price: "$1,099",
        period: "/user/month",
        storage: "1 TB",
        features: ["Everything in Grow", "Dedicated support", "Advanced compliance", "Custom workflows", "Enterprise features"],
        popular: false,
        originalPrice: undefined,
      },
    ],
    annually: [
      {
        id: "launch",
        name: "Launch",
        price: "$1,428",
        period: "/user/year",
        originalPrice: "$1,668",
        storage: "100 GB",
        features: ["Team collaboration", "Admin controls", "Advanced security", "Priority support", "SSO integration"],
        popular: false,
      },
      {
        id: "grow",
        name: "Grow",
        price: "$6,588",
        period: "/user/year",
        originalPrice: "$7,188",
        storage: "500 GB",
        features: ["Everything in Launch", "Advanced analytics", "Compliance tools", "24/7 support", "Custom integrations"],
        popular: true,
      },
      {
        id: "scale",
        name: "Scale",
        price: "$12,288",
        period: "/user/year",
        originalPrice: "$13,188",
        storage: "1 TB",
        features: ["Everything in Grow", "Dedicated support", "Advanced compliance", "Custom workflows", "Enterprise features"],
        popular: false,
      },
    ],
  };

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

          {/* Sub-tab switcher for terms */}
          <motion.div 
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <div className="glass-card p-2 rounded-full">
              <div className="flex space-x-2">
                {activeTab === "personal" ? (
                  ["monthly", "semi-annually", "annually"].map((term) => (
                    <button
                      key={term}
                      onClick={() => setPersonalTerm(term as "monthly" | "semi-annually" | "annually")}
                      className={`px-6 py-2 rounded-full font-medium transition-all duration-300 capitalize ${
                        personalTerm === term
                          ? "bg-primary text-primary-foreground shadow-lg"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {term === "semi-annually" ? "Semi-Annual" : term}
                    </button>
                  ))
                ) : (
                  ["monthly", "annually"].map((term) => (
                    <button
                      key={term}
                      onClick={() => setBusinessTerm(term as "monthly" | "annually")}
                      className={`px-6 py-2 rounded-full font-medium transition-all duration-300 capitalize ${
                        businessTerm === term
                          ? "bg-primary text-primary-foreground shadow-lg"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {term}
                    </button>
                  ))
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {(activeTab === "personal" 
              ? personalPlans[personalTerm] 
              : businessPlans[businessTerm]
            ).map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className={activeTab === "personal" && personalTerm === "monthly" && index === 0 ? "lg:col-span-1" : ""}
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
                    <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <div className="flex items-baseline justify-center">
                        <span className="text-3xl font-bold text-primary">{plan.price}</span>
                        <span className="text-muted-foreground ml-1 text-sm">{plan.period}</span>
                      </div>
                      {plan.originalPrice && (
                        <div className="text-sm text-muted-foreground line-through mt-1">
                          {plan.originalPrice}
                        </div>
                      )}
                    </div>
                    <CardDescription className="text-base font-medium mt-2">
                      {plan.storage} storage
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full glass-button ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.price === "$0" ? "Start Free Trial" : `Choose ${plan.name}`}
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