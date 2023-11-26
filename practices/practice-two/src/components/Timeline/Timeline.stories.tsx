import type { Meta, StoryObj } from '@storybook/react'

// Components
import { Timeline } from '.'

export default {
  title: 'Component/Timeline',
  component: Timeline,
} as Meta

type Story = StoryObj<typeof Timeline>

export const Base: Story = {
  args: {
    title: 'Timeline project',
  },
}
