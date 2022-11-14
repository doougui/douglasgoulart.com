import styled, { css } from 'styled-components';
import NextLink from 'next/link';

export const Container = styled.div`
  ${({ theme }) => css`
    font-family: Poppins;
    font-weight: ${theme.font.weights.bold};
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.text};
  `}
`;

export const Dot = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`;

export const Link = styled(NextLink)`
  text-decoration: none;
`;
