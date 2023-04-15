import { Heading1 } from 'components/Headings';
import { MutedText } from 'components/MutedText';
import { Writing } from 'components/Writing';
import { Base } from 'layouts/Base';
import { useRouter } from 'next/router';
import { ParsedUrlQueryInput } from 'querystring';
import React from 'react';
import { Writing as WritingType } from 'types/Writing';
import { SortTypesKeys } from 'utils/mdx/writings/types';
import { Filter } from './components/Filter';
import * as S from './styles';

export type WritingsProps = {
  writings: WritingType[];
  search: string | null;
  tag: string | null;
  sort: SortTypesKeys;
};

export function Writings({ writings, ...filterProps }: WritingsProps) {
  const { push } = useRouter();

  const handleFilter = React.useCallback(
    (items: ParsedUrlQueryInput) => {
      push({
        pathname: '/writings',
        query: items,
      });
    },
    [push],
  );

  return (
    <Base>
      <Heading1>Writings</Heading1>
      <MutedText>
        Thoughts, curiosities and tutorials about software development to
        sharpen your skills and make you a better developer.
      </MutedText>

      <Filter {...filterProps} onFilter={handleFilter} />

      <S.Writings spacing="1rem">
        {writings.map(({ slug, title, cover, excerpt, publishedAt }) => (
          <Writing
            key={slug}
            {...{ slug, title, cover, excerpt, publishedAt }}
          />
        ))}
      </S.Writings>
    </Base>
  );
}
