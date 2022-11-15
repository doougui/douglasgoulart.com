import { Writing } from 'types/Writing';

export default [
  {
    wordCount: 100,
    readingTime: {
      text: '5 min read',
      time: 5 * 60,
      words: 100,
      minutes: 5,
    },
    slug: 'mock1',
    title: 'Mock Writing 1',
    excerpt: 'This is a mock writing 1',
    cover: {
      url: 'https://via.placeholder.com/200',
      alt: 'Mock Writing 1',
      caption: 'Mock Writing 1 by Douglas',
    },
    publishedAt: '2022-11-15',
    modifiedAt: '2022-11-15',
    isDraft: false,
    tags: 'Test,Mock',
  },
  {
    wordCount: 345,
    readingTime: {
      text: '5 min read',
      time: 7 * 60,
      words: 345,
      minutes: 7,
    },
    slug: 'mock2',
    title: 'Mock Writing 2',
    excerpt: 'This is a mock writing 2',
    cover: {
      url: 'https://via.placeholder.com/200',
      alt: 'Mock Writing 2',
      caption: 'Mock Writing 2 by Douglas',
    },
    publishedAt: '2022-11-14',
    modifiedAt: '2022-11-14',
    isDraft: false,
    tags: 'Test,Mock',
  },
] as Writing[];
