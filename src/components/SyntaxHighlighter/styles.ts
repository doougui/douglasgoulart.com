import styled, { css } from 'styled-components';

export const Pre = styled.pre`
  ${({ theme }) => css`
    text-align: left;
    margin: 1em 0;
    padding: 1rem;
    overflow-x: auto;

    & .token-line {
      font-size: ${theme.font.sizes.large}
      line-height: ${theme.font.heights.xlarge};
    }
  `}
`;
