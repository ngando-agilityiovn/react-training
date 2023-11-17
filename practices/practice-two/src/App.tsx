import { ChakraProvider, Text } from '@chakra-ui/react'

export const App = () => {
  const a = 1

  return (
    <>
      <ChakraProvider>
        <Text>Hello</Text>
      </ChakraProvider>
    </>
  )
}
