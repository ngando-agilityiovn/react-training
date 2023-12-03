import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { ReactElement } from 'react'

export interface Option {
  value: string
  text: string
}

interface IMenuProps {
  onEditItem: () => void
  options: Option[]
  title?: string
  width?: string
  leftIcon?: ReactElement
  rightIcon?: ReactElement
}

const MenuSelect = ({
  onEditItem,
  options,
  title,
  width,
  leftIcon,
  rightIcon,
}: IMenuProps) => (
  <Menu>
    <MenuButton
      as={Button}
      background="white"
      gap="1.25"
      color="secondary"
      fontSize="sm"
      width={width}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
    >
      {title}
    </MenuButton>
    <MenuList>
      {options.map(({ value, text }) => (
        <MenuItem key={value} onClick={onEditItem}>
          {text}
        </MenuItem>
      ))}
    </MenuList>
  </Menu>
)

export default MenuSelect
