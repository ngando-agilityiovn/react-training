import { StoryObj, Meta } from '@storybook/react';
import { Modal } from '.';
export default {
  title: 'Components/Modal',
  component: Modal
} as Meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    title: 'Do you want to delete this user ?',
    children: 'text',
    onClose: () => {
      alert('Button component');
    }
  }
};
