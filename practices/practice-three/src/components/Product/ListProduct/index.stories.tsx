import { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

//  Constants
import { CARD_DATA } from '@/constants'

// Components
import ListProduct from '.'

export default {
  title: 'Components/ListProduct',
  component: ListProduct,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as Meta

type Story = StoryObj<typeof ListProduct>

export const Default: Story = {
  args: {
    cardData: CARD_DATA,
  },
}
