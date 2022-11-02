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

export default function Writings({
  writings,
  sort,
  sortOptions,
  search,
}: WritingsProps) {
  return (
    <WritingsScreen
      writings={writings}
      search={search}
      sortOptions={sortOptions}
      sort={sort}
    />
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { sort: querySort, search: querySearch } = query;

  const allowedSortOptions: SortTypesKeys[] = [
    ...(Object.keys(SortTypes) as SortTypesKeys[]),
  ];

  const sort: SortTypesKeys = isValidSort(allowedSortOptions, querySort)
    ? querySort
    : 'new';

  const search: string | undefined = isValidSearch(querySearch)
    ? querySearch
    : undefined;

  const files = await getFilesFrontmatter({
    type: 'writings',
    sort,
    search,
  });

  return {
    props: {
      writings: files,
      search: search ?? null,
      sortOptions: SortTypes,
      sort,
    },
  };
};
