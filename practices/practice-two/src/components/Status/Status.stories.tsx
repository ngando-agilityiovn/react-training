import { Meta, StoryObj } from '@storybook/react'
import { Status } from '.'

export default {
  title: 'Component/Status',
  component: Status,
} as Meta

type Story = StoryObj<typeof Status>

export const Default: Story = {
  args: {
    text: 'Frontend',
    variant: 'outline',
    isDot: false,
  },
}

export const Success: Story = {
  args: {
    text: 'On track',
    variant: 'success',
    isDot: true,
    background: 'textSuccess',
  },
}

export const Error: Story = {
  args: {
    text: 'At risk',
    variant: 'error',
    isDot: true,
    background: 'textError',
  },
}

export const Warning: Story = {
  args: {
    text: 'Potential risk',
    variant: 'warning',
    isDot: true,
    background: 'textWarning',
  },
}

export const Ghost: Story = {
  args: {
    text: 'On hold',
    variant: 'default',
    isDot: true,
    background: 'secondary',
  },
}
