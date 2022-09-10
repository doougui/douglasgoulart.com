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

  return (
    <S.Container
      data-testid="container"
      variants={variants}
      $isOpen={isOpen}
      aria-hidden={!isOpen}
    >
      <List>
        <Item href="/">Home</Item>
        <Item href="/about">About</Item>
        <Item href="/writings">Writings</Item>
        <Item href="/guestbook">Guestbook</Item>
      </List>
    </S.Container>
  );
}
