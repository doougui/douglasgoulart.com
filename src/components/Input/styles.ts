import styled, { css } from 'styled-components';

type ContainerProps = {
  hasError: boolean;
};

const containerModifiers = {
  hasError: () => css`
    border: 1px solid var(--color-danger);
  `,
};

export const Container = styled.input<ContainerProps>`
  ${({ theme, hasError }) => css`
    all: unset;
    width: 100%;
    font-size: ${theme.font.sizes.medium};
    background: var(--color-tertiary);
    padding: 1.2rem 1.5rem;
    border-radius: ${theme.border.radius};
    color: var(--color-text);

    &::placeholder {
      color: var(--color-textDark);
    }

    ${hasError && containerModifiers.hasError()};
  `}
`;
