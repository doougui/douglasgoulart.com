import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const Company = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
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
  ${({ theme }) => css`
    position: relative;
    padding-left: 3rem;

    &::before {
      content: '';
      width: 8px;
      height: 8px;
      border-radius: 50%;
      display: block;
      background: ${theme.colors.primary};
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  `}
`;
