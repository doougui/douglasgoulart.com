import styled, { css } from 'styled-components';

export const Content = styled.div`
  margin-top: 1.5rem;
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.heights.large};
    color: var(--color-text);
    margin-bottom: 1.5rem;
  `}
`;
