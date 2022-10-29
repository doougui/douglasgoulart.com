import { Heading1 } from 'components/Headings';
import { MutedText } from 'components/MutedText';
import { Writing } from 'components/Writing';
import { Base } from 'layouts/Base';
import { Writing as WritingType } from 'types/Writing';
import { Filter } from './components/Filter';
import * as S from './styles';

type WritingsProps = {
  writings: WritingType[];
};

export function Writings({ writings }: WritingsProps) {
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
        {writings.map((writing) => (
          <Writing {...writing} />
        ))}
      </S.Writings>
    </Base>
  );
}
