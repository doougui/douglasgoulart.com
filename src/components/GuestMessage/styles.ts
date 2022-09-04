import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const Message = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.heights.large};
    color: ${theme.colors.text};
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
  ${({ theme }) => css`
    color: ${theme.colors.textDark};
  `}
`;

export const Date = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.textDarker};
  `}
`;
