import { Link } from 'components/Link';
import NextLink from 'next/link';
import { RiGithubFill, RiLinkedinBoxFill, RiTwitterFill } from 'react-icons/ri';
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
        I&lsquo;m currently doing front-end and mobile development at Tecimob
        where I managed to generate value and ease the life of more than three
        thousand real estate agencies whilst improving the quality of existing
        software and creating new, valuable software from the beginning.
      </p>
      <p>
        Most of my experience comes down to working with JavaScript, TypeScript,
        React, React Native and Next.js.
      </p>

      <S.Footer>
        <NextLink href="/about" passHref>
          <Link>More about me</Link>
        </NextLink>

        <S.SocialMedia>
          <NextLink href="https://github.com/doougui" passHref>
            <a
              target="_blank"
              data-testid="github-link"
              aria-label="Douglas' GitHub"
            >
              <RiGithubFill size={24} color={theme.colors.textDark} />
            </a>
          </NextLink>

          <NextLink
            href="https://www.linkedin.com/in/douglaspigoulart/"
            passHref
          >
            <a
              target="_blank"
              data-testid="linkedin-link"
              aria-label="Douglas' Linkedin"
            >
              <RiLinkedinBoxFill size={24} color={theme.colors.textDark} />
            </a>
          </NextLink>

          <NextLink href="https://twitter.com/oDougui" passHref>
            <a
              target="_blank"
              data-testid="twitter-link"
              aria-label="Douglas' Twitter"
            >
              <RiTwitterFill size={24} color={theme.colors.textDark} />
            </a>
          </NextLink>
        </S.SocialMedia>
      </S.Footer>
    </S.Container>
  );
}
