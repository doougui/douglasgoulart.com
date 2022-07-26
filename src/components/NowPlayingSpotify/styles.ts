import { RiSpotifyFill } from 'react-icons/ri';
import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    color: var(--color-text);
    font-size: ${theme.font.sizes.medium};
  `}
`;

const playingSong = keyframes`
  0% { transform: scale(1); }
  30% { transform: scale(1.1); }
  50% { transform: scale(1); }
  50% { transform: scale(0.97); }
  80% { transform: scale(1.1); }
  100% { transform: scale(1.05); }
`;

type SpotifyIconProps = {
  $isPlaying: boolean;
};

const spotifyIconModifiers = {
  isPlaying: () => css`
    animation: ${playingSong} 0.5s alternate infinite;
  `,
};

export const SpotifyIcon = styled(RiSpotifyFill)<SpotifyIconProps>`
  ${({ $isPlaying }) => css`
    color: var(--color-text);
    ${$isPlaying && spotifyIconModifiers.isPlaying()}
  `}
`;

export const NowPlaying = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.heights.large};
    font-weight: ${theme.font.weights.bold};
  `}
`;
