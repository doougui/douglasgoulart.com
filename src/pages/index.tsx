import { GetServerSideProps } from 'next';
import { NextSeo } from 'next-seo';
import { Home as HomeScreen, HomeProps } from 'screens/Home';
import { getFilesFrontmatter } from 'utils/mdx/getFilesFrontmatter';

export default function Home(props: HomeProps) {
  return (
    <>
      <NextSeo
        title="Home | Douglas Pinheiro Goulart"
        description="Front-end software developer based in Brazil and focused on web solutions"
      />
      <HomeScreen {...props} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const files = await getFilesFrontmatter({
    type: 'writings',
    max: 3,
  });

  return {
    props: {
      featuredWritings: files,
    },
  };
};
