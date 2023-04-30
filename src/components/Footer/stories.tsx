import type { Meta, StoryFn } from '@storybook/react';
import { Container } from 'components/Container';
import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
} as Meta;

export const Default: StoryFn = () => (
  <Container>
    <Footer />
  </Container>
);
