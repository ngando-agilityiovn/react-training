import { Meta, StoryObj } from '@storybook/react'
import { MenuSelect } from '.'
import { Dropdown, Filter } from '..'
import { DragHandleIcon } from '@chakra-ui/icons'

const options = {
  sortOptions: [
    {
      value: 'name',
      text: 'Project name',
    },
    {
      value: 'updatedAt',
      text: 'Last update',
    },
  ],
  menuOptions: [
    {
      value: 'edit',
      text: 'Edit',
    },
    {
      value: 'delete',
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
    options: options.sortOptions,
  },
}

export const Primary: Story = {
  args: {
    leftIcon: <DragHandleIcon />,
    options: options.menuOptions,
  },
}
