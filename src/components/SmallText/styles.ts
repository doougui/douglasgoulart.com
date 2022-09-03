import styled, { css } from 'styled-components';

export const Container = styled.small`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    line-height: ${theme.font.sizes.small};
    color: ${theme.colors.textDark};
    margin-top: 2px;
  `}
`;
