import { GetServerSideProps } from 'next';
import { Writings as WritingsScreen, WritingsProps } from 'screens/Writings';
import {
  getFilesFrontmatter,
  SortTypes,
  SortTypesKeys,
} from 'utils/mdx/getFilesFrontmatter';

export default function Writings({
  writings,
  sort,
  sortOptions,
}: WritingsProps) {
  return (
    <WritingsScreen writings={writings} sortOptions={sortOptions} sort={sort} />
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { sort: querySort } = query;

  const allowedSortOptions: SortTypesKeys[] = [
    ...(Object.keys(SortTypes) as SortTypesKeys[]),
  ];

  const isValidSort = (
    value: string | string[] | undefined,
  ): value is SortTypesKeys => {
    return (
      typeof value === 'string' &&
      allowedSortOptions.includes(value as SortTypesKeys)
    );
  };

  const sort: SortTypesKeys = isValidSort(querySort) ? querySort : 'new';

  const files = await getFilesFrontmatter('writings', sort);

  return {
    props: {
      writings: files,
      sortOptions: SortTypes,
      sort,
    },
  };
};
