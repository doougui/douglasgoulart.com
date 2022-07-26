import { Container } from 'components/Container';
import { Menu } from 'components/Menu';
import * as S from './styles';

type BaseProps = {
  children: React.ReactNode;
};

export function Base({ children }: BaseProps) {
  return (
    <S.Container>
      <Container>
        <Menu />
        <S.Content>{children}</S.Content>
      </Container>
    </S.Container>
  );
}
