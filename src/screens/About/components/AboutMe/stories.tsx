import type { Meta, StoryFn } from '@storybook/react';
import { Container } from 'components/Container';
import { AboutMe } from '.';

export default {
  title: 'Screens/About/AboutMe',
  component: AboutMe,
} as Meta;

export const Default: StoryFn = () => (
  <Container>
    <AboutMe />
  </Container>
);
