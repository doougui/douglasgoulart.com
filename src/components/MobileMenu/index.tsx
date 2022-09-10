import { useCycle } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { Toggle } from './components/Toggle';
import * as S from './styles';

export function MobileMenu() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <S.Container
      data-testid="container"
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
    >
      <Navigation isOpen={isOpen} />
      <Toggle toggle={() => toggleOpen()} />
    </S.Container>
  );
}
