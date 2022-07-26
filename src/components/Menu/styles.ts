import styled, { css } from 'styled-components';

export const Container = styled.menu`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuNav = styled.nav`
  gap: 3rem;
`;

export const MenuLink = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    text-decoration: none;
    color: ${theme.colors.text};
    padding: 0 1.5rem;
  `}
`;
