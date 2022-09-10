import { motion } from 'framer-motion';
import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled(motion.div)`
  display: flex;
  align-items: center;

  ${media.greaterThan('medium')`
    display: none;
  `}
`;
