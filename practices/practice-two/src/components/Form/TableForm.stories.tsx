import type { Meta, StoryObj } from '@storybook/react'

// Components
import TableForm from '.'

export default {
  title: 'Component/TableForm',
  component: TableForm,
} as Meta

type Story = StoryObj<typeof TableForm>

export const Base: Story = {
  args: {},
}
