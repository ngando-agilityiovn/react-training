import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'

export type ItemList = string

interface IMenuProps {
  title?: string
  width?: string
  itemList?: ItemList[]
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
}

export const MenuSelect = ({
  itemList,
  title,
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
        leftIcon={leftIcon}
        rightIcon={rightIcon}
      >
        {title}
      </MenuButton>
      <MenuList>
        {itemList?.map((item) => {
          return <MenuItem>{item}</MenuItem>
        })}
      </MenuList>
    </Menu>
  )
}
