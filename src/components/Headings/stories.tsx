import type { Meta, StoryFn } from '@storybook/react';
import { Heading1, Heading2, Heading3 } from '.';

export default {
  title: 'Headings',
} as Meta;

export const Default: StoryFn = () => (
  <>
    <Heading1>Heading 1</Heading1>
    <Heading2>Heading 2</Heading2>
    <Heading3>Heading 3</Heading3>
  </>
);
