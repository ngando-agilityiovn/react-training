import { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

// Constants
import { IMAGE_PRODUCT } from '@/constants'

// Components
import ImageProduct from '.'

export default {
  title: 'Components/ImageProduct',
  component: ImageProduct,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ]
} as Meta

type Story = StoryObj<typeof ImageProduct>

export const Default: Story = {
  args: {
    data: IMAGE_PRODUCT
  }
}
