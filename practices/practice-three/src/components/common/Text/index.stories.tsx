import { Text } from '@chakra-ui/react';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Text',
  component: Text
} as Meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'Add project',
    fontSize: 'xl',
    color: 'red'
  }
};
