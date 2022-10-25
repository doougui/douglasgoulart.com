import styled, { css } from 'styled-components';

export const Container = styled.div`
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

export const Link = styled.a`
  text-decoration: none;
`;
