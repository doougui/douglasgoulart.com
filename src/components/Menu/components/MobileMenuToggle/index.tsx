import { useCycle } from 'framer-motion';
import * as S from './styles';

export function MobileMenuToggle() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <S.Button type="button" onClick={() => toggleOpen()}>
      <S.Container initial={false} animate={isOpen ? 'open' : 'closed'}>
        <S.BurgerStroke
          variants={{
            closed: {},
            open: { rotate: '-45deg', y: 3 },
          }}
        />
        <S.BurgerStroke
          variants={{
            closed: {},
            open: { rotate: '45deg', y: -4 },
          }}
        />
      </S.Container>
    </S.Button>
  );
}
