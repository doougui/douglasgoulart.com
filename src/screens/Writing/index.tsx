import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { MutedText } from 'components/MutedText';
import { Base } from 'layouts/Base';
import { getMDXComponent } from 'mdx-bundler/client';
import NextLink from 'next/link';
import { WritingProps as WritingPageProps } from 'pages/writing/[slug]';
import React from 'react';
import * as S from './styles';

type WritingProps = WritingPageProps;

export function Writing({ code, frontmatter }: WritingProps) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <Base>
      <article>
        <S.Heading>
          <S.Title>{frontmatter.title}</S.Title>
          <MutedText>
            Published at: {frontmatter.publishedAt} ·{' '}
            {frontmatter.readingTime.text}.
          </MutedText>
        </S.Heading>

        <div>
          <Image
            src="https://picsum.photos/1000"
            alt="Name"
            width={1000}
            height={600}
            quality={75}
            // placeholder="blur"
          />
          <S.Caption>
            Photo by{' '}
            <a href="./" target="_blank">
              Vlad Sargu
            </a>{' '}
            on{' '}
            <a href="./" target="_blank">
              Unsplash
            </a>
          </S.Caption>
        </div>

        <S.Content>
          <Component components={{}} />
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
