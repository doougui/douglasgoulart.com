import { RiSpotifyFill } from 'react-icons/ri';
import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    color: ${theme.colors.text};
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
  isPlaying: boolean;
};

const spotifyIconModifiers = {
  isPlaying: () => css`
    animation: ${playingSong} 0.5s alternate infinite;
  `,
};

export const SpotifyIcon = styled(RiSpotifyFill)<SpotifyIconProps>`
  ${({ isPlaying }) => css`
    ${isPlaying && spotifyIconModifiers.isPlaying()}
  `}
`;

export const NowPlaying = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-weight: ${theme.font.weights.bold};
  `}
`;
