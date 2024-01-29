import { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

//  Constants
import { CARD_DATA } from '@/constants';

// Components
import ProductList from '.';

export default {
  title: 'Components/ProductList',
  component: ProductList,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ]
} as Meta;

type Story = StoryObj<typeof ProductList>;

export const Default: Story = {
  args: {
    data: CARD_DATA
  }
};
