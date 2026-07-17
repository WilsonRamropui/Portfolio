import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // Replace this with your actual production domain when you deploy!
  const baseUrl = 'https://wilson-portfolio.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // We disallow search engines from indexing the Next.js internals
      disallow: ['/_next/', '/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
