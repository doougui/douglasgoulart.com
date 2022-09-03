import { Story, Meta } from '@storybook/react/types-6-0';
import { SmallText, SmallTextProps } from '.';

export default {
  title: 'SmallText',
  component: SmallText,
  argTypes: {
    children: {
      type: 'string',
    },
  },
} as Meta;

export const Default: Story<SmallTextProps> = (args) => <SmallText {...args} />;

Default.args = {
  children: 'This is a small text',
};
