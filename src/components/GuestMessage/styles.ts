import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const Message = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.heights.large};
    color: var(--color-text);
  `}
`;

export const Infos = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.heights.large};
    margin-top: 1rem;

    display: flex;
    justify-content: space-between;
  `}
`;

export const Author = styled.p`
  color: var(--color-textDark);
`;

export const Date = styled.p`
  color: var(--color-textDarker);
`;
