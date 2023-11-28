import { Box, Flex } from '@chakra-ui/react'

// Components
import { Folder, Logo, Setting } from '..'

const Sidebar = () => (
  <Box
    pos="fixed"
    top="0"
    left="0"
    bottom="0"
    w="18"
    px="4"
    pt="4"
    bg="backgroundSidebar"
  >
    <Box mb="10">
      <Logo />
    </Box>
    <Box mb="2.5">
      <Folder />
    </Box>
    <Flex alignItems="center" direction="column">
      <Setting />
    </Flex>
  </Box>
)

export default Sidebar
