import { Link } from 'components/Link';
import NextLink from 'next/link';
import { RiGithubFill, RiLinkedinBoxFill, RiMailFill } from 'react-icons/ri';
import * as S from './styles';

export function About() {
  return (
    <S.Container>
      <p>
        Hi, I&apos;m Douglas — a software engineer based in Brazil who enjoys
        building impactful products and writing about things I learn along my
        journey in tech.
      </p>
      <p>
        I currently work on an enterprise Health & Safety platform serving the
        New Zealand and Australia markets, where I collaborate closely with
        product and design teams to deliver scalable, user-centered solutions.
        I&apos;ve contributed to modernizing the frontend architecture, leading
        feature development, and continuously improving code quality and team
        processes.
      </p>
      <p>
        Most of my experience revolves around TypeScript, React, Next.js, and
        modern frontend architecture, with a strong focus on building
        maintainable and high-performing applications.
      </p>

      <S.Footer>
        <Link href="/about">More about me</Link>

        <S.SocialMedia>
          <NextLink
            href="https://github.com/doougui"
            target="_blank"
            aria-label="Douglas' GitHub"
          >
            <S.SocialMediaIcon as={RiGithubFill} size={24} />
          </NextLink>

          <NextLink
            href="https://www.linkedin.com/in/douglaspigoulart/"
            target="_blank"
            aria-label="Douglas' Linkedin"
          >
            <S.SocialMediaIcon as={RiLinkedinBoxFill} size={24} />
          </NextLink>

          <NextLink
            href="mailto:douglaspigoulart@gmail.com"
            target="_blank"
            aria-label="Douglas' E-mail"
          >
            <S.SocialMediaIcon as={RiMailFill} size={24} />
          </NextLink>
        </S.SocialMedia>
      </S.Footer>
    </S.Container>
  );
}
