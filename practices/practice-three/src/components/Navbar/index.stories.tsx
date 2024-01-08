import { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from '.'
import { NAVBAR } from '@/constants'

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
    navbarData: NAVBAR,
  },
}
