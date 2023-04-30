import type { Meta, StoryFn } from '@storybook/react';
import { Contact } from '.';

export default {
  title: 'Screens/About/Contact',
  component: Contact,
} as Meta;

export const Default: StoryFn = () => <Contact />;
