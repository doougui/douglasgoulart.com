import { generateRssFeed } from 'lib/generateRssFeed';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { Home as HomeScreen, HomeProps } from 'screens/Home';
import { getWritings } from 'utils/mdx/writings/getWritings';
import { getPageUrl } from 'utils/shared/get-page-url';

export default function Home(props: HomeProps) {
  return (
    <>
      <NextSeo
        title="Home | Douglas Pinheiro Goulart"
        description="Full-stack software developer based in Brazil and focused on web solutions"
        canonical={getPageUrl()}
        openGraph={{
          title: 'Home | Douglas Pinheiro Goulart',
          description:
            'Full-stack software developer based in Brazil and focused on web solutions',
        }}
      />
      <HomeScreen {...props} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const files = await getWritings({
    max: 3,
  });

  if (process.env.NODE_ENV !== 'development') {
    await generateRssFeed();
  }

  return {
    props: {
      featuredWritings: files,
    },
  };
};
