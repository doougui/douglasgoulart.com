import React from 'react';
import { Container } from 'components/Container';
import { Footer } from 'components/Footer';
import { Menu } from 'components/Menu';
import * as S from './styles';

type BaseProps = {
  children: React.ReactNode;
};

export function Base({ children }: BaseProps) {
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <S.Container>
      <Container>
        <Menu />
        <S.Content>{children}</S.Content>
        <Footer />
      </Container>
    </S.Container>
  );
}
