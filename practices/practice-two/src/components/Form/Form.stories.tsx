import type { Meta, StoryObj } from '@storybook/react'

// Components
import Form from '.'

// Components

export default {
  title: 'Component/Form',
  component: Form,
} as Meta

type Story = StoryObj<typeof Form>

export const Base: Story = {
  args: {},
}
