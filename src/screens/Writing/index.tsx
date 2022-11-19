import { Link } from 'components/Link';
import { MutedText } from 'components/MutedText';
import { MDXComponents } from 'constants/mdx';
import { Base } from 'layouts/Base';
import { getMDXComponent } from 'mdx-bundler/client';
import React from 'react';
import { Writing as WritingType } from 'types/Writing';
import { Comments } from './components/Comments';
import * as S from './styles';

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
        <Link href={{ pathname: '/writings', query: { tag } }}>{tag}</Link>
      </React.Fragment>
    ));

    return joinedTags;
  }

  return (
    <Base>
      <article itemScope itemType="https://schema.org/Article">
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
              priority
            />
            {frontmatter.cover?.caption && (
              <S.Caption
                dangerouslySetInnerHTML={{ __html: frontmatter.cover.caption }}
              />
            )}
          </div>
        )}

        <S.Content>
          <Component components={MDXComponents} />
        </S.Content>

        <S.RelatedTopics>Related topics: {renderTags()}.</S.RelatedTopics>

        <Comments />
      </article>
    </Base>
  );
}
