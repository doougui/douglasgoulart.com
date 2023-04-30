import styled, { css } from 'styled-components';
import NextLink from 'next/link';

export const Link = styled(NextLink)`
  text-decoration: none;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    padding: 1.5rem;
    background-color: var(--color-background);
    border-radius: ${theme.border.radius};
    cursor: pointer;

    color: var(--color-text);

    &:hover {
      background-color: var(--color-secondary);
    }
  `}
`;

export const Accomplishments = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.heights.large};
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 2rem;
  `}
`;

export const Accomplishment = styled.li`
  position: relative;
  padding-left: 3rem;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    display: block;
    background: var(--color-primary);
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const Stack = styled.span`
  ${({ theme }) => css`
    display: block;
    margin-top: 1.5rem;
    color: var(--color-text);
    font-size: ${theme.font.sizes.xsmall};
    line-height: ${theme.font.heights.large};
  `}
`;
