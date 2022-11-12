import styled, { css } from 'styled-components';
import NextLink from 'next/link';

export const Link = styled(NextLink)`
  text-decoration: none;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    padding: 1.5rem;
    background-color: ${theme.colors.background};
    border-radius: ${theme.border.radius};
    cursor: pointer;

    display: flex;
    align-items: center;
    gap: 1.5rem;

    text-decoration: none;

    &:hover {
      background-color: ${theme.colors.secondary};
    }
  `}
`;

export const ImageBox = styled.div`
  ${({ theme }) => css`
    width: 8rem;
    min-width: 8rem;
    height: 8rem;
    border-radius: ${theme.border.radius};
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `}
`;

const Text = styled.span`
  display: block;
`;

export const Title = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.heights.medium};
  `}
`;

export const Excerpt = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.colors.textDark};
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.heights.medium};
  `}
`;

export const Date = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.colors.textDarker};
    font-size: ${theme.font.sizes.xsmall};
    line-height: ${theme.font.heights.xsmall};
  `}
`;
