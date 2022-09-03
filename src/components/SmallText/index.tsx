import * as S from './styles';

export type SmallTextProps = {
  children: React.ReactNode;
};

export function SmallText({ children }: SmallTextProps) {
  return <S.Container>{children}</S.Container>;
}
