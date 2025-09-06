"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => {
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
            Privacy Policy
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </motion.p>
          <motion.p 
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Last updated: August 2025
          </motion.p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>1. Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <h4>Personal Information</h4>
                <p>
                  We collect information you provide directly to us, including:
                </p>
                <ul>
                  <li>Account registration information (name, email, phone number)</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                  <li>Files and content you upload to our service</li>
                  <li>Communications with our support team</li>
                </ul>
                
                <h4>Automatically Collected Information</h4>
                <ul>
                  <li>Device information (IP address, browser type, operating system)</li>
                  <li>Usage data (features used, time spent, file access patterns)</li>
                  <li>Log files and analytics data</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>2. How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  We use the information we collect to:
                </p>
                <ul>
                  <li>Provide, maintain, and improve our cloud storage services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Monitor and analyze usage patterns to improve user experience</li>
                  <li>Detect, investigate, and prevent fraudulent or illegal activities</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>3. Information Sharing and Disclosure</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  We do not sell, trade, or rent your personal information. We may share your information only in these limited circumstances:
                </p>
                <ul>
                  <li><strong>With your consent:</strong> When you explicitly agree to share information</li>
                  <li><strong>Service providers:</strong> Third-party vendors who assist us in providing services</li>
                  <li><strong>Legal requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business transfers:</strong> In connection with mergers or acquisitions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>4. Data Security</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  We implement robust security measures to protect your data:
                </p>
                <ul>
                  <li>End-to-end encryption for data in transit and at rest</li>
                  <li>AES-256 encryption for file storage</li>
                  <li>Multi-factor authentication options</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>SOC 2 Type II compliance</li>
                  <li>Access controls and employee background checks</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>5. Data Retention</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  We retain your information for as long as necessary to provide services and fulfill legal obligations:
                </p>
                <ul>
                  <li>Account data: Retained while your account is active</li>
                  <li>Files: Retained according to your plan and deletion requests</li>
                  <li>Usage logs: Typically retained for 90 days</li>
                  <li>Backup data: May be retained for up to 90 days after deletion</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>6. Your Rights and Choices</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  You have the right to:
                </p>
                <ul>
                  <li>Access and update your account information</li>
                  <li>Download or delete your files</li>
                  <li>Request a copy of your personal data</li>
                  <li>Opt out of marketing communications</li>
                  <li>Delete your account and associated data</li>
                  <li>Port your data to another service</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>7. International Data Transfers</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  Your information may be transferred to and stored in countries other than your own. We ensure adequate protection through:
                </p>
                <ul>
                  <li>Standard Contractual Clauses approved by the European Commission</li>
                  <li>Adequacy decisions by data protection authorities</li>
                  <li>Compliance with applicable data protection frameworks</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>8. Cookies and Tracking</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  We use cookies and similar technologies to:
                </p>
                <ul>
                  <li>Maintain your session and preferences</li>
                  <li>Analyze usage patterns and improve our service</li>
                  <li>Provide personalized experiences</li>
                  <li>Ensure security and prevent fraud</li>
                </ul>
                <p>
                  You can control cookie preferences through your browser settings.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>9. Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  Our service is not intended for children under 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it promptly.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>10. Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. For significant changes, we may also send email notifications.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>11. Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  If you have questions about this Privacy Policy, please contact us:
                </p>
                <p>
                  Email: privacy@sonikdrive.com<br />
                  {/* Address: 123 Cloud Street, San Francisco, CA 94105<br /> */}
                  Data Protection Officer: dpo@sonikdrive.com
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;