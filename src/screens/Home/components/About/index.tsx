import { Link } from 'components/Link';
import NextLink from 'next/link';
import { RiGithubFill, RiLinkedinBoxFill, RiMailFill } from 'react-icons/ri';
import { useTheme } from 'styled-components';
import * as S from './styles';

export function About() {
  const theme = useTheme();

  return (
    <S.Container>
      <p>
        Hi, my name is Douglas. I&apos;m a software developer based in Brazil
        that likes to play some games and write about some cool stuff I learn
        along my journey as a software dev.
      </p>
      <p>
        I&apos;m currently doing front-end and mobile development at Tecimob
        where I managed to generate value and ease the life of more than three
        thousand real estate agencies whilst improving the quality of existing
        software and creating new, valuable software from the beginning.
      </p>
      <p>
        Most of my experience comes down to working with JavaScript, TypeScript,
        React, React Native and Next.js.
      </p>

      <S.Footer>
        <Link href="/about">More about me</Link>

        <S.SocialMedia>
          <NextLink
            href="https://github.com/doougui"
            target="_blank"
            aria-label="Douglas' GitHub"
          >
            <RiGithubFill size={24} color={theme.colors.textDark} />
          </NextLink>

          <NextLink
            href="https://www.linkedin.com/in/douglaspigoulart/"
            target="_blank"
            aria-label="Douglas' Linkedin"
          >
            <RiLinkedinBoxFill size={24} color={theme.colors.textDark} />
          </NextLink>

          <NextLink
            href="mailto:douglaspigoulart@gmail.com"
            target="_blank"
            aria-label="Douglas' E-mail"
          >
            <RiMailFill size={24} color={theme.colors.textDark} />
          </NextLink>
        </S.SocialMedia>
      </S.Footer>
    </S.Container>
  );
}
