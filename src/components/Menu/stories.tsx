import type { Meta, StoryFn } from '@storybook/react';
import { Container } from 'components/Container';
import { Menu } from '.';

export default {
  title: 'Menu',
  component: Menu,
  nextRouter: {
    pathname: '/',
  },
} as Meta;

export const Default: StoryFn = () => (
  <Container>
    <Menu />
  </Container>
);
