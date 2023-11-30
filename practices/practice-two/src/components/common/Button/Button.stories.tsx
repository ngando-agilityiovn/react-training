import { Meta, StoryObj } from '@storybook/react'
import { Button } from '@chakra-ui/react'

export default {
  title: 'Components/Button',
  component: Button,
} as Meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Cancel',
    variant: 'default',
  },
}

export const Primary: Story = {
  args: {
    children: 'Add project',
    variant: 'solid',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Add project',
    variant: 'outline',
  },
}

export const Tertiary: Story = {
  args: {
    children: 'Delete',
    variant: 'error',
  },
}
