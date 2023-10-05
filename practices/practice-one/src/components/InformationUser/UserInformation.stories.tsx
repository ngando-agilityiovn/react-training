// UserInformation.stories.tsx
import { StoryObj, Meta } from '@storybook/react';

import UserInformation from './';

export default {
  title: 'Components/UserInformation',
  component: UserInformation
} as Meta;

type Story = StoryObj<typeof UserInformation>;

export const Default: Story = {
  args: {
    image:
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F014%2F194%2F215%2Foriginal%2Favatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg&tbnid=DygUyFj3vCP-NM&vet=12ahUKEwjNmdS66d2BAxXuXvUHHUqUCu0QMygEegQIARB1..i&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F14194215-avatar-icon-human-a-person-s-badge-vector-social-media-profile-symbol-the-symbol-of-a-person&docid=0cxq_JqEIAYAsM&w=1920&h=1920&q=avatar%20icon&ved=2ahUKEwjNmdS66d2BAxXuXvUHHUqUCu0QMygEegQIARB1',
    title: 'John Doe',
    alt: "John Doe's Image",
    description: 'A brief description of John Doe.'
  }
};
