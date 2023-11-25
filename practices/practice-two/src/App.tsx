import { ChakraProvider, Text } from '@chakra-ui/react'

// Theme
import { theme } from '@/themes'
import { MainLayout } from './components'

export const App = () => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Text>Hello</Text>
        <MainLayout />
      </ChakraProvider>
    </>
  )
}
