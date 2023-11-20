import { ChakraProvider, Text, extendTheme } from '@chakra-ui/react'

import themeConfiguration from '@/theme'

const defaultTheme = extendTheme(themeConfiguration.default)

export const App = () => {
  return (
    <>
      <ChakraProvider theme={defaultTheme}>
        <Text>Hello</Text>
      </ChakraProvider>
    </>
  )
}
