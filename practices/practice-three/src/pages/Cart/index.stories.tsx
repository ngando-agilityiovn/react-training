import { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

// Components
import ProductCart from '.'

export default {
  title: 'Components/ProductCart',
  component: ProductCart,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ]
} as Meta

type Story = StoryObj<typeof ProductCart>

export const Default: Story = {
  args: {
    quantity: 10,
    image: 'https://source.unsplash.com/random/587x691/?fashion',
    name: 'Jean ',
    currency: '$',
    price: 103000
  }
}
