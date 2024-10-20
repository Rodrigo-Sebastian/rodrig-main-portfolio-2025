import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { join } from 'path';

const links = [
  { url: '/', priority: 1.0 },
  { url: '/about', priority: 0.8 },
  { url: '/projects', priority: 0.8 },
  { url: '/contact', priority: 0.7 },
];

const sitemapStream = new SitemapStream({ hostname: 'https://example.com' }); // Byt ut med din URL

// Skapa och spara sitemap.xml
streamToPromise(sitemapStream).then((data) => {
  createWriteStream(join(process.cwd(), 'public', 'sitemap.xml')).write(data);
});

links.forEach(link => sitemapStream.write(link));
sitemapStream.end();
