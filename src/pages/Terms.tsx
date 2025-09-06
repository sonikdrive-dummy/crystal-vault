"use client";

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
            Last updated: August 2025
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
                  <li>Content that violates privacy or data protection laws</li><br />
                  <li>If you store or upload any illegal content, you will be solely responsible for any legal consequences, liabilities, or damages arising from such actions in any case. We are not liable for any illegal content stored or uploaded by users.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>5. Content Ownership</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                {/* <p>
                  You agree not to use our service to store, share, or transmit:
                </p> */}
                <ul>
                  <li><strong>Your Content:</strong> You retain ownership of all content you upload. By using our service, you grant us a non-exclusive, royalty-free license to store and transmit your content as necessary to provide the service.</li>
                  <li><strong>Prohibited Content:</strong> Do not upload content that is illegal, infringes on intellectual property rights, or violates our policies. We reserve the right to remove or restrict access to any content at our sole discretion without liability.</li>
                  <li><strong>Content Liability:</strong> You are solely responsible for the content you upload, including its legality, accuracy, and appropriateness. We disclaim any liability for damages or losses arising from your content.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>6. Payment and Billing</CardTitle>
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
                <CardTitle>7. Service Availability</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  We strive to provide continuous service but do not guarantee uninterrupted access. We are not liable for any damages or losses due to service interruptions, downtime, or maintenance.. We may perform maintenance that temporarily affects service availability.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>8. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                {/* <p>
                  In no event shall our company or its suppliers be liable for any damages arising out of the use or inability to use our service, even if we have been notified of the possibility of such damage.
                </p> */}
                <ul>
                  <li><strong>Maximum Liability:</strong>  In no event will our liability to you exceed the amount of fees paid by you to us in the 3 months preceding the event giving rise to the claim.</li>
                  <li><strong>Exclusion of Damages:</strong> We will not be liable for any damages, including but not limited to loss of data, business interruption, or loss of profits.</li>
                  <li><strong>No Warranty:</strong> Our services are provided "as is" and "as available" without warranties of any kind, express or implied, including but not limited to fitness for a particular purpose or non-infringement.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>9. Indemnification</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  You agree to indemnify, defend, and hold harmless SonikDrive, its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, losses, or expenses (including legal fees) arising from:
                </p>
                <ul>
                  <li>Your use of our service</li>
                  <li>Your violation of these Terms or applicable laws;</li>
                  <li>Your content, including any infringement of third-party rights; or</li>
                  <li>Any actions taken by you or through your account.</li>
                  <li>This indemnification obligation survives the termination of your account or these Terms.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>10. Termination</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  Either party may terminate this agreement at any time. Upon termination, your right to use the service will cease immediately. We may retain your data for a reasonable period to allow for data recovery.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>11. Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  We reserve the right to modify these terms at any time. We will notify users of significant changes via email or through our service. Continued use after changes constitutes acceptance of the new terms.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>12. No Third-Party Beneficiaries</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  These Terms are between you and SonikDrive. No third party shall have any rights or benefits under these Terms.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>13. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  If you have questions about these Terms & Conditions, please contact us at:
                </p>
                <p>
                  Email: <a href="mailto:">legal@sonikdrive.com</a>
                </p><br /><br />
                Thank you for choosing SonikDrive! By using our application, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. We’re committed to providing secure and reliable storage solutions.
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