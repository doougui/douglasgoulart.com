import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from 'components/Headings';
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
      <React.Fragment key={tag}>
        {index > 0 && ', '}
        <NextLink href={`./topics/${tag.toLowerCase()}`} passHref>
          <Link>{tag}</Link>
        </NextLink>
      </React.Fragment>
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
            src={frontmatter.banner}
            width="100%"
            height="auto"
            layout="responsive"
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
              h1: Heading1,
              h2: Heading2,
              h3: Heading3,
              h4: Heading4,
              h5: Heading5,
              h6: Heading6,
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
