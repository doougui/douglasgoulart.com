import styled, { css, DefaultTheme } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    background: ${theme.colors.tertiary};
    display: flex;
    padding: 5px;
    gap: 5px;
  `}
`;

type ToggleProps = {
  isActive: boolean;
};

const toggleModifiers = {
  isActive: (theme: DefaultTheme) => css`
    background: ${theme.colors.textDarker};
  `,
};

export const Toggle = styled.div<ToggleProps>`
  ${({ theme, isActive }) => css`
    width: 3rem;
    height: 3rem;
    padding: 5px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${theme.border.radius};
    background: ${theme.colors.tertiary};
    transition: background-color ${theme.transition.fast};

    &:hover {
      background: ${theme.colors.secondary};
    }

    ${isActive && toggleModifiers.isActive(theme)};
  `}
`;
