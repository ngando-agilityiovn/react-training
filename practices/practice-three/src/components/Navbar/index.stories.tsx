import { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

// Constants
import { NAVBAR } from '@/constants'

// Components
import Navbar from '.'

export default {
  title: 'Components/Navbar',
  component: Navbar,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as Meta

type Story = StoryObj<typeof Navbar>

export const Default: Story = {
  args: {
    data: NAVBAR,
  },
}
