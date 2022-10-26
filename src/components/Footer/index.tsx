import React from 'react';
import { Button } from 'components/Button';
import { useData } from 'hooks/useData';
import Link from 'next/link';
import { RiSpotifyFill } from 'react-icons/ri';
import { useTheme } from 'styled-components';
import { NowPlayingResponse } from 'pages/api/spotify/nowPlaying';
import * as S from './styles';

export function Footer() {
  const theme = useTheme();

  const { data: song } = useData<NowPlayingResponse>('/api/spotify/nowPlaying');

  return (
    <S.Container>
      <S.SongPlaying>
        <RiSpotifyFill size={24} color={theme.colors.text} />

        <span>
          {song?.isPlaying ? (
            <>
              Now playing:{' '}
              <S.NowPlaying>
                {song.artist} - {song.title}
              </S.NowPlaying>
            </>
          ) : (
            <>
              Spotify: <S.NowPlaying>Nothing playing</S.NowPlaying>
            </>
          )}
        </span>
      </S.SongPlaying>

      <S.Links>
        <section>
          <S.Title>Navigation</S.Title>

          <S.Nav>
            <Link href="/" passHref>
              <S.Link>Home</S.Link>
            </Link>

            <Link href="/about" passHref>
              <S.Link>About</S.Link>
            </Link>

            <Link href="/writings" passHref>
              <S.Link>Writings</S.Link>
            </Link>

            <Link href="/guestbook" passHref>
              <S.Link>Guestbook</S.Link>
            </Link>
          </S.Nav>
        </section>

        <section>
          <S.Title>Social</S.Title>

          <S.Nav>
            <Link href="https://github.com/doougui" passHref>
              <S.Link target="_blank">GitHub</S.Link>
            </Link>

            <Link href="https://www.linkedin.com/in/douglaspigoulart/" passHref>
              <S.Link target="_blank">Linkedin</S.Link>
            </Link>

            <Link href="https://twitter.com/oDougui" passHref>
              <S.Link target="_blank">Twitter</S.Link>
            </Link>

            <Link href="mailto:douglaspigoulart@gmail.com" passHref>
              <S.Link target="_blank">E-mail</S.Link>
            </Link>
          </S.Nav>
        </section>

        <section>
          <S.Title>Extras</S.Title>

          <S.Nav>
            <Link href="./" passHref>
              <S.Link target="_blank">Newsletter</S.Link>
            </Link>

            <Link href="./" passHref>
              <S.Link target="_blank">Resume</S.Link>
            </Link>

            <Link href="https://gitlab.com/douglaspigoulart" passHref>
              <S.Link target="_blank">GitLab</S.Link>
            </Link>
          </S.Nav>
        </section>

        <S.Newsletter>
          <S.Title>Newsletter</S.Title>
          <S.Description>
            Get new articles delivered to your inbox!
          </S.Description>

          <S.InputWrapper>
            <S.SubscribeInput placeholder="johndoe@email.com" />
            <Button>Subscribe</Button>
          </S.InputWrapper>
        </S.Newsletter>
      </S.Links>

      <S.Copyright>© 2022 Douglas Pinheiro Goulart</S.Copyright>
    </S.Container>
  );
}
