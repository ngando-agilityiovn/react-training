import { StoryObj, Meta } from '@storybook/react';

// Components

import { Edit, Delete, Filter } from '../icons';
import { Button } from '.';
import { BUTTON_VARIANT } from '@/types/common';

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

export const IconEdit: Story = {
  args: {
    children: <Edit />,
    variant: BUTTON_VARIANT.ICON,
    className: 'secondary',
    onClick: () => {
      alert('Button component');
    }
  }
};

export const IconDelete: Story = {
  args: {
    children: <Delete />,
    variant: BUTTON_VARIANT.ICON,
    className: 'secondary',
    onClick: () => {
      alert('Button component');
    }
  }
};

export const IconFilter: Story = {
  args: {
    children: <Filter />,
    variant: BUTTON_VARIANT.ICON,
    className: 'secondary',
    onClick: () => {
      alert('Button component');
    }
  }
};
