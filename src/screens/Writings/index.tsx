import { Heading1 } from 'components/Headings';
import { MutedText } from 'components/MutedText';
import { Base } from 'layouts/Base';
import { Filter } from './components/Filter';

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
    </Base>
  );
}
