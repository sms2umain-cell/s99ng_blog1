import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  schema?: object | object[];
}

export const useSEO = ({
  title,
  description,
  keywords,
  canonical,
  ogType = 'website',
  ogImage,
  schema,
}: SEOProps) => {
  const location = useLocation();
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://s99ng.com';
  const fullUrl = canonical ? `${siteUrl}${canonical}` : `${siteUrl}${location.pathname}`;
  const defaultOgImage = `${siteUrl}/og-image.jpg`;

  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic SEO
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Open Graph
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:url', fullUrl, true);
    updateMetaTag('og:image', ogImage || defaultOgImage, true);

    // Twitter Card
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage || defaultOgImage);

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullUrl);

    // Update last-modified
    const today = new Date().toISOString().split('T')[0];
    updateMetaTag('last-modified', today);

    // Remove existing schema scripts
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(script => script.remove());

    // Add or update Schema.org JSON-LD
    if (schema) {
      const schemas = Array.isArray(schema) ? schema : [schema];
      
      schemas.forEach((schemaObj) => {
        const schemaScript = document.createElement('script');
        schemaScript.setAttribute('type', 'application/ld+json');
        schemaScript.textContent = JSON.stringify(schemaObj);
        document.head.appendChild(schemaScript);
      });
    }

    // Cleanup function
    return () => {
      // Remove schema scripts when component unmounts
      const schemaScripts = document.querySelectorAll('script[type="application/ld+json"]');
      schemaScripts.forEach(script => script.remove());
    };
  }, [title, description, keywords, fullUrl, ogType, ogImage, schema]);
};

// Helper function to generate WebSite schema
export const generateWebSiteSchema = () => {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://s99ng.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 's99ng',
    url: siteUrl,
    description: 'Expert Nigeria sports betting tips, slot games reviews, live casino strategies and responsible gaming guides from s99ng.',
    inLanguage: 'en',
    publisher: {
      '@type': 'Organization',
      name: 's99ng',
      url: siteUrl,
    },
  };
};

// Helper function to generate Article schema
export const generateArticleSchema = (article: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
}) => {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://s99ng.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 's99ng',
      url: siteUrl,
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    image: article.image || `${siteUrl}/og-image.jpg`,
    url: article.url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  };
};

// Helper function to generate BreadcrumbList schema
export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://s99ng.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  };
};

// Helper function to generate FAQPage schema
export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
};
