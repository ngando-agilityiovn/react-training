import { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

// Constants
import { SIZE_DATA } from '@/constants'

// Components
import SizeGroup from '.'

export default {
  title: 'Components/SizeGroup',
  component: SizeGroup,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ]
} as Meta

type Story = StoryObj<typeof SizeGroup>

export const Default: Story = {
  args: {
    options: SIZE_DATA
  }
}
