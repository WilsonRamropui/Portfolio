import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Replace this with your actual production domain when you deploy!
  const baseUrl = 'https://wilson-portfolio.com';

  // These are all the static routes we mapped out during the build
  const routes = [
    '',
    '/about',
    '/blog',
    '/contact',
    '/experience',
    '/privacy',
    '/projects',
    '/showcase',
    '/terms',
    '/tools',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return [...routes];
}
