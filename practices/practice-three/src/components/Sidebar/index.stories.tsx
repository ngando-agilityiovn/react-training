import { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

// Constants

// Components
import Sidebar from '.'

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as Meta

type Story = StoryObj<typeof Sidebar>

export const Default: Story = {
  args: {},
}
