import styled, { css } from 'styled-components';

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    line-height: ${theme.font.heights.xxlarge};
    color: ${theme.colors.text};
    font-weight: ${theme.font.weights.bold};
  `}
`;
