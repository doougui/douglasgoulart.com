import styled, { css } from 'styled-components';

export const Content = styled.div`
  margin-top: 1.5rem;
`;

export const Text = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.heights.large};
    color: ${theme.colors.text};
    margin-bottom: 1.5rem;
  `}
`;
