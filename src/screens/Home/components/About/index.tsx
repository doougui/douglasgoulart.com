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
        I&lsquo;m a UI developer based in Barcelona. I&lsquo;m interested in
        design systems, web3, user/dev experience and under engineering.
      </p>
      <p>
        I&lsquo;m currently doing UI/DX at Rainbow to help create the
        world&lsquo;s friendliest wallet.
      </p>
      <p>
        Previously, I worked at Modulz. Where I co-created Radix, designed the
        Stitches API and led the developer community.
      </p>

      <S.Footer>
        <NextLink href="/about" passHref>
          <Link>More about me</Link>
        </NextLink>

        <S.SocialMedia>
          <NextLink href="https://github.com/doougui" passHref>
            <a target="_blank">
              <RiGithubFill size={24} color={theme.colors.textDark} />
            </a>
          </NextLink>

          <NextLink
            href="https://www.linkedin.com/in/douglaspigoulart/"
            passHref
          >
            <a target="_blank">
              <RiLinkedinBoxFill size={24} color={theme.colors.textDark} />
            </a>
          </NextLink>

          <NextLink href="https://twitter.com/oDougui" passHref>
            <a target="_blank">
              <RiTwitterFill size={24} color={theme.colors.textDark} />
            </a>
          </NextLink>
        </S.SocialMedia>
      </S.Footer>
    </S.Container>
  );
}
