import { Writing } from 'types/Writing';
import writing from './writing';

export default [
  {
    ...writing,
    slug: 'mock-1',
    title: 'Mock Writing 1',
    publishedAt: '2022-11-15',
    modifiedAt: '2022-11-15',
    excerpt: 'This is a mock writing 1',
  },
  {
    ...writing,
    slug: 'mock-2',
    title: 'Mock Writing 3',
    publishedAt: '2022-11-13',
    modifiedAt: '2022-11-13',
    excerpt: 'This is a mock writing 2',
  },
  {
    ...writing,
    slug: 'mock-3',
    title: 'Mock Writing 2',
    publishedAt: '2022-11-14',
    modifiedAt: '2022-11-14',
    excerpt: 'This is a mock writing 3',
  },
] as Writing[];
