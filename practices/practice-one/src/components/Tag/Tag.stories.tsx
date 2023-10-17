import { StoryObj, Meta } from '@storybook/react';

import { Tag } from './';

import { TAG_COLORS } from '@/types';

export default {
  title: 'Components/Tag',
  component: Tag
} as Meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    color: TAG_COLORS.INFO,
    title: 'Status'
  }
};

export const PrimaryStatus: Story = {
  args: {
    color: TAG_COLORS.DISABLED,
    title: 'Status'
  }
};

export const SecondaryStatus: Story = {
  args: {
    color: TAG_COLORS.WARNING,
    title: 'Status'
  }
};

export const DarkStatus: Story = {
  args: {
    color: TAG_COLORS.ERROR,
    title: 'Status'
  }
};

export const TertiaryStatus: Story = {
  args: {
    color: TAG_COLORS.SUCCESS,
    title: 'Status'
  }
};
