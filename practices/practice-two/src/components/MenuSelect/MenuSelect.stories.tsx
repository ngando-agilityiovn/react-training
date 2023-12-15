import { Meta, StoryObj } from '@storybook/react'
import { DragHandleIcon } from '@chakra-ui/icons'

// Components
import MenuSelect from '.'
import { DropdownIcon, FilterIcon } from '../Icons'

const options = {
  sortOptions: [
    {
      value: 'name',
      text: 'Project name',
      handleClick: () => console.log('Project name'),
    },
    {
      value: 'updatedAt',
      text: 'Last update',
      handleClick: () => console.log('Last update'),
    },
  ],
  menuOptions: [
    {
      value: 'edit',
      text: 'Edit',
      handleClick: () => console.log('Edit'),
    },
    {
      value: 'delete',
      text: 'Delete',
      handleClick: () => console.log('Delete'),
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
    leftIcon: <FilterIcon />,
    rightIcon: <DropdownIcon />,
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
