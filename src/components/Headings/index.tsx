import styled, { css } from 'styled-components';

const Heading = css`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-weight: ${theme.font.weights.bold};
  `}
`;

export const Heading1 = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    line-height: ${theme.font.heights.xxlarge};
    ${Heading};
  `}
`;

export const Heading2 = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    line-height: ${theme.font.heights.xlarge};
    ${Heading};
  `}
`;

export const Heading3 = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    line-height: ${theme.font.heights.large};
    ${Heading};
  `}
`;
