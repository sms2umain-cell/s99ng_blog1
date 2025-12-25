import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import BackToTop from '../../components/feature/BackToTop';
import ArticleCard from '../../components/base/ArticleCard';
import { allArticles, categories } from '../../mocks/all-articles';
import { useSEO, generateWebSiteSchema } from '../../utils/seo';

const HomePage = () => {
  const featuredArticles = allArticles.slice(0, 6);
  const latestArticles = allArticles.slice(0, 8);

  // SEO Configuration
  useSEO({
    title: 's99ng | Nigeria Sports Betting Tips, Slot Games & Live Casino Guide',
    description: 'Expert Nigeria sports betting tips, slot games reviews, live casino strategies and responsible gaming guides. Learn winning strategies from s99ng, a professional Nigerian iGaming content creator with 10 years experience.',
    keywords: 's99ng, Nigeria sports betting tips, Nigeria slot games, Nigeria online casino guide, Nigeria live casino tips, Best games Nigeria, How to win slots Nigeria, Sports prediction guide Nigeria',
    canonical: '/',
    ogType: 'website',
    schema: generateWebSiteSchema(),
  });

  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=modern%20abstract%20digital%20gaming%20background%20with%20vibrant%20green%20gold%20black%20colors%20futuristic%20technology%20pattern%20casino%20sports%20betting%20theme%20high%20energy%20dynamic%20composition%20professional%20sleek%20design&width=1920&height=1080&seq=hero-bg-001&orientation=landscape"
            alt="Hero Background"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-semibold rounded-full">
              Nigeria's #1 iGaming Blog
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              NaijaWinHub
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Nigeria Online Gaming Tips & Guide
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Expert insights on sports betting, slot games, live casino strategies, and responsible gaming from a professional Nigerian iGaming content creator with 10 years of experience.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://s99ng.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold rounded-lg hover:from-amber-600 hover:to-yellow-600 transition-all shadow-lg hover:shadow-amber-500/50 cursor-pointer whitespace-nowrap"
            >
              Start Learning
            </a>
            <Link
              to="/sports-betting"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg hover:bg-white/20 transition-all border border-white/20 cursor-pointer whitespace-nowrap"
            >
              Explore Tips
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <i className="ri-arrow-down-line text-4xl text-white/50"></i>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Explore <span className="text-amber-400">Gaming Categories</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Discover expert guides and tips across all gaming categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => {
              const icons = [
                'ri-football-line',
                'ri-game-line',
                'ri-live-line',
                'ri-lightbulb-line',
                'ri-book-open-line',
              ];
              const gradients = [
                'from-red-500 to-orange-500',
                'from-purple-500 to-pink-500',
                'from-blue-500 to-cyan-500',
                'from-green-500 to-emerald-500',
                'from-yellow-500 to-amber-500',
              ];

              return (
                <Link
                  key={category.slug}
                  to={`/${category.slug}`}
                  className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 cursor-pointer overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradients[index]} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`}></div>
                  <div className="relative">
                    <div className={`w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br ${gradients[index]} mb-4 group-hover:scale-110 transition-transform`}>
                      <i className={`${icons[index]} text-3xl text-white`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {allArticles.filter(a => a.categorySlug === category.slug).length} Articles
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured <span className="text-amber-400">Articles</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Top picks from our expert gaming content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Latest <span className="text-amber-400">Updates</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Stay updated with the newest gaming tips and strategies
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestArticles.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 via-teal-900 to-emerald-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Improve Your Gaming Skills?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
            Join thousands of Nigerian players who trust NaijaWinHub for expert gaming insights, strategies, and responsible gaming education.
          </p>
          <a
            href="https://s99ng.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold rounded-lg hover:from-amber-600 hover:to-yellow-600 transition-all shadow-lg hover:shadow-amber-500/50 cursor-pointer whitespace-nowrap"
          >
            Get Started Now
          </a>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default HomePage;