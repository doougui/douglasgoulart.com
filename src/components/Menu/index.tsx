import { Logo } from 'components/Logo';
import Link from 'next/link';
import * as S from './styles';

export function Menu() {
  return (
    <S.Container>
      <Logo />

      <S.MenuNav>
        <Link href="/" passHref>
          <S.MenuLink>Home</S.MenuLink>
        </Link>

        <Link href="/about" passHref>
          <S.MenuLink>About</S.MenuLink>
        </Link>

        <Link href="/writings" passHref>
          <S.MenuLink>Writings</S.MenuLink>
        </Link>

        <Link href="/guestbook" passHref>
          <S.MenuLink>Guestbook</S.MenuLink>
        </Link>
      </S.MenuNav>
    </S.Container>
  );
}
