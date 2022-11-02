import { Stack } from 'components/Stack';
import { Base } from 'layouts/Base';
import { Writing } from 'types/Writing';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { FeaturedWritings } from './components/FeaturedWritings';
import { Header } from './components/Header';

export type HomeProps = {
  featuredWritings: Writing[];
};

export function Home({ featuredWritings }: HomeProps) {
  return (
    <Base>
      <Stack spacing="5rem">
        <Header />
        <About />
        <FeaturedWritings data={featuredWritings} />
        <Contact />
      </Stack>
    </Base>
  );
}
