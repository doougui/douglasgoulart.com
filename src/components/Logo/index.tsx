import * as S from './styles';

export function Logo() {
  return (
    <S.Link href="/">
      <S.Container data-testid="logo">
        Douglas<S.Dot>.</S.Dot>
      </S.Container>
    </S.Link>
  );
}
