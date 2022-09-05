import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.section`
  display: flex;
  align-items: center;
  gap: 3rem;

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`;

export const ImageBox = styled.div`
  ${({ theme }) => css`
    max-width: 20rem;
    height: 20rem;
    border-radius: ${theme.border.radius};
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `}
`;

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.heights.large};
    color: ${theme.colors.text};
  `}
`;
