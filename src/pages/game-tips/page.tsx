import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import BackToTop from '../../components/feature/BackToTop';
import ArticleCard from '../../components/base/ArticleCard';
import { allArticles } from '../../mocks/all-articles';
import { useSEO, generateBreadcrumbSchema } from '../../utils/seo';

const GameTipsPage = () => {
  const gameTipsArticles = allArticles.filter(
    (article) => article.categorySlug === 'game-tips-strategy'
  );

  // SEO Configuration
  useSEO({
    title: 's99ng Gaming Strategies & Tips | Advanced Nigeria Gaming Guide',
    description: 'Advanced tips, strategies, and market insights to help Nigerian players improve their gaming skills and make informed decisions from s99ng. Professional gaming strategies for sports betting, slots, and casino games.',
    keywords: 's99ng, gaming strategies Nigeria, advanced betting tips, gaming market insights, professional gaming tips, winning strategies Nigeria, gaming analysis',
    canonical: '/game-tips-strategy',
    ogType: 'website',
    schema: generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Game Tips & Strategy', url: '/game-tips-strategy' },
    ]),
  });

  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=strategic%20gaming%20analysis%20charts%20graphs%20data%20visualization%20with%20green%20emerald%20colors%20professional%20analytical%20atmosphere%20modern%20technology%20interface&width=1920&height=600&seq=tips-hero-001&orientation=landscape"
            alt="Game Tips"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-semibold rounded-full">
                Game Tips & Strategy
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Expert <span className="text-amber-400">Gaming Strategies</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Advanced tips, strategies, and market insights to help Nigerian players improve their gaming skills and make informed decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              All Strategy Articles
            </h2>
            <p className="text-gray-400">
              {gameTipsArticles.length} articles available
            </p>
          </div>

          {gameTipsArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gameTipsArticles.map((article) => (
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

      {/* Strategy Tips */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-8">
              Key Strategy Principles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex-shrink-0">
                  <i className="ri-brain-line text-2xl text-white"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Knowledge is Power</h3>
                  <p className="text-gray-400 text-sm">
                    Understand game mechanics, odds, and probabilities before playing.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex-shrink-0">
                  <i className="ri-funds-line text-2xl text-white"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Bankroll Management</h3>
                  <p className="text-gray-400 text-sm">
                    Proper money management is the foundation of successful gaming.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex-shrink-0">
                  <i className="ri-time-line text-2xl text-white"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Patience Pays Off</h3>
                  <p className="text-gray-400 text-sm">
                    Long-term success requires patience and disciplined decision-making.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex-shrink-0">
                  <i className="ri-shield-check-line text-2xl text-white"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Stay Safe</h3>
                  <p className="text-gray-400 text-sm">
                    Always prioritize security and play on reputable platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default GameTipsPage;