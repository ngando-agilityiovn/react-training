import { ChakraProvider } from '@chakra-ui/react'

// Theme
import { theme } from '@/themes'

// Components
import { MainLayout } from '@/components'

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <MainLayout />
    </ChakraProvider>
  )
}
