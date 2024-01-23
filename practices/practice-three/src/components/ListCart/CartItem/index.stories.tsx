import { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

// Constants
import { IMAGE_PRODUCT } from '@/constants'

// Component
import CartItem from '.'

export default {
  title: 'Components/CartItem',
  component: CartItem,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ]
} as Meta

type Story = StoryObj<typeof CartItem>

export const Default: Story = {
  args: {
    props: {
      id: '1',
      name: 'Jeans',
      images: IMAGE_PRODUCT,
      price: 25,
      currency: '$',
      quantity: 10,
      color: '#ffd3d3',
      size: 'Medium'
    }
  }
}
