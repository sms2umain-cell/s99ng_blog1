import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import BackToTop from '../../components/feature/BackToTop';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-gray-400">Last updated: January 1, 2025</p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
              <p>
                NaijaWinHub ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              <h3 className="text-xl font-semibold text-amber-400 mb-3">Automatically Collected Information</h3>
              <p className="mb-4">
                When you visit our website, we may automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>IP address</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide, operate, and maintain our website</li>
                <li>Improve, personalize, and expand our website</li>
                <li>Understand and analyze how you use our website</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you for customer service and support</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
              <p className="mb-4">
                We may employ third-party companies and individuals to facilitate our website, provide services on our behalf, or assist us in analyzing how our website is used. These third parties have access to your information only to perform these tasks on our behalf.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
              <p className="mb-4">Depending on your location, you may have certain rights regarding your personal information, including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The right to access your personal information</li>
                <li>The right to rectify inaccurate information</li>
                <li>The right to request deletion of your information</li>
                <li>The right to restrict processing of your information</li>
                <li>The right to data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
              <p>
                Our website is not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Disclaimer</h2>
              <p className="mb-4">
                <strong className="text-white">Important Notice:</strong> NaijaWinHub is an educational and informational website only. We do not operate any gaming platforms, accept bets, or facilitate gambling activities. We provide content for educational purposes to help players make informed decisions.
              </p>
              <p className="mb-4">
                All gaming activities should be conducted through licensed and regulated platforms. We are not responsible for any losses incurred through gaming activities. Always gamble responsibly and only with money you can afford to lose.
              </p>
              <p>
                If you have a gambling problem, please seek help from professional organizations specializing in gambling addiction support.
              </p>
            </section>

            <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us through our social media channels or website contact form.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default PrivacyPage;