import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import NextLink from 'next/link';

export const Container = styled(motion.li)`
  padding-bottom: 2rem;
  padding-top: 2rem;
  border-bottom: 1px solid var(--color-textDarker);
`;

export const MenuLink = styled(NextLink)`
  ${({ theme }) => css`
    color: var(--color-text);
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.heights.medium};
    text-decoration: none;
  `}
`;

export const LinkText = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 7px;
`;
