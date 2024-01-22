import { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

// Constants
import { IMAGE_PRODUCT, REVIEWERS } from '@/constants'

// Component
import ProductCard from '.'

export default {
  title: 'Components/ProductCard',
  component: ProductCard,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ]
} as Meta

type Story = StoryObj<typeof ProductCard>

export const Default: Story = {
  args: {
    props: {
      id: '1',
      name: 'Jeans',
      images: IMAGE_PRODUCT,
      price: 25,
      currency: '$',
      quantity: 1,
      color: 'red',
      size: 'Medium',
      reviews: REVIEWERS,
      ratings: 5
    }
  }
}
