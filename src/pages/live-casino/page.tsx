import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import BackToTop from '../../components/feature/BackToTop';
import ArticleCard from '../../components/base/ArticleCard';
import { allArticles } from '../../mocks/all-articles';
import { useSEO, generateBreadcrumbSchema } from '../../utils/seo';

const LiveCasinoPage = () => {
  const liveCasinoArticles = allArticles.filter(
    (article) => article.categorySlug === 'live-casino'
  );

  // SEO Configuration
  useSEO({
    title: 's99ng Live Casino Guide Nigeria | Blackjack, Roulette & Baccarat Strategies',
    description: 'Master live dealer games with expert strategies for blackjack, roulette, baccarat, and more from s99ng. Learn from professional insights tailored for Nigerian players with proven winning techniques.',
    keywords: 's99ng, Nigeria live casino, live dealer games, blackjack strategy Nigeria, roulette tips, baccarat guide, live casino Nigeria, online casino strategies',
    canonical: '/live-casino',
    ogType: 'website',
    schema: generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Live Casino', url: '/live-casino' },
    ]),
  });

  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=elegant%20live%20casino%20dealer%20table%20with%20cards%20chips%20roulette%20wheel%20professional%20gaming%20atmosphere%20blue%20cyan%20lighting%20luxury%20entertainment%20setting&width=1920&height=600&seq=live-casino-hero-001&orientation=landscape"
            alt="Live Casino"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold rounded-full">
                Live Casino
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Nigeria <span className="text-amber-400">Live Casino</span> Guide
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Master live dealer games with expert strategies for blackjack, roulette, baccarat, and more. Learn from professional insights tailored for Nigerian players.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              All Live Casino Articles
            </h2>
            <p className="text-gray-400">
              {liveCasinoArticles.length} articles available
            </p>
          </div>

          {liveCasinoArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {liveCasinoArticles.map((article) => (
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

      {/* Popular Games */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Popular Live Casino Games
            </h2>
            <p className="text-gray-400">
              Most played live dealer games in Nigeria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Live Blackjack', icon: 'ri-playing-card-line', color: 'from-blue-500 to-cyan-500' },
              { name: 'Live Roulette', icon: 'ri-refresh-line', color: 'from-red-500 to-orange-500' },
              { name: 'Live Baccarat', icon: 'ri-vip-diamond-line', color: 'from-purple-500 to-pink-500' },
              { name: 'Game Shows', icon: 'ri-tv-line', color: 'from-green-500 to-emerald-500' },
            ].map((game) => (
              <div
                key={game.name}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all text-center group"
              >
                <div className={`w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br ${game.color} mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <i className={`${game.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-white font-semibold text-lg">{game.name}</h3>
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

export default LiveCasinoPage;