import { GetStaticPaths, GetStaticProps } from 'next';
import { Writing as WritingScreen } from 'screens/Writing';
import { Writing as WritingType } from 'types/Writing';
import { getFileBySlug } from 'utils/mdx/getFileBySlug';
import { getFiles } from 'utils/mdx/getFiles';

export type WritingProps = {
  code: string;
  frontmatter: WritingType;
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
