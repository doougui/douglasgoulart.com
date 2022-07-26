import { Container } from 'components/Container';
import { Header } from 'components/Header';
import * as S from './styles';

type BaseProps = {
  children: React.ReactNode;
};

export function Base({ children }: BaseProps) {
  return (
    <Container>
      <Header />
      <S.Wrapper>{children}</S.Wrapper>
    </Container>
  );
}
