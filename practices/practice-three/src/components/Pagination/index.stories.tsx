import { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

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
    )
  ]
} as Meta

type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  args: {
    total: 35,
    onSelectPage: () => console.log('Interactive with each number button'),
    onNextPage: () => console.log('Handle next page'),
    onPrevPage: () => console.log('Handle preview page'),
    pageNumbers: [0, 1, 2],
    pageIndex: 0
  }
}
