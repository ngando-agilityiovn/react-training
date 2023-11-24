import type { Meta, StoryObj } from '@storybook/react'

// Components
import { Timeline } from '.'

const timelineGroup = [
  {
    id: '0',
    option: '15 days',
  },
  {
    id: '1',
    option: '1 month',
  },
  {
    id: '2',
    option: '1-2 months',
  },
  {
    id: '3',
    option: '3 months',
  },
  {
    id: '4',
    option: '4-6 months',
  },
  {
    id: '5',
    option: '1 year',
  },
  {
    id: '6',
    option: 'Custom',
  },
]

export default {
  title: 'Component/Timeline',
  component: Timeline,
} as Meta

type Story = StoryObj<typeof Timeline>

export const Base: Story = {
  args: {
    title: 'Timeline project',
    timelineGroup: timelineGroup,
    isCustom: true,
  },
}
