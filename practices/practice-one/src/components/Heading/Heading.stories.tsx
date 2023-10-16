import { StoryObj, Meta } from '@storybook/react';
import { Heading } from '.';

// Components

export default {
  title: 'Components/Heading',
  component: Heading
} as Meta;

type Story = StoryObj<typeof Heading>;

export const Basic: Story = {
  args: {
    title: 'h2 - Lorem Ipsum'
  }
};

export const H1: Story = {
  args: {
    title: 'h1 - Lorem Ipsum',
    as: 'h1'
  }
};

export const H3: Story = {
  args: {
    title: 'h3 - Lorem Ipsum',
    as: 'h3'
  }
};

export const H4: Story = {
  args: {
    title: 'h4 - Lorem Ipsum',
    as: 'h4'
  }
};

export const H5: Story = {
  args: {
    title: 'h5 - Lorem Ipsum',
    as: 'h5'
  }
};

export const H6: Story = {
  args: {
    title: 'h6 - Lorem Ipsum',
    as: 'h6'
  }
};
