import { Story, Meta } from '@storybook/react/types-6-0';
import { Project, ProjectProps } from '.';
import projectMock from './mock';

export default {
  title: 'Project',
  component: Project,
  args: projectMock,
} as Meta;

export const Default: Story<ProjectProps> = (args) => <Project {...args} />;
