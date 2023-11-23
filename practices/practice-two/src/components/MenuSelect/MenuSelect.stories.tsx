import { Meta, StoryObj } from '@storybook/react'
import { MenuSelect } from '.'
import { Dropdown, Filter } from '..'
import { DragHandleIcon } from '@chakra-ui/icons'

const itemList = {
  listDropdown: [
    {
      id: '0',
      text: 'Project name',
    },
    {
      id: '1',
      text: 'Last update',
    },
  ],
  listMenu: [
    {
      id: '0',
      text: 'Edit',
    },
    {
      id: '1',
      text: 'Delete',
    },
  ],
}

export default {
  title: 'Component/MenuSelect',
  component: MenuSelect,
} as Meta

type Story = StoryObj<typeof MenuSelect>

export const Default: Story = {
  args: {
    leftIcon: <Filter />,
    rightIcon: <Dropdown />,
    title: 'All',
    itemList: itemList.listDropdown,
  },
}

export const Primary: Story = {
  args: {
    leftIcon: <DragHandleIcon />,
    itemList: itemList.listMenu,
  },
}
