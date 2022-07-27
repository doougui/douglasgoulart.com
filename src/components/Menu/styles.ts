import styled, { css, DefaultTheme } from 'styled-components';

export const Container = styled.menu`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuNav = styled.nav`
  gap: 3rem;
`;

type MenuLinkProps = {
  active: boolean;
};

const menuLinkModifiers = {
  active: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary};
  `,
};

export const MenuLink = styled.a<MenuLinkProps>`
  ${({ theme, active }) => css`
    font-size: ${theme.font.sizes.medium};
    text-decoration: none;
    color: ${theme.colors.text};
    padding: 0 1.5rem;

    ${active && menuLinkModifiers.active(theme)};
  `}
`;
