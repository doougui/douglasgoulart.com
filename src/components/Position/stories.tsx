import { Story, Meta } from '@storybook/react/types-6-0';
import { Position, PositionProps } from '.';
import positionMock from './mock';

export default {
  title: 'Position',
  component: Position,
  args: positionMock,
} as Meta;

export const Default: Story<PositionProps> = (args) => <Position {...args} />;
