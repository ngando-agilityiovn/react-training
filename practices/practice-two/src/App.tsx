import { ChakraProvider } from '@chakra-ui/react'

// Theme
import { theme } from '@/themes'

// Pages
import { Dashboard } from '@/pages'

// Components
import { MainLayout } from './layouts'

const App = () => (
  <ChakraProvider theme={theme}>
    <MainLayout title="Projects" titleNumeric={9}>
      {/* NOTE: Add more pages below or react router here */}
      <Dashboard />
    </MainLayout>
  </ChakraProvider>
)

export default App
