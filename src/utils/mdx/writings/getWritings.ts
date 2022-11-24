import { readFileSync } from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import readingTime from 'reading-time';
import { Writing } from 'types/Writing';
import { hasTag as writingHasTag } from './filters/has-tag';
import { inSearch as writingInSearch } from './filters/in-search';
import { getWritingFiles } from './getWritingFiles';
import { Filters, GetWritingsData } from './types';
import { sortBy } from './utils/sort-by';

function getFrontmatterFiles(files: string[]) {
  return files.map((file: string) => {
    const source = readFileSync(
      join(process.cwd(), 'src', 'contents', 'writings', file),
      'utf8',
    );

    const { data: matterData } = matter(source);
    const data = matterData as Writing;

    const writing: Writing = {
      ...(data as Writing),
      slug: file.replace('.mdx', ''),
      readingTime: readingTime(source),
    };

    return writing;
  }, []);
}

function applyFilters(
  data: Writing[],
  filters: Filters | undefined,
): Writing[] {
  return data.filter((writing) => {
    const inSearch = filters?.search
      ? writingHasTag(writing, filters.search)
      : true;
    const hasTag = filters?.tag ? writingInSearch(writing, filters.tag) : true;

    const isDraft = !!writing.isDraft === !!filters?.isDraft;

    return inSearch && hasTag && isDraft;
  });
}

export async function getWritings({
  sort = 'new',
  max,
  filters,
}: GetWritingsData = {}) {
  let files = await getWritingFiles();

  if (max) files = files.slice(0, max);

  const frontmatterFiles = getFrontmatterFiles(files);

  return sortBy(applyFilters(frontmatterFiles, filters), sort);
}
