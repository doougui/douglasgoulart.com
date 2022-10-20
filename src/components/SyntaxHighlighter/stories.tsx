import { Story, Meta } from '@storybook/react/types-6-0';
import { SyntaxHighlighter } from '.';

export default {
  title: 'SyntaxHighlighter',
  component: SyntaxHighlighter,
} as Meta;

export const Default: Story = () => <SyntaxHighlighter />;
