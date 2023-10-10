// UserInformation.stories.tsx
import { StoryObj, Meta } from '@storybook/react';

import Tag from './';

export default {
  title: 'Components/Tag',
  component: Tag
} as Meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    color: 'green',
    title: 'Status'
  }
};

export const PrimaryStatus: Story = {
  args: {
    color: 'red',
    title: 'Status'
  }
};

export const SecondaryStatus: Story = {
  args: {
    color: 'yellow',
    title: 'Status'
  }
};

export const DarkStatus: Story = {
  args: {
    color: 'gray',
    title: 'Status'
  }
};

export const TertiaryStatus: Story = {
  args: {
    color: 'green',
    title: 'Status'
  }
};
