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

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SocialMedia = styled.div`
  display: flex;
  gap: 1rem;
`;
