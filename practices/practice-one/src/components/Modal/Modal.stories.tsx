import { StoryObj, Meta } from '@storybook/react';
import Modal from '.';
import { BUTTON_VARIANT } from '~/types';
import { TextField } from '..';
export default {
  title: 'Components/Modal',
  component: Modal
} as Meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    className: 'dd',
    title: 'Do you want to delete this user ?',
    variantNegative: BUTTON_VARIANT.WARNING,
    negativeLabel: 'No',
    variantPosition: BUTTON_VARIANT.SECONDARY,
    positiveLabel: 'Yes',
    onClose: () => {
      alert('Button component');
    },
    onSubmit: () => {
      alert('Button component');
    }
  }
};

export const ModalPrimary: Story = {
  args: {
    className: 'dd',
    title: 'Add new user',
    variantNegative: BUTTON_VARIANT.PRIMARY,
    negativeLabel: 'Cancel',
    variantPosition: BUTTON_VARIANT.SECONDARY,
    positiveLabel: 'Confirm',
    children: (
      <div>
        <TextField label='User Name' name='name' type='text' placeholder='Your name...' size={100}></TextField>
        <TextField label='Email' name='email' type='email' placeholder='example@domain.com' size={80}></TextField>
        <TextField label='Phone Number' name='tel' type='tel' placeholder='Your phone...' size={80}></TextField>
        <TextField label='Avatar' name='avatar' type='url' placeholder='Image...' size={80}></TextField>
        <TextField label='Status' name='status' type='text' placeholder='Choose status' size={80}></TextField>
      </div>
    ),
    onClose: () => {
      alert('Button component');
    },
    onSubmit: () => {
      alert('Button component');
    }
  }
};

export const ModalSecondary: Story = {
  args: {
    className: 'dd',
    title: 'Update information user',
    variantNegative: BUTTON_VARIANT.PRIMARY,
    negativeLabel: 'Cancel',
    variantPosition: BUTTON_VARIANT.SECONDARY,
    positiveLabel: 'Confirm',
    children: (
      <div>
        <TextField label='User Name' name='name' type='text' placeholder='Your name...' size={100}></TextField>
        <TextField label='Email' name='email' type='email' placeholder='example@domain.com' size={80}></TextField>
        <TextField label='Phone Number' name='tel' type='tel' placeholder='Your phone...' size={80}></TextField>
        <TextField label='Avatar' name='avatar' type='url' placeholder='Image...' size={80}></TextField>
        <TextField label='Status' name='status' type='text' placeholder='Choose status' size={80}></TextField>
      </div>
    ),
    onClose: () => {
      alert('Button component');
    },
    onSubmit: () => {
      alert('Button component');
    }
  }
};
