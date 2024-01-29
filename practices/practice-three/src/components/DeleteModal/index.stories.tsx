import { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

// Components
import DeleteModal from '.';

export default {
  title: 'Components/DeleteModal',
  component: DeleteModal,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ]
} as Meta;

type Story = StoryObj<typeof DeleteModal>;

export const Default: Story = {
  args: {
    isOpenDeleteModal: true,
    onToggleModal: () => console.log('Toggle modal'),
    onDeleteProduct: () => console.log('Click to delete product')
  }
};
