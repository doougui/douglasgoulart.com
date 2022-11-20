import { useData } from 'hooks/useData';
import { NowPlayingResponse } from 'pages/api/spotify/nowPlaying';
import * as S from './styles';

export function NowPlayingSpotify() {
  const { data: song } = useData<NowPlayingResponse>('/api/spotify/nowPlaying');

  const renderSongPlaying = () => {
    if (song?.isPlaying) {
      return (
        <>
          Now playing:{' '}
          <S.NowPlaying>
            {song.artist} - {song.title}
          </S.NowPlaying>
        </>
      );
    }

    return (
      <>
        Spotify: <S.NowPlaying>Not Playing</S.NowPlaying>
      </>
    );
  };

  return (
    <S.Container>
      <S.SpotifyIcon size={26} $isPlaying={!!song?.isPlaying} />
      <span>{renderSongPlaying()}</span>
    </S.Container>
  );
}
