import { GetStaticPaths, GetStaticProps } from 'next';
import { ArticleJsonLd, NextSeo } from 'next-seo';
import { parse } from 'date-fns';
import { Writing as WritingScreen, WritingProps } from 'screens/Writing';
import { getFileBySlug } from 'utils/mdx/getFileBySlug';
import { getFiles } from 'utils/mdx/getFiles';
import { getAbsoluteUrl } from 'utils/shared/get-absolute-url';
import { getPageUrl } from 'utils/shared/get-page-url';

export default function Writing({ code, frontmatter }: WritingProps) {
  const getIsoStringDate = (date: string) => {
    return parse(date, 'yyyy-MM-dd', new Date()).toISOString();
  };

  return (
    <>
      <NextSeo
        title={`${frontmatter.title} | Douglas Pinheiro Goulart`}
        description={frontmatter.excerpt}
        canonical={getPageUrl()}
        openGraph={{
          title: `${frontmatter.title} | Douglas Pinheiro Goulart`,
          description: frontmatter.excerpt,
          images: frontmatter.cover
            ? [
                {
                  url: `${getAbsoluteUrl()}${frontmatter.cover?.url}`,
                  alt: frontmatter.cover?.alt,
                },
              ]
            : undefined,
        }}
      />
      <ArticleJsonLd
        url={getPageUrl()}
        title={frontmatter.title}
        images={[`${getAbsoluteUrl()}${frontmatter.cover?.url}`]}
        datePublished={getIsoStringDate(frontmatter.publishedAt)}
        dateModified={getIsoStringDate(frontmatter.publishedAt)}
        authorName={[
          {
            name: 'Douglas Pinheiro Goulart',
            url: getAbsoluteUrl(),
          },
        ]}
        publisherName="Douglas Pinheiro Goulart"
        publisherLogo={`${getAbsoluteUrl()}img/icon-512.png`}
        description={frontmatter.excerpt}
        isAccessibleForFree={true}
      />
      <WritingScreen code={code} frontmatter={frontmatter} />
    </>
  );
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
