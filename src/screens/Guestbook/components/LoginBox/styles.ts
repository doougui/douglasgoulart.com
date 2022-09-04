import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    padding: 3rem;
    background-color: ${theme.colors.secondary};
    border-radius: ${theme.border.radius};
    margin-top: 2rem;
  `}
`;

export const Actions = styled.div`
  margin-top: 2rem;
`;

export const InformationUsage = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.textDarker};
    font-size: ${theme.font.sizes.xsmall};
    margin-top: 1rem;
  `}
`;
