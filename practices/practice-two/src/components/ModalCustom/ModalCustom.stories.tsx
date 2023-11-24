import type { Meta, StoryObj } from '@storybook/react'

// Components
import { ModalCustom } from '.'

export default {
  title: 'Component/ModalCustom',
  component: ModalCustom,
} as Meta

type Story = StoryObj<typeof ModalCustom>

export const Base: Story = {
  args: {
    title: 'Demo',
    isOpen: true,
    onClose: () => {},
  },
}
