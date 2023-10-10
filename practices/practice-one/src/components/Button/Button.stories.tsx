import { StoryObj, Meta } from '@storybook/react';

// Components
import Button from '../Button';

// Icons
import { Edit, Delete, Filter } from '../icons';

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
    variant: 'secondary',
    children: 'Confirm',
    onClick: () => {
      alert('Button component');
    }
  }
};

export const WarningColor: Story = {
  args: {
    variant: 'warning',
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
    variant: 'icon',
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
    variant: 'icon',
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
    variant: 'icon',
    className: 'secondary',
    disabled: true,
    onClick: () => {
      alert('Button component');
    }
  }
};
