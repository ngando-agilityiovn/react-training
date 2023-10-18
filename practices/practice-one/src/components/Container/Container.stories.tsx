import { StoryObj, Meta } from '@storybook/react';

// Components
import { Container } from '.';
import { Heading } from '../Heading';

export default {
  title: 'Components/Container',
  component: Container
} as Meta;

type Story = StoryObj<typeof Container>;

export const Basic: Story = {
  args: {
    children: <Heading title='Lorem ipsum dolor sit.' />
  }
};
