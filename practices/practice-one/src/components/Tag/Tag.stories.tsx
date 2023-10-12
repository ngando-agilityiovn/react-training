import { StoryObj, Meta } from '@storybook/react';

// Components
import { Tag } from '.';

// Types
import { TAG_COLORS } from '@/types/index';

export default {
  title: 'Components/Tag',
  component: Tag
} as Meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    color: TAG_COLORS.PRIMARY,
    title: 'Status'
  }
};

export const PrimaryStatus: Story = {
  args: {
    color: TAG_COLORS.SECONDARY,
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
    color: TAG_COLORS.LIGHT,
    title: 'Status'
  }
};

export const TertiaryStatus: Story = {
  args: {
    color: TAG_COLORS.DARK,
    title: 'Status'
  }
};
