import { StoryObj, Meta } from '@storybook/react';

// Components
import { UserInformation } from '.';

export default {
  title: 'Components/UserInformation',
  component: UserInformation
} as Meta;

type Story = StoryObj<typeof UserInformation>;

export const Default: Story = {
  args: {
    image: 'https://picsum.photos/40/40',
    name: 'John Doe',
    description: 'Developer'
  }
};
