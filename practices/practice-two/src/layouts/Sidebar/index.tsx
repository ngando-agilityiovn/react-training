import { Box, Flex } from '@chakra-ui/react'
import { Folder, Logo, Setting } from '../../components'

export const Sidebar = () => (
  <Box
    bg="backgroundSnavbar"
    pos="fixed"
    top="0"
    left="0"
    bottom="0"
    w="72px"
    px="16px"
    pt="16px"
  >
    <Box mb="40px">
      <Logo />
    </Box>
    <Box mb="10px">
      <Folder />
    </Box>
    <Flex alignItems="center" flexDirection="column">
      <Setting />
    </Flex>
  </Box>
)
