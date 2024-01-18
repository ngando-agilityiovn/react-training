import { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

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
    onChangeValue: () => console.log('Hanlde change value product size')
  }
}
