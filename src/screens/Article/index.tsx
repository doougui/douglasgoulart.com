import { Heading2 } from 'components/Headings';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { MutedText } from 'components/MutedText';
import { Base } from 'layouts/Base';
import NextLink from 'next/link';
import * as S from './styles';

export function Article() {
  return (
    <Base>
      <article>
        <S.Heading>
          <S.Title>Lorem ipsum dolor sit amet.</S.Title>
          <MutedText>Published at: April 26, 2021 · 11 min read.</MutedText>
        </S.Heading>

        <Image
          src="https://picsum.photos/1000"
          alt="Name"
          width={1000}
          height={600}
          quality={75}
          // placeholder="blur"
        />

        <S.Content>
          <p>
            When I was building this blog, my biggest priority was to find a
            solution that would let me embed totally custom content in each
            post, like this exploding-logo animation thing. When using markdown
            or a rich-text editor in a CMS, it&apos;s not at all clear how to do
            this: you&lsquo;re generally limited to the handful of HTML elements
            that these tools can render to.
          </p>

          <p>
            In this article, I&apos;m going to break down how my blog works, so
            that you can build something similar for yourself. I&apos;ll also
            cover all the most-commonly-asked questions I&apos;ve gotten over
            the years. It&apos;s not a tutorial, but it should give you a broad
            roadmap to follow.
          </p>

          <Heading2>The stack</Heading2>

          <p>This blog is a Next.js application.</p>

          <p>
            With Next, you have a few different options when it comes to page
            rendering: you can choose to do it “on-demand” (server-side
            rendering) or ahead of time (static site generation). I&apos;ve
            opted to build all the blog posts ahead of time, when the site is
            generated.
          </p>

          <p>
            I also use Next&apos;s API Routes for things that require
            persistence in the backend. I use MongoDB as my database, to store
            stuff like the # of likes each post has.
          </p>

          <p>
            I deploy this blog on Vercel. I initially chose them because
            they&apos;re the company behind Next.js, and I figured it would be
            well-optimized. Honestly, their platform is awesome. I wound up
            moving some of my non-Next projects there as well.
          </p>

          <p>
            When it comes to the styling, I use styled-components, and write all
            the styles from scratch. I don&apos;t use any &quot;cosmetic&quot;
            libraries like Bootstrap (and I don&apos;t think you should either).
            I do use Reach UI for things like modals, though.
          </p>

          <p>
            For animation, I mainly rely on React Spring, though I&apos;ve
            started dabbling with Framer Motion recently.
          </p>

          <p>But the most critical part of my stack is MDX.</p>
        </S.Content>

        <S.RelatedTopics>
          Related topics:{' '}
          <NextLink href="./" passHref>
            <Link>React</Link>
          </NextLink>
          ,{' '}
          <NextLink href="./" passHref>
            <Link>JavaScript</Link>
          </NextLink>
          ,{' '}
          <NextLink href="./" passHref>
            <Link>TypeScript</Link>
          </NextLink>
          .
        </S.RelatedTopics>
      </article>
    </Base>
  );
}
