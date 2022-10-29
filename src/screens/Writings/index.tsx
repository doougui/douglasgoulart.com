import React from 'react';
import { Heading1 } from 'components/Headings';
import { MutedText } from 'components/MutedText';
import { Writing } from 'components/Writing';
import { Base } from 'layouts/Base';
import { useRouter } from 'next/router';
import { ParsedUrlQueryInput } from 'querystring';
import { Writing as WritingType } from 'types/Writing';
import { SortTypes, SortTypesKeys } from 'utils/mdx/getAllFilesFrontmatter';
import { Filter } from './components/Filter';
import * as S from './styles';

export type WritingsProps = {
  writings: WritingType[];
  sort: SortTypesKeys;
  sortOptions: SortTypes;
};

export function Writings({ writings, ...sortProps }: WritingsProps) {
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
        Brain dumps, explorations, and how-to guides. I write about different
        topics, such as design system, accessibility, start ups and user/dev
        experience.
      </MutedText>

      <Filter {...sortProps} onFilter={handleFilter} />

      <S.Writings spacing="1rem">
        {writings.map((writing) => (
          <Writing key={writing.slug} {...writing} />
        ))}
      </S.Writings>
    </Base>
  );
}
