import styled, { css } from 'styled-components';
import NextLink from 'next/link';

export const Container = styled.div`
  ${({ theme }) => css`
    font-family: Poppins;
    font-weight: ${theme.font.weights.bold};
    font-size: ${theme.font.sizes.xxlarge};
    color: var(--color-text);
  `}
`;

export const Dot = styled.span`
  color: var(--color-primary);
`;

export const Link = styled(NextLink)`
  text-decoration: none;
`;
