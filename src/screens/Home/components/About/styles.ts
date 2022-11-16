import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    line-height: ${theme.font.heights.medium};

    p {
      font-size: ${theme.font.sizes.medium};
      line-height: ${theme.font.heights.large};
      margin-bottom: 3rem;
    }
  `}
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SocialMedia = styled.div`
  display: flex;
  gap: 1rem;

  a {
    height: 24px;
  }
`;
