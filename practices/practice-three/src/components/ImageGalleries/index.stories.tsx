import { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

// Constants
import { IMAGE_PRODUCT } from '@/constants'

// Components
import ImageGalleries from '.'

export default {
  title: 'Components/ImageGalleries',
  component: ImageGalleries,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ]
} as Meta

type Story = StoryObj<typeof ImageGalleries>

export const Default: Story = {
  args: {
    data: IMAGE_PRODUCT
  }
}
