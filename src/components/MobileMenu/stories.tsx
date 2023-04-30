import type { Meta, StoryFn } from '@storybook/react';
import { MobileMenu } from '.';

export default {
  title: 'MobileMenu',
  component: MobileMenu,
} as Meta;

export const Default: StoryFn = () => (
  <div style={{ margin: '3rem 0' }}>
    <MobileMenu />
  </div>
);

Default.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
};
