import { NewsletterForm } from 'components/NewsletterForm';
import { NowPlayingSpotify } from 'components/NowPlayingSpotify';
import Link from 'next/link';
import * as S from './styles';

export function Footer() {
  return (
    <S.Container>
      <NowPlayingSpotify />

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

            <Link href="mailto:douglaspigoulart@gmail.com" passHref>
              <S.Link target="_blank">E-mail</S.Link>
            </Link>
          </S.Nav>
        </section>

        <section>
          <S.Title>Extras</S.Title>

          <S.Nav>
            <Link
              href="https://docs.google.com/document/d/1OMPOxln39V26w3WmIqssCx_gaGmLPs2FaN34HC-Mn-Q/edit?usp=sharing"
              passHref
            >
              <S.Link target="_blank">Resume</S.Link>
            </Link>

            <Link href="https://gitlab.com/douglaspigoulart" passHref>
              <S.Link target="_blank">GitLab</S.Link>
            </Link>

            <Link href="./rss.xml" passHref>
              <S.Link target="_blank">RSS Feed</S.Link>
            </Link>
          </S.Nav>
        </section>

        <S.Newsletter>
          <S.Title>Newsletter</S.Title>
          <S.Description>
            Get new writings delivered to your inbox!
          </S.Description>

          <NewsletterForm />
        </S.Newsletter>
      </S.Links>

      <S.Copyright>
        © {new Date().getFullYear()} Douglas Pinheiro Goulart
      </S.Copyright>
    </S.Container>
  );
}
