import { Meta, StoryObj } from '@storybook/react';
import { Button } from '@chakra-ui/react';

export default {
  title: 'Components/Button',
  component: Button
} as Meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Add to cart',
    variant: 'solid',
    onClick: () => {}
  }
};
