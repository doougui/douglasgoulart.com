import styled, { css } from 'styled-components';
import NextLink from 'next/link';

export const Link = styled(NextLink)`
  ${({ theme }) => css`
    color: var(--color-primary);
    text-decoration: none;
    font-size: ${theme.font.sizes.medium};
  `}
`;
