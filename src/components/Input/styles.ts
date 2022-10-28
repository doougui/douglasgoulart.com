import styled, { css, DefaultTheme } from 'styled-components';

type ContainerProps = {
  hasError: boolean;
};

const containerModifiers = {
  hasError: (theme: DefaultTheme) => css`
    border: 1px solid ${theme.colors.danger};
  `,
};

export const Container = styled.input<ContainerProps>`
  ${({ theme, hasError }) => css`
    all: unset;
    width: 100%;
    font-size: ${theme.font.sizes.medium};
    background: ${theme.colors.tertiary};
    padding: 1.2rem 1.5rem;
    border-radius: ${theme.border.radius};
    color: ${theme.colors.text};

    &::placeholder {
      color: ${theme.colors.textDark};
    }

    ${hasError && containerModifiers.hasError(theme)};
  `}
`;
