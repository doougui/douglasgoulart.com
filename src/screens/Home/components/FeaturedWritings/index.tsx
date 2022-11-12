import { Heading2 } from 'components/Headings';
import { Link } from 'components/Link';
import { Writing } from 'components/Writing';
import { Writing as WritingType } from 'types/Writing';
import * as S from './styles';

export type FeaturedWritingsProps = {
  data: WritingType[];
};

export function FeaturedWritings({ data }: FeaturedWritingsProps) {
  return (
    <section>
      <S.Heading>
        <Heading2>Featured writings</Heading2>
        <Link href="/writings">Read all</Link>
      </S.Heading>

      <S.Content spacing="1rem">
        {data.map((writing) => (
          <Writing key={writing.slug} {...writing} />
        ))}
      </S.Content>
    </section>
  );
}
