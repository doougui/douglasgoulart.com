import { GetServerSideProps } from 'next';
import { NextSeo } from 'next-seo';
import { Writings as WritingsScreen, WritingsProps } from 'screens/Writings';
import { getWritings } from 'utils/mdx/writings/getWritings';
import {
  isValidSearch,
  isValidSort,
  isValidTag,
} from 'utils/mdx/writings/typeGuards';
import { SortTypes, SortTypesKeys } from 'utils/mdx/writings/types';
import { getPageUrl } from 'utils/shared/get-page-url';

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
        canonical={getPageUrl()}
        openGraph={{
          title: 'Writings | Douglas Pinheiro Goulart',
          description:
            'Thoughts, curiosities and tutorials about software development to sharpen your skills and make you a better developer.',
        }}
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

  const files = await getWritings({
    sort,
    filters: {
      search,
      tag,
    },
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
