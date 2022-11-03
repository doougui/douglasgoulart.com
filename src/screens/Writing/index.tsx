import React from 'react';
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from 'components/Headings';
import { Link } from 'components/Link';
import { MutedText } from 'components/MutedText';
import { SyntaxHighlighter } from 'components/SyntaxHighlighter';
import { Base } from 'layouts/Base';
import { getMDXComponent } from 'mdx-bundler/client';
import NextLink from 'next/link';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import { Writing as WritingType } from 'types/Writing';
import * as S from './styles';
import { Comments } from './components/Comments';

export type WritingProps = {
  code: string;
  frontmatter: WritingType;
};

export function Writing({ code, frontmatter }: WritingProps) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  function renderTags() {
    const joinedTags = frontmatter.tags.split(',').map((tag, index) => (
      <React.Fragment key={tag}>
        {index > 0 && ', '}
        <NextLink href={{ pathname: '/writings', query: { tag } }} passHref>
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

        {frontmatter.cover && (
          <div>
            <S.Cover
              src={frontmatter.cover.url}
              alt={frontmatter.cover.alt}
              width={900}
              height={0}
            />
            {frontmatter.cover?.caption && (
              <S.Caption
                dangerouslySetInnerHTML={{ __html: frontmatter.cover.caption }}
              />
            )}
          </div>
        )}

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
              LiteYouTubeEmbed,
            }}
          />
        </S.Content>

        <S.RelatedTopics>Related topics: {renderTags()}.</S.RelatedTopics>

        <Comments />
      </article>
    </Base>
  );
}
