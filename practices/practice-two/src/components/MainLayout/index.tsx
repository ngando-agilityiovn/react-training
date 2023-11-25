import { Box, Container, Flex, Img, Text } from '@chakra-ui/react'
import { Active, Help, Notification, Snavbar } from '..'

export const MainLayout = () => {
  return (
    <Container>
      <Snavbar />
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
            <Box mx="24px">
              <Help />
            </Box>
            <Img
              w="24px"
              h="24px"
              src="https://firebasestorage.googleapis.com/v0/b/icon-foot.appspot.com/o/avatar.png?alt=media&token=81b6abe0-23b2-4e79-b3e1-77050c86baaf"
              alt="Avatar active"
            />
          </Flex>
        </Flex>
        <Box></Box>
      </Box>
    </Container>
  )
}
