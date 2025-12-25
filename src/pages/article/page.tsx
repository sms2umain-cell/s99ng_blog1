import { useParams, Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import BackToTop from '../../components/feature/BackToTop';
import ArticleCard from '../../components/base/ArticleCard';
import { allArticles } from '../../mocks/all-articles';
import { useSEO, generateArticleSchema, generateBreadcrumbSchema } from '../../utils/seo';

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = allArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
          <Link to="/" className="text-amber-400 hover:text-amber-500 cursor-pointer">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const relatedArticles = allArticles
    .filter((a) => a.categorySlug === article.categorySlug && a.id !== article.id)
    .slice(0, 3);

  // SEO Configuration
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://s99ng.com';
  const articleUrl = `${siteUrl}/article/${article.slug}`;
  
  const articleSchema = generateArticleSchema({
    title: article.title,
    description: article.excerpt,
    author: article.author,
    datePublished: article.publishDate,
    dateModified: article.publishDate,
    image: article.image,
    url: articleUrl,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: article.category, url: `/${article.categorySlug}` },
    { name: article.title, url: `/article/${article.slug}` },
  ]);

  useSEO({
    title: `${article.title} | s99ng`,
    description: article.excerpt,
    keywords: `s99ng, ${article.tags.join(', ')}, Nigeria gaming, ${article.category}`,
    canonical: `/article/${article.slug}`,
    ogType: 'article',
    ogImage: article.image,
    schema: [articleSchema, breadcrumbSchema],
  });

  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Article Header */}
      <article className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-400">
              <li>
                <Link to="/" className="hover:text-amber-400 transition-colors cursor-pointer">
                  Home
                </Link>
              </li>
              <li>
                <i className="ri-arrow-right-s-line"></i>
              </li>
              <li>
                <Link
                  to={`/${article.categorySlug}`}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  {article.category}
                </Link>
              </li>
              <li>
                <i className="ri-arrow-right-s-line"></i>
              </li>
              <li className="text-white">{article.title}</li>
            </ol>
          </nav>

          {/* Category Badge */}
          <Link
            to={`/${article.categorySlug}`}
            className="inline-block px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-black text-sm font-semibold rounded-full mb-6 cursor-pointer hover:from-amber-600 hover:to-yellow-600 transition-all whitespace-nowrap"
          >
            {article.category}
          </Link>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm mb-8 pb-8 border-b border-gray-800">
            <div className="flex items-center space-x-2">
              <i className="ri-user-line"></i>
              <span>{article.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="ri-calendar-line"></i>
              <span>
                {new Date(article.publishDate).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="ri-time-line"></i>
              <span>{article.readTime}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12 rounded-xl overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-auto object-cover object-top"
            />
          </div>

          {/* Article Content */}
          <div
            className="prose prose-invert prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: article.content }}
            style={{
              color: '#d1d5db',
              lineHeight: '1.8',
            }}
          />

          {/* Tags */}
          <div className="mb-12 pb-12 border-b border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">Tags</h3>
            <div className="flex flex-wrap gap-3">
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/5 text-gray-300 text-sm rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700 mb-12">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 text-black text-2xl font-bold flex-shrink-0">
                {article.author.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">About {article.author}</h3>
                <p className="text-gray-400 leading-relaxed">
                  Professional Nigerian iGaming content creator with 10 years of experience in the industry. Specializing in sports betting, slot games, live casino strategies, and responsible gaming education. Passionate about helping Nigerian players make informed decisions and enjoy gaming safely.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="bg-gray-900 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-white mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArticles.map((relatedArticle) => (
                  <ArticleCard key={relatedArticle.id} {...relatedArticle} />
                ))}
              </div>
            </div>
          </section>
        )}
      </article>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default ArticlePage;