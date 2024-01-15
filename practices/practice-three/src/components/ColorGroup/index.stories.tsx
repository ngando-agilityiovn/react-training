import { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

// Constants
import { DATA_COLOR } from '@/constants'

// Components
import ColorGroup from '.'

export default {
  title: 'Components/ColorGroup',
  component: ColorGroup,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ]
} as Meta

type Story = StoryObj<typeof ColorGroup>

export const Default: Story = {
  args: { colors: DATA_COLOR }
}
