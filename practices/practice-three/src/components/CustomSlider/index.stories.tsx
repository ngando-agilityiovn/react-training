import { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

// Components
import CustomSlider from '.'

export default {
  title: 'Components/CustomSlider',
  component: CustomSlider,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ]
} as Meta

type Story = StoryObj<typeof CustomSlider>

export const Default: Story = {
  args: {
    onSliderChange: () => console.log('Pull to change value slider')
  }
}
