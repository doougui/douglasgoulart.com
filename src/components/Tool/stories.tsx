import { Story, Meta } from '@storybook/react/types-6-0';
import { Tool, ToolProps } from '.';
import toolMock from './mock';

export default {
  title: 'Tool',
  component: Tool,
  args: toolMock,
} as Meta<ToolProps>;

export const Default: Story<ToolProps> = (args) => <Tool {...args} />;
