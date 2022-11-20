import styled, { css, DefaultTheme } from 'styled-components';
import { ButtonProps } from '.';

export type ContainerProps = Pick<ButtonProps, 'fullWidth'>;

const containerModifiers = {
  fullWidth: () => css`
    width: 100%;
  `,
  disabled: (theme: DefaultTheme) => css`
    transition: opacity ${theme.transition.default};
    opacity: 0.5;
  `,
};

export const Container = styled.button<ContainerProps>`
  ${({ theme, fullWidth, disabled }) => css`
    width: fit-content;

    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.heights.large};
    color: var(--color-highlightText);
    background-color: var(--color-primary);
    border-radius: ${theme.border.radius};

    padding: 1rem 4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    cursor: pointer;
    text-decoration: none;

    ${fullWidth && containerModifiers.fullWidth()};
    ${disabled && containerModifiers.disabled(theme)};
  `}
`;
