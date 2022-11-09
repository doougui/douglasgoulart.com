import { Logo } from 'components/Logo';
import { MediaMatch } from 'components/MediaMatch';
import { ThemeSwitcher } from 'components/ThemeSwitcher';
import { REPO_URL } from 'config/app';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RiExternalLinkLine } from 'react-icons/ri';
import { MobileMenu } from '../MobileMenu';
import * as S from './styles';

export function Menu() {
  const items = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Writings', href: '/writings' },
    // { label: 'Guestbook', href: '/guestbook' },
    {
      label: 'GitHub',
      href: REPO_URL,
      isExternal: true,
    },
  ];

  const router = useRouter();

  function is(href: string) {
    return router.pathname === href;
  }

  return (
    <S.Container>
      <Logo />

      <MediaMatch lessThan="medium" data-testid="mobile-menu">
        <MobileMenu />
      </MediaMatch>

      <S.MenuNav data-testid="desktop-menu">
        {items.map(({ href, label, isExternal }) => (
          <Link key={href} href={href} passHref>
            <S.MenuLink
              target={isExternal ? '_blank' : undefined}
              active={is(href)}
            >
              {label}
              {isExternal && <RiExternalLinkLine size={16} />}
            </S.MenuLink>
          </Link>
        ))}

        <ThemeSwitcher />
      </S.MenuNav>
    </S.Container>
  );
}
