import { REPO_URL } from 'config/app';
import { RiExternalLinkLine } from 'react-icons/ri';
import { Item } from '../Item';
import { List } from '../List';
import { Themes } from '../Themes';
import * as S from './styles';

export type NavigationProps = {
  isOpen: boolean;
};

export function Navigation({ isOpen }: NavigationProps) {
  const variants = {
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
      transition: {
        delay: 0.5,
      },
    },
  };

  const items = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    // { href: '/projects', label: 'Projects' },
    { href: '/writings', label: 'Writings' },
    // { href: '/guestbook', label: 'Guestbook' },
    {
      label: 'GitHub',
      href: REPO_URL,
      isExternal: true,
    },
  ];

  return (
    <S.Container
      data-testid="container"
      variants={variants}
      $isOpen={isOpen}
      aria-hidden={!isOpen}
    >
      <List>
        {items.map(({ href, label, isExternal }) => (
          <Item key={href} href={href} tabIndex={!isOpen ? -1 : undefined}>
            {label}
            {isExternal && <RiExternalLinkLine size={16} />}
          </Item>
        ))}

        <Themes />
      </List>
    </S.Container>
  );
}
