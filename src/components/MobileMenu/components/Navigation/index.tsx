import { Item } from '../Item';
import { List } from '../List';
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
    { href: '/writings', label: 'Writings' },
    // { href: '/guestbook', label: 'Guestbook' },
  ];

  return (
    <S.Container
      data-testid="container"
      variants={variants}
      $isOpen={isOpen}
      aria-hidden={!isOpen}
    >
      <List>
        {items.map(({ href, label }) => (
          <Item href={href} tabIndex={!isOpen ? -1 : undefined}>
            {label}
          </Item>
        ))}
      </List>
    </S.Container>
  );
}
