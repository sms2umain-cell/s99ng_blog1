import { Link } from 'react-router-dom';

interface ArticleCardProps {
  id: number;
  title: string;
  slug: string;
  category: string;
  categorySlug: string;
  excerpt: string;
  author: string;
  publishDate: string;
  readTime: string;
  image: string;
  tags: string[];
}

const ArticleCard = ({
  title,
  slug,
  category,
  categorySlug,
  excerpt,
  author,
  publishDate,
  readTime,
  image,
  tags,
}: ArticleCardProps) => {
  return (
    <article className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10">
      <Link to={`/article/${slug}`} className="block cursor-pointer">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <Link
            to={`/${categorySlug}`}
            className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-amber-500 to-yellow-500 text-black text-xs font-semibold rounded-full cursor-pointer hover:from-amber-600 hover:to-yellow-600 transition-all whitespace-nowrap"
          >
            {category}
          </Link>
        </div>
      </Link>

      <div className="p-6">
        <Link to={`/article/${slug}`} className="cursor-pointer">
          <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-amber-400 transition-colors">
            {title}
          </h3>
        </Link>

        <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">{excerpt}</p>

        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <i className="ri-user-line"></i>
              <span>{author}</span>
            </span>
            <span className="flex items-center space-x-1">
              <i className="ri-calendar-line"></i>
              <span>{new Date(publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            </span>
          </div>
          <span className="flex items-center space-x-1">
            <i className="ri-time-line"></i>
            <span>{readTime}</span>
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded-md hover:bg-white/10 transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;