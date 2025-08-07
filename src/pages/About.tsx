import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-6">
                About SonikDrive
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Revolutionizing cloud storage with cutting-edge technology and unparalleled security
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-muted-foreground mb-4">
                  At SonikDrive, we believe that cloud storage should be fast, secure, and accessible to everyone. 
                  Our mission is to provide cutting-edge cloud storage solutions that empower individuals and 
                  businesses to store, sync, and share their data with confidence.
                </p>
                <p className="text-muted-foreground">
                  We're committed to innovation, security, and delivering an exceptional user experience 
                  that makes managing your digital life effortless.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="backdrop-blur-sm bg-card/50 rounded-2xl p-8 border border-border/50"
              >
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">10M+</div>
                    <div className="text-sm text-muted-foreground">Happy Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                    <div className="text-sm text-muted-foreground">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">500PB</div>
                    <div className="text-sm text-muted-foreground">Data Stored</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">150+</div>
                    <div className="text-sm text-muted-foreground">Countries</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These core values guide everything we do and shape the experience we deliver to our users.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Security First",
                  description: "Your data security is our top priority. We employ enterprise-grade encryption and security measures to protect your information.",
                  icon: "🔒"
                },
                {
                  title: "Innovation",
                  description: "We continuously push the boundaries of cloud technology to provide faster, smarter, and more efficient storage solutions.",
                  icon: "🚀"
                },
                {
                  title: "Reliability",
                  description: "Count on us for consistent performance and availability. Your data is always accessible when you need it.",
                  icon: "⚡"
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="backdrop-blur-sm bg-card/50 rounded-2xl p-8 border border-border/50 text-center"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet Our Experts Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Meet Our Experts</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our team of industry veterans and innovative minds work tirelessly to bring you the best cloud storage experience.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Chen",
                  title: "Chief Technology Officer",
                  description: "Former Google engineer with 12+ years in cloud infrastructure and distributed systems.",
                  image: "👩‍💻"
                },
                {
                  name: "Marcus Rodriguez",
                  title: "Head of Security",
                  description: "Cybersecurity expert specializing in enterprise-grade encryption and data protection.",
                  image: "👨‍💼"
                },
                {
                  name: "Dr. Emily Watson",
                  title: "VP of Engineering",
                  description: "PhD in Computer Science, leading our AI-powered optimization and smart sync technologies.",
                  image: "👩‍🔬"
                },
                {
                  name: "James Park",
                  title: "Product Manager",
                  description: "User experience specialist ensuring our platform remains intuitive and powerful.",
                  image: "👨‍💻"
                },
                {
                  name: "Lisa Zhang",
                  title: "Head of Operations",
                  description: "Global infrastructure expert managing our worldwide network of data centers.",
                  image: "👩‍💼"
                },
                {
                  name: "Alex Thompson",
                  title: "Customer Success Lead",
                  description: "Dedicated to ensuring every user gets the most out of their SonikDrive experience.",
                  image: "👨‍🎯"
                }
              ].map((expert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="backdrop-blur-sm bg-card/50 rounded-2xl p-6 border border-border/50 text-center hover:bg-card/70 transition-colors duration-300"
                >
                  <div className="text-6xl mb-4">{expert.image}</div>
                  <h3 className="text-xl font-semibold mb-2">{expert.name}</h3>
                  <p className="text-primary font-medium mb-3">{expert.title}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{expert.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Founded in 2020 by a team of cloud computing experts and security specialists, 
                SonikDrive was born from the vision of making secure, high-performance cloud storage 
                accessible to everyone. Starting from a small garage office, we've grown into a 
                global platform trusted by millions of users worldwide.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="backdrop-blur-sm bg-card/50 rounded-2xl p-8 border border-border/50 text-center"
            >
              <h3 className="text-xl font-semibold mb-4">Why Choose SonikDrive?</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <div className="text-2xl mb-2">🌍</div>
                  <div className="font-medium">Global Reach</div>
                  <div className="text-sm text-muted-foreground">Servers worldwide</div>
                </div>
                <div>
                  <div className="text-2xl mb-2">🔧</div>
                  <div className="font-medium">24/7 Support</div>
                  <div className="text-sm text-muted-foreground">Always here to help</div>
                </div>
                <div>
                  <div className="text-2xl mb-2">💡</div>
                  <div className="font-medium">Smart Sync</div>
                  <div className="text-sm text-muted-foreground">Intelligent file management</div>
                </div>
                <div>
                  <div className="text-2xl mb-2">🏆</div>
                  <div className="font-medium">Award Winning</div>
                  <div className="text-sm text-muted-foreground">Industry recognition</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;