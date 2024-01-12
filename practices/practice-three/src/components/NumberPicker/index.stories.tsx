import { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

// Components
import NumberPicker from '.'

export default {
  title: 'Components/NumberPicker',
  component: NumberPicker,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ]
} as Meta

type Story = StoryObj<typeof NumberPicker>

export const Default: Story = {
  args: {}
}
