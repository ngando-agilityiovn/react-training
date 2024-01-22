import { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

// Components
import Home from '.'

export default {
  title: 'Components/Home',
  component: Home,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ]
} as Meta

type Story = StoryObj<typeof Home>

export const Default: Story = {
  args: {}
}
