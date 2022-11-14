import { ReadTimeResults } from 'reading-time';

export type Writing = {
  wordCount: number;
  readingTime: ReadTimeResults;
  slug: string;
  title: string;
  excerpt: string;
  cover?: {
    url: string;
    alt: string;
    caption?: string;
  };
  publishedAt: string;
  modifiedAt?: string;
  isDraft?: boolean;
  tags: string;
};
