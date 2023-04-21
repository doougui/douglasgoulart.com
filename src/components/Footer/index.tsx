import { NewsletterForm } from 'components/NewsletterForm';
import { NowPlayingSpotify } from 'components/NowPlayingSpotify';
import * as S from './styles';

export function Footer() {
  return (
    <S.Container>
      <NowPlayingSpotify />

      <S.Links>
        <section>
          <S.Title>Navigation</S.Title>

          <S.Nav>
            <S.Link href="/">Home</S.Link>
            <S.Link href="/about">About</S.Link>
            <S.Link href="/writings">Writings</S.Link>
          </S.Nav>
        </section>

        <section>
          <S.Title>Social</S.Title>

          <S.Nav>
            <S.Link href="https://github.com/doougui" target="_blank">
              GitHub
            </S.Link>

            <S.Link
              href="https://www.linkedin.com/in/douglaspigoulart/"
              target="_blank"
            >
              Linkedin
            </S.Link>

            <S.Link href="mailto:douglaspigoulart@gmail.com" target="_blank">
              E-mail
            </S.Link>
          </S.Nav>
        </section>

        <section>
          <S.Title>Extras</S.Title>

          <S.Nav>
            <S.Link href="https://github.com/doougui/resume" target="_blank">
              Resume
            </S.Link>

            <S.Link href="https://gitlab.com/douglaspigoulart" target="_blank">
              GitLab
            </S.Link>

            <S.Link href="./rss.xml" target="_blank">
              RSS Feed
            </S.Link>
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
