import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import readingTime from 'reading-time';
import { Writing } from 'types/Writing';
import { ContentType } from './types';

export type PickFrontmatter<T extends ContentType> = T extends 'writings'
  ? Writing
  : never;

export async function getAllFilesFrontmatter<T extends ContentType>(type: T) {
  const files = readdirSync(join(process.cwd(), 'src', 'contents', type));

  return files.reduce((allPosts: Array<PickFrontmatter<T>>, postSlug) => {
    const source = readFileSync(
      join(process.cwd(), 'src', 'contents', type, postSlug),
      'utf8',
    );
    const { data } = matter(source);

    const res = [
      {
        ...(data as PickFrontmatter<T>),
        slug: postSlug.replace('.mdx', ''),
        readingTime: readingTime(source),
      },
      ...allPosts,
    ];
    return res;
  }, []);
}
