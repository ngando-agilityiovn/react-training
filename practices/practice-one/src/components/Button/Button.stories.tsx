import { StoryObj, Meta } from '@storybook/react';

import { Edit } from '~/assets/icons';

import Button from './';

import { BUTTON_VARIANT } from '~/types';

export default {
  title: 'Components/Button',
  component: Button
} as Meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'No',
    onClick: () => {
      alert('Button component');
    }
  }
};

export const SecondaryColor: Story = {
  args: {
    variant: BUTTON_VARIANT.SECONDARY,
    children: 'Confirm',
    onClick: () => {
      alert('Button component');
    }
  }
};

export const WarningColor: Story = {
  args: {
    variant: BUTTON_VARIANT.WARNING,
    children: 'Delete',
    onClick: () => {
      alert('Button component');
    }
  }
};

export const Icon: Story = {
  args: {
    children: <Edit />,
    variant: BUTTON_VARIANT.ICON,
    className: 'secondary',
    onClick: () => {
      alert('Button component');
    }
  }
};
