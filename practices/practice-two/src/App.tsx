import { ChakraProvider, Text } from '@chakra-ui/react'

// Theme
import { theme } from '@/theme'

export const App = () => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Text>Hello</Text>
      </ChakraProvider>
    </>
  )
}
