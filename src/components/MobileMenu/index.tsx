import { useCycle } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { Toggle } from './components/Toggle';
import * as S from './styles';

export function MobileMenu() {
  const [isOpen, toggleOpen] = useCycle('closed', 'open');

  return (
    <S.Container initial="closed" animate={isOpen}>
      <Navigation isOpen={isOpen === 'open'} />
      <Toggle toggle={toggleOpen} />
    </S.Container>
  );
}
