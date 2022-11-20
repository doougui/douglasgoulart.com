import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const Company = styled.span`
  color: var(--color-primary);
`;

export const Responsabilities = styled.ul`
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

export const Responsability = styled.li`
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
