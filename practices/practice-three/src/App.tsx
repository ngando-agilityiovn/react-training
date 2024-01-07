import { ChakraProvider, Text } from '@chakra-ui/react'

// Themes
import { theme } from '@/themes'

const App = () => (
  <ChakraProvider theme={theme}>
    <Text>Hello World</Text>
  </ChakraProvider>
)

export default App
