import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import BackToTop from '../../components/feature/BackToTop';
import ArticleCard from '../../components/base/ArticleCard';
import OptimizedImage from '../../components/base/OptimizedImage';
import { allArticles } from '../../mocks/all-articles';
import { useSEO, generateBreadcrumbSchema } from '../../utils/seo';

const SportsBettingPage = () => {
  const sportsBettingArticles = allArticles.filter(
    (article) => article.categorySlug === 'sports-betting'
  );

  // SEO Configuration
  useSEO({
    title: 's99ng Sports Betting Tips Nigeria | Expert Football Betting Strategies',
    description: 'Expert sports betting strategies, tips, and analysis for Nigerian players from s99ng. Learn how to make informed betting decisions on football, basketball, and other popular sports with proven winning strategies.',
    keywords: 's99ng, Nigeria sports betting, football betting tips Nigeria, sports betting strategies, betting analysis Nigeria, Premier League betting tips, sports prediction Nigeria',
    canonical: '/sports-betting',
    ogType: 'website',
    schema: generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Sports Betting', url: '/sports-betting' },
    ]),
  });

  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage
            src="https://readdy.ai/api/search-image?query=dynamic%20sports%20betting%20football%20stadium%20action%20scene%20with%20green%20field%20bright%20lights%20energetic%20atmosphere%20professional%20sports%20photography%20modern%20composition&width=1920&height=600&seq=sports-hero-001&orientation=landscape"
            alt="Sports Betting"
            className="w-full h-full"
            objectFit="cover"
            priority={true}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-semibold rounded-full">
                Sports Betting
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Nigeria <span className="text-amber-400">Sports Betting</span> Tips
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Expert sports betting strategies, tips, and analysis for Nigerian players. Learn how to make informed betting decisions on football, basketball, and other popular sports.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              All Sports Betting Articles
            </h2>
            <p className="text-gray-400">
              {sportsBettingArticles.length} articles available
            </p>
          </div>

          {sportsBettingArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sportsBettingArticles.map((article) => (
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

      {/* Tips Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-8">
              Quick Sports Betting Tips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex-shrink-0">
                  <i className="ri-search-line text-2xl text-white"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Research Thoroughly</h3>
                  <p className="text-gray-400 text-sm">
                    Always research teams, players, and statistics before placing bets.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex-shrink-0">
                  <i className="ri-wallet-line text-2xl text-white"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Manage Bankroll</h3>
                  <p className="text-gray-400 text-sm">
                    Never bet more than 5% of your total bankroll on a single bet.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex-shrink-0">
                  <i className="ri-line-chart-line text-2xl text-white"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Find Value Bets</h3>
                  <p className="text-gray-400 text-sm">
                    Look for bets where odds are higher than the actual probability suggests.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex-shrink-0">
                  <i className="ri-emotion-line text-2xl text-white"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Avoid Emotional Betting</h3>
                  <p className="text-gray-400 text-sm">
                    Make decisions based on data and analysis, not loyalty or feelings.
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

export default SportsBettingPage;