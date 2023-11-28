import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Img,
  Text,
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

// Components
import {
  Active,
  Dropdown,
  Filter,
  Help,
  MenuSelect,
  Notification,
  Search,
  StatusGroup,
} from '@/components'

// Layouts
import { Sidebar } from '@/layouts'

const menuOptions = {
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

const avatar =
  'https://firebasestorage.googleapis.com/v0/b/icon-foot.appspot.com/o/avatar.png?alt=media&token=81b6abe0-23b2-4e79-b3e1-77050c86baaf'

export const MainLayout = () => {
  return (
    <Container>
      <Sidebar />
      <Box pos="absolute" top="0" left="72px" right="0">
        <Flex
          bg="backgroundHeader"
          h="56px"
          justifyContent="space-between"
          alignItems="center"
          px="20px"
        >
          <Text variant="tertiary">Projects</Text>
          <Flex>
            <Box pos="relative">
              <Notification />
              <Box pos="absolute" top="0" right="0">
                <Active />
              </Box>
            </Box>
            <Box mx="6">
              <Help />
            </Box>
            <Avatar
              boxSize="6"
              icon={<Img src={avatar} alt="Avatar active" />}
            />
          </Flex>
        </Flex>
        <Flex mt="20px" mb="28px" mx="20px" justifyContent="space-between">
          <Flex w="370px" border="2px solid #E2E8F0" borderRadius="6px">
            <MenuSelect
              leftIcon={<Filter />}
              rightIcon={<Dropdown />}
              title="All"
              itemList={menuOptions.listDropdown}
            />
            <Search />
          </Flex>
          <Button leftIcon={<AddIcon />} variant="solid">
            Add project
          </Button>
        </Flex>
        <StatusGroup />
      </Box>
    </Container>
  )
}
