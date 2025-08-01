import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
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
            Terms & Conditions
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Please read these terms and conditions carefully before using our cloud storage service.
          </motion.p>
          <motion.p 
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Last updated: December 2024
          </motion.p>
        </div>
      </section>

      {/* Terms Content */}
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
                <CardTitle>1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  By accessing and using our cloud storage service, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>2. Use License</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  Permission is granted to temporarily use our cloud storage service for personal or commercial use. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul>
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained in our service</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>3. Data Storage and Security</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure. You acknowledge that:
                </p>
                <ul>
                  <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                  <li>You should back up important data independently</li>
                  <li>We encrypt data in transit and at rest using AES-256 encryption</li>
                  <li>We comply with applicable data protection regulations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>4. Acceptable Use Policy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  You agree not to use our service to store, share, or transmit:
                </p>
                <ul>
                  <li>Illegal, harmful, or offensive content</li>
                  <li>Malware, viruses, or malicious code</li>
                  <li>Content that infringes on intellectual property rights</li>
                  <li>Spam or unsolicited communications</li>
                  <li>Content that violates privacy or data protection laws</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>5. Payment and Billing</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  For paid services:
                </p>
                <ul>
                  <li>Fees are charged in advance on a monthly or annual basis</li>
                  <li>All fees are non-refundable unless otherwise stated</li>
                  <li>We may change our pricing with 30 days notice</li>
                  <li>Failure to pay may result in service suspension</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>6. Service Availability</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  We strive to maintain 99.9% uptime but do not guarantee uninterrupted service. We may perform maintenance that temporarily affects service availability.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>7. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  In no event shall our company or its suppliers be liable for any damages arising out of the use or inability to use our service, even if we have been notified of the possibility of such damage.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>8. Termination</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  Either party may terminate this agreement at any time. Upon termination, your right to use the service will cease immediately. We may retain your data for a reasonable period to allow for data recovery.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>9. Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  We reserve the right to modify these terms at any time. We will notify users of significant changes via email or through our service. Continued use after changes constitutes acceptance of the new terms.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>10. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  If you have questions about these Terms & Conditions, please contact us at:
                </p>
                <p>
                  Email: legal@cloudstorage.com<br />
                  Address: 123 Cloud Street, San Francisco, CA 94105
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

export default Terms;