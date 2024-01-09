import { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

// Components
import Banner from '.'

export default {
  title: 'Components/Banner',
  component: Banner,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as Meta

type Story = StoryObj<typeof Banner>

export const Default: Story = {
  args: {},
}
