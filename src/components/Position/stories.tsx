import type { Meta, StoryFn } from '@storybook/react';
import { Position, PositionProps } from '.';
import positionMock from './mock';

export default {
  title: 'Position',
  component: Position,
  args: positionMock,
} as Meta<PositionProps>;

export const Default: StoryFn<PositionProps> = (args) => <Position {...args} />;
