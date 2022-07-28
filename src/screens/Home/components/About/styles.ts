import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    line-height: ${theme.font.heights.medium};

    p {
      font-size: ${theme.font.sizes.medium};
      line-height: ${theme.font.heights.large};
      margin-bottom: 3rem;
    }
  `}
`;
