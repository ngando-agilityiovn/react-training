import { Box, Flex } from '@chakra-ui/react'

// Components
import { FolderIcon, LogoIcon, SettingIcon } from '../Icons'

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
      <LogoIcon />
    </Box>
    <Box mb="2.5">
      <FolderIcon />
    </Box>
    <Flex alignItems="center" direction="column">
      <SettingIcon />
    </Flex>
  </Box>
)

export default Sidebar
