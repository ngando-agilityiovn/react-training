// UserInformation.stories.tsx
import { StoryObj, Meta } from '@storybook/react';
import { UserInformation } from '.';


export default {
  title: 'Components/UserInformation',
  component: UserInformation
} as Meta;

type Story = StoryObj<typeof UserInformation>;

export const Default: Story = {
  args: {
    image:
      'https://firebasestorage.googleapis.com/v0/b/brand-1b5b2.appspot.com/o/avatar.png?alt=media&token=48dc1426-5e9c-4cfe-9d95-891f2f2b56b2&_gl=1*1mfnhfw*_ga*ODg4OTAzNjM4LjE2OTY5OTQ2OTk.*_ga_CW55HF8NVT*MTY5NzE2NTQ3Ny40LjEuMTY5NzE2NTQ5My40NC4wLjA.',
    title: 'John Doe',
    alt: "John Doe's Image",
    description: 'A brief description of John Doe.'
  }
};
