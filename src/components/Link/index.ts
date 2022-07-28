import styled, { css } from 'styled-components';

export const Link = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    text-decoration: none;
    font-size: ${theme.font.sizes.medium};
  `}
`;
