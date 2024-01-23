import { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

// Components
import CustomModal from '.'
import { Text } from '@chakra-ui/react'

export default {
  title: 'Components/CustomModal',
  component: CustomModal,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ]
} as Meta

type Story = StoryObj<typeof CustomModal>

export const Default: Story = {
  args: {
    children: <Text pl={5}>This is body content</Text>,
    title: 'Delete product',
    isOpen: true,
    onClose: () => console.log('Click to close modal')
  }
}
