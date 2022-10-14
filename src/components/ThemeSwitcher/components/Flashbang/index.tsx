import { useFlashbang } from 'components/ThemeSwitcher/contexts/flashbang-context';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import * as S from './styles';

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
  exit: { opacity: 0 },
};

export function Flashbang() {
  const { isOpen } = useFlashbang();

  return (
    <AnimatePresence>
      {isOpen && (
        <S.Container
          key="flashbang"
          $isOpen={isOpen}
          animate={isOpen ? 'open' : 'closed'}
          variants={variants}
          exit="exit"
          transition={{ duration: 0.95 }}
        />
      )}
    </AnimatePresence>
  );
}
