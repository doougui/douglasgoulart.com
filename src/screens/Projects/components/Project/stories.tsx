import type { Meta, StoryFn } from '@storybook/react';
import { Project, ProjectProps } from '.';
import projectMock from './mock';

export default {
  title: 'Screens/Projects/Project',
  component: Project,
  args: projectMock,
} as Meta;

export const Default: StoryFn<ProjectProps> = (args) => <Project {...args} />;
