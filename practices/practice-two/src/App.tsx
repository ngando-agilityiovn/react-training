import { ChakraProvider, Text } from '@chakra-ui/react'

export const App = () => {
  return (
    <>
      <ChakraProvider>
        <Text>Hello</Text>
      </ChakraProvider>
    </>
  )
}
