import { Heading2, Heading3 } from 'components/Headings';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { MutedText } from 'components/MutedText';
import { SyntaxHighlighter } from 'components/SyntaxHighlighter';
import { Base } from 'layouts/Base';
import { getMDXComponent } from 'mdx-bundler/client';
import NextLink from 'next/link';
import { WritingProps as WritingPageProps } from 'pages/writing/[slug]';
import React from 'react';
import * as S from './styles';

type WritingProps = WritingPageProps;

export function Writing({ code, frontmatter }: WritingProps) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  function renderTags() {
    const joinedTags = frontmatter.tags.split(',').map((tag, index) => (
      <>
        {index > 0 && ', '}
        <NextLink href={`./topics/${tag.toLowerCase()}`} passHref>
          <Link>{tag}</Link>
        </NextLink>
      </>
    ));

    return joinedTags;
  }

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
          <Component
            components={{
              a: Link,
              h2: Heading2,
              h3: Heading3,
              pre: SyntaxHighlighter,
            }}
          />
        </S.Content>

        <S.RelatedTopics>
          <>Related topics: {renderTags()}.</>
        </S.RelatedTopics>
      </article>
    </Base>
  );
}
