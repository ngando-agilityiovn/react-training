import type { Meta, StoryObj } from '@storybook/react'

// Constants
import { TAGLIST } from '@/constants'

// Components
import ProjectTagManager from '.'

export default {
  title: 'Component/ProjectTagManager',
  component: ProjectTagManager,
} as Meta

type Story = StoryObj<typeof ProjectTagManager>

export const Base: Story = {
  args: {
    title: 'Resources',
    tagsList: TAGLIST,
  },
}
