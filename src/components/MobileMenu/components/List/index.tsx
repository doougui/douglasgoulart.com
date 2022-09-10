import * as S from './styles';

type ListProps = {
  children: React.ReactNode;
};

export function List({ children }: ListProps) {
  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  return <S.Container variants={variants}>{children}</S.Container>;
}
