import type { Meta, StoryObj } from '@storybook/react'

// Components
import { ProjectTagManager } from '.'

const taglist = [
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
]

export default {
  title: 'Component/ProjectTagManager',
  component: ProjectTagManager,
} as Meta

type Story = StoryObj<typeof ProjectTagManager>

export const Base: Story = {
  args: {
    title: 'Resources',
    tagsList: taglist,
  },
}
