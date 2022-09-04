import { Heading2 } from 'components/Headings';
import { Link } from 'components/Link';
import { Writing } from 'components/Writing';
import NextLink from 'next/link';
import * as S from './styles';

export function FeaturedWritings() {
  return (
    <section>
      <S.Heading>
        <Heading2>Featured writings</Heading2>
        <NextLink href="/writings" passHref>
          <Link>Read all</Link>
        </NextLink>
      </S.Heading>

      <S.Content spacing="1rem">
        <Writing />
        <Writing />
        <Writing />
      </S.Content>
    </section>
  );
}
