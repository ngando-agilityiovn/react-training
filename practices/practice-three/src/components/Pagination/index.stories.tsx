import { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

// Constants
import { PAGINATION_DATA } from '@/constants'

// Components
import Pagination from '.'

export default {
  title: 'Components/Pagination',
  component: Pagination,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as Meta

type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  args: {
    textData: PAGINATION_DATA,
  },
}
