import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    margin-top: 5rem;
    padding-top: 3rem;
    border-top: 1px solid ${theme.colors.tertiary};
  `}
`;

export const SongPlaying = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    color: ${theme.colors.text};
    font-size: ${theme.font.sizes.medium};
  `}
`;

export const NowPlaying = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-weight: ${theme.font.weights.bold};
  `}
`;

export const Links = styled.menu`
  display: flex;
  gap: 8rem;
  margin-top: 2.5rem;
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.weights.normal};
    margin-bottom: 1.5rem;
  `}
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Link = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.textDark};
    font-size: ${theme.font.sizes.medium};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  `}
`;
