import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    padding: 1.5rem;
    background-color: ${theme.colors.background};
    border-radius: ${theme.border.radius};
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.secondary};
    }
  `}
`;

export const ImageBox = styled.div`
  ${({ theme }) => css`
    width: 8rem;
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
