import { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

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
  args: {
    color: '#ffd3d3',
    onChangeValue: () => console.log('Hanlde change value product color')
  }
}
