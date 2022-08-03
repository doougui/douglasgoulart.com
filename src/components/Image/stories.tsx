import { Story, Meta } from '@storybook/react/types-6-0';
import { Image } from '.';

export default {
  title: 'Image',
  component: Image,
} as Meta;

export const Default: Story = () => (
  <Image
    src="https://picsum.photos/400"
    width={80}
    height={80}
    layout="responsive"
  />
);
