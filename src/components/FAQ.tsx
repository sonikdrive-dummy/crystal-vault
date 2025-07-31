import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "1",
    category: "General",
    question: "What is cloud storage and how does it work?",
    answer: "Cloud storage allows you to store files online and access them from any device with an internet connection. Your files are securely stored on our servers and synchronized across all your devices."
  },
  {
    id: "2", 
    category: "General",
    question: "Is my data safe and secure?",
    answer: "Yes, we use enterprise-grade encryption both in transit and at rest. Your files are protected with AES-256 encryption, and we follow strict security protocols to ensure your data remains private and secure."
  },
  {
    id: "3",
    category: "Personal Plans",
    question: "Can I upgrade my storage plan at any time?",
    answer: "Absolutely! You can upgrade your storage plan at any time through your account settings. The change will take effect immediately, and you'll only pay the prorated difference."
  },
  {
    id: "4",
    category: "Personal Plans", 
    question: "What happens if I exceed my storage limit?",
    answer: "If you reach your storage limit, you'll receive notifications to upgrade your plan. You can still access your existing files, but you won't be able to upload new ones until you free up space or upgrade."
  },
  {
    id: "5",
    category: "Business Plans",
    question: "Do you offer team collaboration features?",
    answer: "Yes, our business plans include advanced collaboration features like shared folders, team permissions, real-time editing, commenting, and version control to help your team work together efficiently."
  },
  {
    id: "6",
    category: "Business Plans",
    question: "Can I integrate with existing business tools?",
    answer: "Yes, we offer integrations with popular business tools including Microsoft Office 365, Google Workspace, Slack, and many others. Our API also allows for custom integrations."
  },
  {
    id: "7",
    category: "Security",
    question: "Do you support two-factor authentication?",
    answer: "Yes, we strongly recommend enabling two-factor authentication (2FA) for added security. You can use authenticator apps or SMS verification to secure your account."
  },
  {
    id: "8",
    category: "Security",
    question: "What compliance standards do you follow?",
    answer: "We comply with major security and privacy standards including GDPR, HIPAA, SOC 2 Type II, and ISO 27001. Our business plans include additional compliance features for regulated industries."
  }
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(faqData.map(item => item.category)))];

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQs = faqData.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our cloud storage platform
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div 
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 glass-input"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "glass-card text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* FAQ Items */}
        <motion.div 
          className="max-w-4xl mx-auto space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filteredFAQs.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="glass-card overflow-hidden">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-primary/5 transition-colors duration-200"
                >
                  <div>
                    <div className="text-sm text-primary font-medium mb-1">
                      {item.category}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.question}
                    </h3>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-200 flex-shrink-0 ml-4 ${
                      openItems.includes(item.id) ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                
                <AnimatePresence>
                  {openItems.includes(item.id) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <CardContent className="px-6 pb-6 pt-0">
                        <div className="border-t border-border/50 pt-4">
                          <p className="text-muted-foreground leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </CardContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filteredFAQs.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-muted-foreground">No questions found matching your search.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FAQ;