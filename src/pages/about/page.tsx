import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import BackToTop from '../../components/feature/BackToTop';
import { useSEO } from '../../utils/seo';

const AboutPage = () => {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://naijawinhub.com';

  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 's99ng',
    url: siteUrl,
    description: 's99ng is Nigeria\'s leading independent iGaming content platform providing honest, educational, and locally relevant gaming content.',
    founder: {
      '@type': 'Person',
      name: 'Chukwudi Okafor',
    },
    sameAs: [
      'https://facebook.com',
      'https://twitter.com',
      'https://instagram.com',
    ],
  };

  // SEO Configuration
  useSEO({
    title: 'About s99ng | Nigeria iGaming Education Platform',
    description: 'Learn about s99ng, Nigeria\'s leading independent iGaming content platform. Founded by Chukwudi Okafor, a professional gaming content creator with 10 years of experience.',
    keywords: 'about s99ng, Nigeria gaming blog, iGaming education, Chukwudi Okafor, gaming content creator Nigeria',
    canonical: '/about',
    ogType: 'website',
    schema: organizationSchema,
  });

  return (
    <div className="min-h-screen bg-black">
      <Header />

      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              About <span className="text-amber-400">NaijaWinHub</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Your trusted source for Nigeria iGaming insights and education
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Who We Are */}
            <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold text-white mb-6">Who We Are</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  NaijaWinHub is Nigeria's leading independent iGaming content platform, founded and operated by <strong className="text-white">Chukwudi Okafor</strong>, a professional gaming content creator with over 10 years of experience in the online gaming industry.
                </p>
                <p>
                  As a passionate Nigerian gamer and industry expert, I created NaijaWinHub to fill a crucial gap in the market: providing honest, educational, and locally relevant gaming content specifically for Nigerian players.
                </p>
                <p>
                  Unlike promotional sites or affiliate-driven platforms, NaijaWinHub focuses purely on education, strategy, and responsible gaming. We don't operate any gaming platforms—we simply provide the knowledge and insights Nigerian players need to make informed decisions.
                </p>
              </div>
            </section>

            {/* Our Mission */}
            <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Our mission is to empower Nigerian players with comprehensive, accurate, and actionable information about online gaming. We believe that informed players make better decisions, enjoy gaming more responsibly, and contribute to a healthier gaming ecosystem.
                </p>
                <p className="font-semibold text-white">We are committed to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Providing honest, unbiased gaming content and reviews</li>
                  <li>Educating players about responsible gaming practices</li>
                  <li>Sharing proven strategies and tips for various gaming categories</li>
                  <li>Helping players identify and avoid scams and fraudulent platforms</li>
                  <li>Promoting safe, secure, and enjoyable gaming experiences</li>
                  <li>Supporting the Nigerian gaming community with locally relevant insights</li>
                </ul>
              </div>
            </section>

            {/* What We Cover */}
            <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold text-white mb-6">What We Cover</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-amber-400 mb-3">Sports Betting</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Expert tips for football betting, Premier League analysis, betting strategies, bankroll management, and understanding odds.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-400 mb-3">Slot Games</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Comprehensive slot reviews, RTP analysis, volatility guides, provider comparisons, and winning strategies.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-400 mb-3">Live Casino</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Blackjack basic strategy, roulette systems, baccarat tips, live dealer game guides, and casino etiquette.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-400 mb-3">Game Tips & Strategy</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Advanced strategies, market trends, winning techniques, and professional insights for serious players.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-400 mb-3">Beginner Guides</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Complete guides for new players covering basics, payment methods, security, and responsible gaming.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-400 mb-3">Responsible Gaming</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Problem gambling awareness, self-exclusion guides, mental health resources, and safe gaming practices.
                  </p>
                </div>
              </div>
            </section>

            {/* Our Values */}
            <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold text-white mb-6">Our Values</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-amber-400 mb-2">Honesty & Transparency</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We provide honest opinions and transparent information. We never compromise our integrity for commercial interests.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-400 mb-2">Education First</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Our primary goal is educating players, not promoting gambling. We believe knowledge empowers better decisions.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-400 mb-2">Responsible Gaming</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We actively promote responsible gaming practices and provide resources for those struggling with problem gambling.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-400 mb-2">Local Relevance</h3>
                  <p className="text-gray-300 leading-relaxed">
                    All our content is tailored specifically for Nigerian players, considering local context, preferences, and challenges.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-gradient-to-br from-emerald-900 to-teal-900 rounded-xl p-8 border border-emerald-700 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
              <p className="text-emerald-100 mb-6 leading-relaxed">
                Have questions, suggestions, or feedback? We'd love to hear from you. Connect with us on social media or reach out through our contact channels.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                  aria-label="Facebook"
                >
                  <i className="ri-facebook-fill text-2xl text-white"></i>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                  aria-label="Twitter"
                >
                  <i className="ri-twitter-x-fill text-2xl text-white"></i>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                  aria-label="Instagram"
                >
                  <i className="ri-instagram-fill text-2xl text-white"></i>
                </a>
                <a
                  href="https://telegram.org"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                  aria-label="Telegram"
                >
                  <i className="ri-telegram-fill text-2xl text-white"></i>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default AboutPage;