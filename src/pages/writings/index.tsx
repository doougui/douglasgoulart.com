import { GetServerSideProps } from 'next';
import { NextSeo } from 'next-seo';
import { Writings as WritingsScreen, WritingsProps } from 'screens/Writings';
import {
  getFilesFrontmatter,
  SortTypes,
  SortTypesKeys,
} from 'utils/mdx/getFilesFrontmatter';

const isValidSort = (
  allowedSortOptions: SortTypesKeys[],
  value: unknown,
): value is SortTypesKeys => {
  return (
    typeof value === 'string' &&
    allowedSortOptions.includes(value as SortTypesKeys)
  );
};

const isValidSearch = (value: unknown): value is string => {
  return typeof value === 'string';
};

const isValidTag = (value: unknown): value is string => {
  return typeof value === 'string';
};

export default function Writings({
  writings,
  sort,
  sortOptions,
  search,
  tag,
}: WritingsProps) {
  return (
    <>
      <NextSeo
        title="Writings | Douglas Pinheiro Goulart"
        description="Thoughts, curiosities and tutorials about software development to sharpen your skills and make you a better developer."
      />
      <WritingsScreen
        writings={writings}
        search={search}
        sortOptions={sortOptions}
        sort={sort}
        tag={tag}
      />
    </>
  );
}

const getSort = (
  allowedSortOptions: SortTypesKeys[],
  querySort: string | string[] | undefined,
): SortTypesKeys => {
  return isValidSort(allowedSortOptions, querySort) ? querySort : 'new';
};

const getSearch = (querySearch: string | string[] | undefined) => {
  return isValidSearch(querySearch) ? querySearch : undefined;
};

const getTag = (queryTag: string | string[] | undefined) => {
  return isValidTag(queryTag) ? queryTag : undefined;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { sort: querySort, search: querySearch, tag: queryTag } = query;

  const allowedSortOptions: SortTypesKeys[] = [
    ...(Object.keys(SortTypes) as SortTypesKeys[]),
  ];

  const sort = getSort(allowedSortOptions, querySort);
  const search = getSearch(querySearch);
  const tag = getTag(queryTag);

  const files = await getFilesFrontmatter({
    type: 'writings',
    sort,
    search,
    tag,
  });

  return {
    props: {
      writings: files,
      search: search ?? null,
      tag: tag ?? null,
      sortOptions: SortTypes,
      sort,
    },
  };
};
