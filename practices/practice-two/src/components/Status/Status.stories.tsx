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
    ...Success.args,
    text: 'At risk',
    variant: 'error',
    background: 'textError',
  },
}

export const Warning: Story = {
  args: {
    ...Success.args,
    text: 'Potential risk',
    variant: 'warning',
    background: 'textWarning',
  },
}

export const Ghost: Story = {
  args: {
    ...Success.args,
    text: 'On hold',
    variant: 'default',
    background: 'secondary',
  },
}
