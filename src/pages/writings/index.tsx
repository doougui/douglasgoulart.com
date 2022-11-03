import { GetServerSideProps } from 'next';
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
    <WritingsScreen
      writings={writings}
      search={search}
      sortOptions={sortOptions}
      sort={sort}
      tag={tag}
    />
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { sort: querySort, search: querySearch, tag: queryTag } = query;

  const allowedSortOptions: SortTypesKeys[] = [
    ...(Object.keys(SortTypes) as SortTypesKeys[]),
  ];

  const sort: SortTypesKeys = isValidSort(allowedSortOptions, querySort)
    ? querySort
    : 'new';

  const search: string | undefined = isValidSearch(querySearch)
    ? querySearch
    : undefined;

  const tag: string | undefined = isValidTag(queryTag) ? queryTag : undefined;

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
