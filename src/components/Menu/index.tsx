import { Logo } from 'components/Logo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as S from './styles';

export function Menu() {
  const items = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Writings', href: '/writings' },
    { label: 'Guestbook', href: '/guestbook' },
  ];

  const router = useRouter();

  function is(href: string) {
    return router.pathname === href;
  }

  return (
    <S.Container>
      <Logo />

      <S.MenuNav>
        {items.map((item) => (
          <Link key={item.href} href={item.href} passHref>
            <S.MenuLink active={is(item.href)}>{item.label}</S.MenuLink>
          </Link>
        ))}
      </S.MenuNav>
    </S.Container>
  );
}
