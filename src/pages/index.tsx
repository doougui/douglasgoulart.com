import { GetServerSideProps } from 'next';
import { Home as HomeScreen, HomeProps } from 'screens/Home';
import { getFilesFrontmatter } from 'utils/mdx/getFilesFrontmatter';

export default function Home(props: HomeProps) {
  return <HomeScreen {...props} />;
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
