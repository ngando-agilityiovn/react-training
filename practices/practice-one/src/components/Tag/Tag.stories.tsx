// UserInformation.stories.tsx
import { StoryObj, Meta } from '@storybook/react';

import Tag from './';

import { TAG_COLORS } from '~/types';

export default {
  title: 'Components/Tag',
  component: Tag
} as Meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    color: TAG_COLORS.PURPLE,
    title: 'Status'
  }
};

export const PrimaryStatus: Story = {
  args: {
    color: TAG_COLORS.RED,
    title: 'Status'
  }
};

export const SecondaryStatus: Story = {
  args: {
    color: TAG_COLORS.YELLOW,
    title: 'Status'
  }
};

export const DarkStatus: Story = {
  args: {
    color: TAG_COLORS.GRAY,
    title: 'Status'
  }
};

export const TertiaryStatus: Story = {
  args: {
    color: TAG_COLORS.GREEN,
    title: 'Status'
  }
};
