import { Input } from 'components/Input';
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
    line-height: ${theme.font.heights.large};
    font-weight: ${theme.font.weights.normal};
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.textDark};
  `}
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
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

export const Copyright = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.heights.large};
    margin-top: 3rem;
  `}
`;

export const Newsletter = styled.section`
  flex: 1;
`;

export const InputWrapper = styled.div`
  display: flex;
  margin-top: 1rem;

  button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;

export const SubscribeInput = styled(Input)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;
