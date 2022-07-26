import styled, { css } from 'styled-components';

export const Container = styled.h1`
  ${({ theme }) => css`
    font-family: Poppins;
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.text};
  `}
`;

export const Dot = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`;
