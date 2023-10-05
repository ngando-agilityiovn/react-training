// UserInformation.stories.tsx
import { StoryObj, Meta } from '@storybook/react';

import Input from './';

export default {
  title: 'Components/Input',
  component: Input
} as Meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'User Name',
    name: 'name',
    type: 'text',
    placeholder: 'Searching',
    size: 40
  }
};

export const EmailInput: Story = {
  args: {
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'example@domain.com',
    size: 40
  }
};

export const PhoneNumberInput: Story = {
  args: {
    label: 'Phone Number',
    name: 'tel',
    type: 'tel',
    placeholder: 'Your phone number...',
    size: 40
  }
};

export const AvartarInput: Story = {
  args: {
    label: 'Avartar',
    name: 'url',
    type: 'url',
    placeholder: 'Image...',
    size: 40
  }
};
