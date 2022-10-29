import { GetStaticProps } from 'next';
import { Writings as WritingsScreen } from 'screens/Writings';
import { Writing } from 'types/Writing';
import { getAllFilesFrontmatter } from 'utils/mdx/getAllFilesFrontmatter';

type WritingsProps = {
  writings: Writing[];
};

export default function Writings({ writings }: WritingsProps) {
  return <WritingsScreen writings={writings} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const files = await getAllFilesFrontmatter('writings');

  return { props: { writings: files } };
};
