import { readFileSync } from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import readingTime from 'reading-time';
import { Writing } from 'types/Writing';
import { parseToDate } from 'utils/time/parseToDate';
import { getWritingFiles } from './getWritingFiles';

export enum SortTypes {
  new = 'New',
  name = 'Name',
}

export type SortTypesKeys = keyof typeof SortTypes;

function sortBy(data: Writing[], type: SortTypesKeys): Writing[] {
  const sortTypes: { [key in SortTypesKeys]: () => Writing[] } = {
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

type GetFilesFrontmatterData = {
  sort?: SortTypesKeys;
  max?: number;
  search?: string;
  tag?: string;
};

function inSearch(data: Writing, search: string) {
  return (
    data.title.toLowerCase().includes(search.toLowerCase()) ||
    data.excerpt.toLowerCase().includes(search.toLowerCase())
  );
}

function hasTag(data: Writing, tag: string) {
  return data.tags
    .split(',')
    .map((tagItem) => tagItem.toLowerCase())
    .some((tagItem) => tagItem === tag.toLowerCase());
}

type GetFrontmatterFilesData = {
  files: string[];
} & Pick<GetFilesFrontmatterData, 'search' | 'tag'>;

function getFrontmatterFiles({ files, search, tag }: GetFrontmatterFilesData) {
  return files.reduce((allWritings: Writing[], slug) => {
    const source = readFileSync(
      join(process.cwd(), 'src', 'contents', 'writings', slug),
      'utf8',
    );

    const { data: matterData } = matter(source);
    const data = matterData as Writing;

    if (search && !inSearch(data, search)) return allWritings;
    if (tag && !hasTag(data, tag)) return allWritings;

    const res: Writing[] = [
      {
        ...(data as Writing),
        slug: slug.replace('.mdx', ''),
        readingTime: readingTime(source),
      },
      ...allWritings,
    ];

    return res;
  }, []);
}

export async function getWritings({
  sort = 'new',
  max,
  search,
  tag,
}: GetFilesFrontmatterData = {}) {
  let files = await getWritingFiles();

  if (max) files = files.slice(0, max);

  const frontmatterFiles = getFrontmatterFiles({
    files,
    search,
    tag,
  });

  const sorted = sortBy(frontmatterFiles, sort);

  return sorted;
}
