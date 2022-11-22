import styled, { css } from 'styled-components';
import NextLink from 'next/link';
import media from 'styled-media-query';

export const Container = styled.footer`
  margin-top: 5rem;
  padding-top: 3rem;
  border-top: 1px solid var(--color-tertiary);
  background: var(--color-background);
`;

export const Links = styled.menu`
  display: flex;
  flex-wrap: wrap;
  gap: 8rem;
  margin-top: 2.5rem;

  ${media.lessThan('medium')`
    gap: 4rem;
  `}
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    color: var(--color-text);
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.heights.large};
    font-weight: ${theme.font.weights.normal};
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: var(--color-textDark);
  `}
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

export const Link = styled(NextLink)`
  ${({ theme }) => css`
    color: var(--color-textDark);
    font-size: ${theme.font.sizes.medium};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  `}
`;

export const Copyright = styled.p`
  ${({ theme }) => css`
    color: var(--color-text);
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.heights.large};
    margin-top: 3rem;
  `}
`;

export const Newsletter = styled.section`
  flex: 1;
`;
