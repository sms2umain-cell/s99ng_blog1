import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import BackToTop from '../../components/feature/BackToTop';
import ArticleCard from '../../components/base/ArticleCard';
import { allArticles } from '../../mocks/all-articles';
import { useSEO, generateBreadcrumbSchema } from '../../utils/seo';

const SlotGamesPage = () => {
  const slotArticles = allArticles.filter(
    (article) => article.categorySlug === 'slot-games'
  );

  // SEO Configuration
  useSEO({
    title: 's99ng Slot Games Guide Nigeria | Best Online Slots Reviews & RTP Analysis',
    description: 'Comprehensive reviews of the best slot games available to Nigerian players from s99ng, including RTP analysis, volatility guides, and winning strategies. Expert insights on Pragmatic Play, NetEnt, and top slot providers.',
    keywords: 's99ng, Nigeria slot games, online slots Nigeria, slot game reviews, RTP analysis, slot volatility guide, best slots Nigeria, Pragmatic Play slots',
    canonical: '/slot-games',
    ogType: 'website',
    schema: generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Slot Games', url: '/slot-games' },
    ]),
  });

  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=colorful%20vibrant%20slot%20machine%20casino%20gaming%20abstract%20background%20with%20golden%20coins%20bright%20lights%20purple%20pink%20colors%20exciting%20entertainment%20atmosphere&width=1920&height=600&seq=slot-hero-001&orientation=landscape"
            alt="Slot Games"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full">
                Slot Games
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Nigeria <span className="text-amber-400">Slot Games</span> Guide
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Comprehensive reviews of the best slot games available to Nigerian players, including RTP analysis, volatility guides, and winning strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              All Slot Games Articles
            </h2>
            <p className="text-gray-400">
              {slotArticles.length} articles available
            </p>
          </div>

          {slotArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {slotArticles.map((article) => (
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

      {/* Popular Providers */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Popular Slot Providers
            </h2>
            <p className="text-gray-400">
              Top game providers trusted by Nigerian players
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['Pragmatic Play', 'NetEnt', 'Microgaming', 'Play\'n GO', 'Yggdrasil', 'Red Tiger'].map((provider) => (
              <div
                key={provider}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all text-center"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 mx-auto mb-3">
                  <i className="ri-game-line text-2xl text-white"></i>
                </div>
                <p className="text-white font-semibold text-sm">{provider}</p>
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

export default SlotGamesPage;