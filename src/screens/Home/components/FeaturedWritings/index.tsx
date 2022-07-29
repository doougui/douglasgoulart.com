import { Link } from 'components/Link';
import { SectionTitle } from 'components/SectionTitle';
import NextLink from 'next/link';
import * as S from './styles';

export function FeaturedWritings() {
  return (
    <S.Container>
      <S.Heading>
        <SectionTitle>Featured writings</SectionTitle>
        <NextLink href="/writings" passHref>
          <Link>Read all</Link>
        </NextLink>
      </S.Heading>
    </S.Container>
  );
}
