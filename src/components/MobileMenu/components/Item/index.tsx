import * as S from './styles';

type ItemProps = {
  href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function Item({ href, children, ...props }: ItemProps) {
  const variants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        x: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      x: 200,
      opacity: 0,
      transition: {
        x: { stiffness: 1000 },
      },
    },
  };

  return (
    <S.Container variants={variants}>
      <S.MenuLink href={href} {...props}>
        <S.LinkText>{children}</S.LinkText>
      </S.MenuLink>
    </S.Container>
  );
}
