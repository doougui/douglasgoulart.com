import React from 'react';
import { Writing as WritingScreen } from 'screens/Writing';
import { ReadTimeResults } from 'reading-time';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getFiles } from 'utils/mdx/getFiles';
import { getFileBySlug } from 'utils/mdx/getFileBySlug';

export type BlogFrontmatter = {
  wordCount: number;
  readingTime: ReadTimeResults;
  slug: string;
  englishOnly?: boolean;
  title: string;
  description: string;
  banner: string;
  publishedAt: string;
  lastUpdated?: string;
  tags: string;
};

export type WritingProps = {
  code: string;
  frontmatter: BlogFrontmatter;
};

export default function Writing({ code, frontmatter }: WritingProps) {
  return <WritingScreen code={code} frontmatter={frontmatter} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles('writings');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug || Array.isArray(params.slug)) {
    return { notFound: true };
  }

  const post = await getFileBySlug('writings', params.slug);

  return {
    props: { ...post },
  };
};
