import { StoryObj, Meta } from '@storybook/react';

import { Edit } from '~/assets/icons';

import Button from './';

import { BUTTON_VARIENT } from '~/types';

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
    varient: BUTTON_VARIENT.SECONDARY,
    children: 'Confirm',
    onClick: () => {
      alert('Button component');
    }
  }
};

export const WarningColor: Story = {
  args: {
    varient: BUTTON_VARIENT.WARNING,
    children: 'Delete',
    onClick: () => {
      alert('Button component');
    }
  }
};

export const Icon: Story = {
  args: {
    children: <Edit />,
    varient: BUTTON_VARIENT.ICON,
    className: 'secondary',
    onClick: () => {
      alert('Button component');
    }
  }
};
