import NextLink from 'next/link';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.menu`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuNav = styled.nav`
  display: flex;
  align-items: center;

  ${media.lessThan('medium')`
    display: none;
  `}
`;

type MenuLinkProps = {
  $active: boolean;
};

const menuLinkModifiers = {
  active: () => css`
    color: var(--color-primary);
  `,
};

export const MenuLink = styled(NextLink)<MenuLinkProps>`
  ${({ theme, $active }) => css`
    font-size: ${theme.font.sizes.medium};
    text-decoration: none;
    color: var(--color-text);
    padding: 0 1.5rem;

    ${$active && menuLinkModifiers.active()};
  `}
`;

export const LinkContent = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;
