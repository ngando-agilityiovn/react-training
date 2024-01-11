import { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

// Components
import ButtonQuantity from '.'

export default {
  title: 'Components/ButtonQuantity',
  component: ButtonQuantity,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ]
} as Meta

type Story = StoryObj<typeof ButtonQuantity>

export const Default: Story = {
  args: {}
}
