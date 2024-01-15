import { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

// Components
import Color from '.'

export default {
  title: 'Components/Color',
  component: Color,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ]
} as Meta

type Story = StoryObj<typeof Color>

export const Default: Story = {
  args: { color: 'blue' }
}
