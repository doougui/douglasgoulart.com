import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { Image as NextImage } from 'components/Image';

export const Container = styled.section`
  display: flex;
  align-items: center;
  gap: 3rem;

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`;

export const Image = styled(NextImage)`
  ${({ theme }) => css`
    width: 20rem;
    height: auto;
    border-radius: ${theme.border.radius};
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
    color: var(--color-text);
  `}
`;
