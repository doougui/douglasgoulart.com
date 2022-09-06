import { useCycle } from 'framer-motion';
import * as S from './styles';

export function MobileMenuToggle() {
  const [isOpen] = useCycle(false, true);

  return (
    <S.Container initial={false} animate={isOpen ? 'open' : 'closed'}>
      <S.BurgerStroke />
      <S.BurgerStroke />
    </S.Container>
  );
}
