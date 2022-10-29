import { parse } from 'date-fns';
import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import readingTime from 'reading-time';
import { Writing } from 'types/Writing';
import { ContentType } from './types';

export enum SortTypes {
  new = 'New',
  name = 'Name',
}

export type SortTypesKeys = keyof typeof SortTypes;

type ContentTypes = {
  writings: Writing;
};

export type PickFrontmatter<T extends ContentType> = ContentTypes[T];

function parseToDate(date: string) {
  return parse(date, 'yyyy-MM-dd', new Date());
}

function sortBy<T extends ContentType>(
  data: PickFrontmatter<T>[],
  type: SortTypesKeys,
): PickFrontmatter<T>[] {
  const sortTypes: { [key in SortTypesKeys]: () => PickFrontmatter<T>[] } = {
    new: () => {
      return data.sort((a, b) => {
        const aAsDate = parseToDate(a.publishedAt);
        const bAsDate = parseToDate(b.publishedAt);
        return Number(bAsDate) - Number(aAsDate);
      });
    },
    name: () => {
      return data.sort((a, b) => (a.title > b.title ? 1 : -1));
    },
  };

  return sortTypes[type]();
}

export async function getAllFilesFrontmatter<T extends ContentType>(
  type: T,
  sort: SortTypesKeys,
) {
  const files = readdirSync(join(process.cwd(), 'src', 'contents', type));

  return files.reduce((allPosts: Array<PickFrontmatter<T>>, postSlug) => {
    const source = readFileSync(
      join(process.cwd(), 'src', 'contents', type, postSlug),
      'utf8',
    );

    const { data } = matter(source);

    const res: PickFrontmatter<T>[] = [
      {
        ...(data as PickFrontmatter<T>),
        slug: postSlug.replace('.mdx', ''),
        readingTime: readingTime(source),
      },
      ...allPosts,
    ];

    const sorted = sortBy<T>(res, sort);

    return sorted;
  }, []);
}
