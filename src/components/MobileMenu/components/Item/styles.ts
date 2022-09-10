import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Container = styled(motion.li)`
  ${({ theme }) => css`
    padding-bottom: 2rem;
    padding-top: 2rem;
    border-bottom: 1px solid ${theme.colors.textDarker};
  `}
`;

export const LinkText = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.heights.medium};
    text-decoration: none;
  `}
`;
