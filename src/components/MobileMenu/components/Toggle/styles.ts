import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 4px;
`;

export const Button = styled.button`
  ${({ theme }) => css`
    all: unset;
    position: fixed;
    right: calc(${theme.grid.gutter} / 2);
    z-index: ${theme.layers.alwaysOnTop};
  `}
`;

export const BurgerStroke = styled(motion.span)`
  width: 2.7rem;
  height: 3px;
  border-radius: 2px;
  background-color: var(--color-text);
`;
