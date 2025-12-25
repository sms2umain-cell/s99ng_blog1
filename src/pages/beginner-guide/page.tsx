import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import BackToTop from '../../components/feature/BackToTop';
import ArticleCard from '../../components/base/ArticleCard';
import { allArticles } from '../../mocks/all-articles';
import { useSEO, generateBreadcrumbSchema, generateFAQSchema } from '../../utils/seo';

const BeginnerGuidePage = () => {
  const beginnerArticles = allArticles.filter(
    (article) => article.categorySlug === 'beginner-guide'
  );

  // FAQ Schema
  const faqSchema = generateFAQSchema([
    {
      question: 'How do I start online gaming in Nigeria?',
      answer: 'Start by learning the basics of your chosen game, select a reputable and licensed platform, set a clear budget, and always play responsibly. Our beginner guides cover everything you need to know.',
    },
    {
      question: 'What is responsible gaming?',
      answer: 'Responsible gaming means treating gaming as entertainment, setting financial limits, never chasing losses, and knowing when to stop. It ensures gaming remains fun and safe.',
    },
    {
      question: 'How much should I budget for gaming?',
      answer: 'Only use money you can afford to lose. Never bet more than 5% of your total bankroll on a single bet, and set daily, weekly, and monthly limits.',
    },
    {
      question: 'Are online gaming platforms safe in Nigeria?',
      answer: 'Licensed and regulated platforms with proper security measures are safe. Always verify licensing, read reviews, and check for SSL encryption before playing.',
    },
  ]);

  // SEO Configuration
  useSEO({
    title: 's99ng Beginner Gaming Guide Nigeria | Start Your Gaming Journey Safely',
    description: 'Complete beginner-friendly guides covering everything Nigerian players need to know about online gaming from s99ng, from basics to responsible gaming practices. Learn how to start gaming safely and responsibly.',
    keywords: 's99ng, beginner gaming guide Nigeria, how to start online gaming, responsible gaming Nigeria, gaming basics, new player guide Nigeria, safe gaming practices',
    canonical: '/beginner-guide',
    ogType: 'website',
    schema: faqSchema,
  });

  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=educational%20learning%20guide%20book%20knowledge%20concept%20with%20warm%20yellow%20amber%20colors%20friendly%20welcoming%20atmosphere%20beginner%20friendly%20design&width=1920&height=600&seq=beginner-hero-001&orientation=landscape"
            alt="Beginner Guide"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-500 to-amber-500 text-black text-sm font-semibold rounded-full">
                Beginner Guide
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Start Your <span className="text-amber-400">Gaming Journey</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Complete beginner-friendly guides covering everything Nigerian players need to know about online gaming, from basics to responsible gaming practices.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              All Beginner Guides
            </h2>
            <p className="text-gray-400">
              {beginnerArticles.length} articles available
            </p>
          </div>

          {beginnerArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {beginnerArticles.map((article) => (
                <ArticleCard key={article.id} {...article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <i className="ri-article-line text-6xl text-gray-600 mb-4"></i>
              <p className="text-gray-400 text-lg">No articles found in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Getting Started Steps
            </h2>
            <p className="text-gray-400">
              Follow these steps to begin your gaming journey safely
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Learn the Basics', desc: 'Understand game rules and terminology', icon: 'ri-book-open-line' },
              { step: '2', title: 'Choose Platform', desc: 'Select reputable and licensed platforms', icon: 'ri-shield-check-line' },
              { step: '3', title: 'Set Budget', desc: 'Establish clear financial limits', icon: 'ri-wallet-line' },
              { step: '4', title: 'Play Responsibly', desc: 'Enjoy gaming as entertainment', icon: 'ri-heart-line' },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-amber-500/50 transition-all text-center"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 text-black text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/5 mx-auto mb-3">
                  <i className={`${item.icon} text-2xl text-amber-400`}></i>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default BeginnerGuidePage;