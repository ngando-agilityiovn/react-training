import { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

// Constants
import { DELIVERY_DATA } from '@/constants'

// Components
import Delivery from '.'

export default {
  title: 'Components/Delivery',
  component: Delivery,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ]
} as Meta

type Story = StoryObj<typeof Delivery>

export const Default: Story = {
  args: {
    data: DELIVERY_DATA
  }
}
