import { SITE_URL } from 'config/app';
import { Feed, FeedOptions } from 'feed';
import fs from 'fs';
import { getWritings } from 'utils/mdx/getWritings';
import { parseToDate } from 'utils/time/parseToDate';

export async function generateRssFeed() {
  const writings = await getWritings();
  const siteUrl = SITE_URL;

  const feedOptions: FeedOptions = {
    title: 'Douglas Pinheiro Goulart',
    description:
      'Thoughts, curiosities and tutorials about software development to sharpen your skills and make you a better developer.',
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/img/icon-512.png`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `© ${new Date().getFullYear()} Douglas Pinheiro Goulart`,
    generator: 'Feed for Node.js',
    feedLinks: {
      rss2: `${siteUrl}/rss.xml`,
    },
  };

  const feed = new Feed(feedOptions);

  writings.forEach((writing) => {
    feed.addItem({
      title: writing.title,
      id: writing.slug,
      link: `${siteUrl}/writings/${writing.slug}`,
      description: writing.excerpt,
      author: [
        {
          name: 'Douglas Pinheiro Goulart',
          email: 'douglaspigoulart@gmail.com',
          link: siteUrl,
        },
      ],
      date: parseToDate(writing.publishedAt),
      image: writing.cover?.url ? `${siteUrl}${writing.cover.url}` : undefined,
    });
  });

  fs.writeFileSync('./public/rss.xml', feed.rss2());
}
