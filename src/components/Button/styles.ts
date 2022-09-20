import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

export type ContainerProps = Pick<ButtonProps, 'fullWidth'>;

const containerModifiers = {
  fullWidth: () => css`
    width: 100%;
  `,
};

export const Container = styled.button<ContainerProps>`
  ${({ theme, fullWidth }) => css`
    width: fit-content;

    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.heights.large};
    color: ${theme.colors.highlightText};
    background-color: ${theme.colors.primary};
    border-radius: ${theme.border.radius};

    padding: 1rem 4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    cursor: pointer;
    text-decoration: none;

    ${fullWidth && containerModifiers.fullWidth()};
  `}
`;
