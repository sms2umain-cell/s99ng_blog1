import { articles } from './articles';
import { articlesPart2 } from './articles-part2';
import { articlesPart3 } from './articles-part3';
import { articlesPart4 } from './articles-part4';
import { slotGamesArticles } from './slot-games-articles';
import { sportsBettingArticles } from './sports-betting-articles';
import { liveCasinoArticles } from './live-casino-articles';
import { gameTipsArticles } from './game-tips-articles';
import { beginnerGuideArticles } from './beginner-guide-articles';

// Combine all articles from different files
export const allArticles = [
  ...articles,
  ...articlesPart2,
  ...articlesPart3,
  ...articlesPart4,
  ...slotGamesArticles,
  ...sportsBettingArticles,
  ...liveCasinoArticles,
  ...gameTipsArticles,
  ...beginnerGuideArticles
];

// Categories data
export const categories = [
  {
    name: 'Sports Betting',
    slug: 'sports-betting',
    description: 'Expert sports betting tips and strategies'
  },
  {
    name: 'Slot Games',
    slug: 'slot-games',
    description: 'Comprehensive slot games guides and reviews'
  },
  {
    name: 'Live Casino',
    slug: 'live-casino',
    description: 'Live dealer games strategies and tips'
  },
  {
    name: 'Game Tips & Strategy',
    slug: 'game-tips',
    description: 'Advanced gaming strategies and tips'
  },
  {
    name: 'Beginner Guide',
    slug: 'beginner-guide',
    description: 'Essential guides for new players'
  }
];

// Get articles by category
export const getArticlesByCategory = (categorySlug: string) => {
  return allArticles.filter(article => article.categorySlug === categorySlug);
};

// Get article by slug
export const getArticleBySlug = (slug: string) => {
  return allArticles.find(article => article.slug === slug);
};

// Get related articles (same category, excluding current article)
export const getRelatedArticles = (currentSlug: string, limit: number = 3) => {
  const currentArticle = getArticleBySlug(currentSlug);
  if (!currentArticle) return [];
  
  return allArticles
    .filter(article => 
      article.categorySlug === currentArticle.categorySlug && 
      article.slug !== currentSlug
    )
    .slice(0, limit);
};

// Get latest articles
export const getLatestArticles = (limit: number = 6) => {
  return [...allArticles]
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, limit);
};

// Get article count by category
export const getArticleCountByCategory = () => {
  const counts: Record<string, number> = {};
  allArticles.forEach(article => {
    counts[article.categorySlug] = (counts[article.categorySlug] || 0) + 1;
  });
  return counts;
};
