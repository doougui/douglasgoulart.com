import type { Meta, StoryFn } from '@storybook/react';
import { Container } from 'components/Container';
import { About } from '.';

export default {
  title: 'Screens/Home/About',
  component: About,
} as Meta;

export const Default: StoryFn = () => (
  <Container>
    <About />
  </Container>
);
