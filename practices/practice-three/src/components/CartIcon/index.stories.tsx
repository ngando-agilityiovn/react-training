import { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

// Components
import CartIcon from '.';

export default {
  title: 'Components/CartIcon',
  component: CartIcon,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ]
} as Meta;

type Story = StoryObj<typeof CartIcon>;

export const Default: Story = {
  args: {}
};
