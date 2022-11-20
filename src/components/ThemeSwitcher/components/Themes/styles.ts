import styled, { css } from 'styled-components';

type ToggleProps = {
  isActive: boolean;
};

const toggleModifiers = {
  isActive: () => css`
    background: var(--color-textDarker);
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
    background: var(--color-tertiary);
    transition: background-color ${theme.transition.fast};

    &:hover {
      background: var(--color-secondary);
    }

    ${isActive && toggleModifiers.isActive()};
  `}
`;
