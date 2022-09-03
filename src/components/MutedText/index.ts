import styled, { css } from 'styled-components';

export const MutedText = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.heights.large};
    color: ${theme.colors.textDark};
  `}
`;
