import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { ReactElement } from 'react'

export interface ItemList {
  id: string
  text: string
}

interface IMenuProps {
  title?: string
  width?: string
  itemList?: ItemList[]
  leftIcon?: ReactElement
  rightIcon?: ReactElement
}

export const MenuSelect = ({
  itemList,
  title,
  width,
  leftIcon,
  rightIcon,
}: IMenuProps) => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        background="white"
        gap="0.3rem"
        color="secondary"
        fontSize="sm"
        width={width}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
      >
        {title}
      </MenuButton>
      <MenuList>
        {itemList?.map(({ id, text }) => {
          return <MenuItem key={id}>{text}</MenuItem>
        })}
      </MenuList>
    </Menu>
  )
}
