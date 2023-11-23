import { Meta, StoryObj } from '@storybook/react'
import { MenuSelect } from '.'
import { Dropdown, Filter } from '..'
import { DragHandleIcon } from '@chakra-ui/icons'

const itemList = {
  listDropdown: ['Project name', 'Last update'],
  listMenu: ['Edit', 'Delete'],
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
