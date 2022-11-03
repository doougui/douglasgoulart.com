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

type GetFilesFrontmatterData<T> = {
  type: T;
  sort?: SortTypesKeys;
  max?: number;
  search?: string;
  tag?: string;
};

export async function getFilesFrontmatter<T extends ContentType>({
  type,
  sort = 'new',
  max,
  search,
  tag,
}: GetFilesFrontmatterData<T>) {
  let files = readdirSync(join(process.cwd(), 'src', 'contents', type));

  if (max) files = files.slice(0, max);

  const frontmatterFiles = files.reduce(
    (allPosts: PickFrontmatter<T>[], postSlug) => {
      const source = readFileSync(
        join(process.cwd(), 'src', 'contents', type, postSlug),
        'utf8',
      );

      const { data: matterData } = matter(source);
      const data = matterData as PickFrontmatter<T>;

      if (search) {
        const inSearch = () => {
          return (
            data.title.toLowerCase().includes(search.toLowerCase()) ||
            data.excerpt.toLowerCase().includes(search.toLowerCase())
          );
        };

        if (!inSearch()) return allPosts;
      }

      if (tag) {
        const hasTag = () => {
          return data.tags
            .split(',')
            .map((tagItem) => tagItem.toLowerCase())
            .some((tagItem) => tagItem === tag.toLowerCase());
        };

        if (!hasTag()) return allPosts;
      }

      const res: PickFrontmatter<T>[] = [
        {
          ...(data as PickFrontmatter<T>),
          slug: postSlug.replace('.mdx', ''),
          readingTime: readingTime(source),
        },
        ...allPosts,
      ];

      return res;
    },
    [],
  );

  const sorted = sortBy<T>(frontmatterFiles, sort);

  return sorted;
}
