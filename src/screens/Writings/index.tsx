import { Heading1 } from 'components/Headings';
import { MutedText } from 'components/MutedText';
import { Writing } from 'components/Writing';
import { Base } from 'layouts/Base';
import { Filter } from './components/Filter';
import * as S from './styles';

export function Writings() {
  return (
    <Base>
      <Heading1>Writings</Heading1>
      <MutedText>
        Brain dumps, explorations, and how-to guides. I write about different
        topics, such as design system, accessibility, start ups and user/dev
        experience.
      </MutedText>

      <Filter />

      <S.Writings spacing="1rem">
        <Writing />
        <Writing />
        <Writing />
        <Writing />
        <Writing />
        <Writing />
      </S.Writings>
    </Base>
  );
}
