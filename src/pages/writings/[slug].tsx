import { GetStaticPaths, GetStaticProps } from 'next';
import { ArticleJsonLd, NextSeo } from 'next-seo';
import { Writing as WritingScreen, WritingProps } from 'screens/Writing';
import { getWritingBySlug } from 'utils/mdx/writings/getWritingBySlug';
import { getWritingFiles } from 'utils/mdx/writings/getWritingFiles';
import { getAbsoluteUrl } from 'utils/shared/get-absolute-url';
import { getPageUrl } from 'utils/shared/get-page-url';
import { parseToDate } from 'utils/time/parse-to-date';

export default function Writing({ code, frontmatter }: WritingProps) {
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
                  secureUrl: `${getAbsoluteUrl()}${frontmatter.cover?.url}`,
                  width: 1200,
                  height: 627,
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
        datePublished={parseToDate(frontmatter.publishedAt).toISOString()}
        dateModified={
          frontmatter.modifiedAt
            ? parseToDate(frontmatter.modifiedAt).toISOString()
            : parseToDate(frontmatter.publishedAt).toISOString()
        }
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
  const writings = await getWritingFiles();

  return {
    paths: writings.map((writing) => ({
      params: {
        slug: writing.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug || Array.isArray(params.slug)) {
    return { notFound: true };
  }

  const writing = await getWritingBySlug(params.slug);

  return {
    props: { ...writing },
  };
};
