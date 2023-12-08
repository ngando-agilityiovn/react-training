import type { Meta, StoryObj } from '@storybook/react'

// Components
import ResourceGroup from '.'

const tagGroup = [
  {
    id: '0',
    text: 'UX/UI Design',
  },
  {
    id: '1',
    text: 'Frontend',
  },
  {
    id: '2',
    text: 'Backend',
  },
  {
    id: '3',
    text: 'Full Stack',
  },
  {
    id: '4',
    text: 'Graphic Designer',
  },
  {
    id: '5',
    text: 'Web Designer',
  },
  {
    id: '6',
    text: 'QA',
  },
]

export default {
  title: 'Component/ResourceGroup',
  component: ResourceGroup,
} as Meta

type Story = StoryObj<typeof ResourceGroup>

export const Base: Story = {
  args: {
    title: 'Resources',
    tagGroup: tagGroup,
  },
}
