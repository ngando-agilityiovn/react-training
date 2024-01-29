import { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

// Components
import MainLayout from '.'
import { Banner } from '@/components'

export default {
  title: 'Components/MainLayout',
  component: MainLayout,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ]
} as Meta

type Story = StoryObj<typeof MainLayout>

export const Default: Story = {
  args: {
    children: <Banner />
  }
}
