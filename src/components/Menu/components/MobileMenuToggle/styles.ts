import { motion } from 'framer-motion';
import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled(motion.nav)`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;

  ${media.greaterThan('medium')`
    display: none;
  `}
`;

export const BurgerStroke = styled(motion.span)`
  width: 2.7rem;
  height: 3px;
  border-radius: 2px;
  background-color: white;
`;
