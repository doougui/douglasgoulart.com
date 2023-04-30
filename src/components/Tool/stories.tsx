import type { Meta, StoryFn } from '@storybook/react';
import { Tool, ToolProps } from '.';
import toolMock from './mock';

export default {
  title: 'Tool',
  component: Tool,
  args: toolMock,
} as Meta<ToolProps>;

export const Default: StoryFn<ToolProps> = (args) => <Tool {...args} />;
