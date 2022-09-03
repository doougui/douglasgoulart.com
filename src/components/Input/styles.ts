import styled, { css } from 'styled-components';

export const Container = styled.input`
  ${({ theme }) => css`
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
  `}
`;
