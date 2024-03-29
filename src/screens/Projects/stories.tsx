import type { Meta, StoryFn } from '@storybook/react';
import { Projects } from '.';
import projectsMock from './mock';

export default {
  title: 'Screens/Projects',
  component: Projects,
} as Meta;

export const Default: StoryFn = () => <Projects projects={projectsMock} />;
