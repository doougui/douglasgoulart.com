import styled, { css } from 'styled-components';

export const Introduction = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    line-height: ${theme.font.sizes.small};
    color: ${theme.colors.text};
  `}
`;

export const Role = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    line-height: ${theme.font.heights.xxlarge};
    color: ${theme.colors.text};
    font-weight: ${theme.font.weights.normal};
  `}
`;

export const Description = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    line-height: ${theme.font.sizes.small};
    color: ${theme.colors.textDark};
    margin-top: 2px;
  `}
`;
