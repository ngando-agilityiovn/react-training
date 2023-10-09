import { StoryObj, Meta } from '@storybook/react';

// components
import Button from './';

// types

import { BUTTON_VARIANT } from '~/types';

// icons
import { Edit, Delete, Filter } from '~/assets/icons';

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
    disabled: true,
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
    disabled: true,
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
    disabled: true,
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
    disabled: true,
    onClick: () => {
      alert('Button component');
    }
  }
};
