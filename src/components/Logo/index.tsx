import Link from 'next/link';
import * as S from './styles';

export function Logo() {
  return (
    <Link href="/" passHref>
      <S.Link>
        <S.Container data-testid="logo">
          Douglas<S.Dot>.</S.Dot>
        </S.Container>
      </S.Link>
    </Link>
  );
}
