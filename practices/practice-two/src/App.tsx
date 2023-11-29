import { ChakraProvider } from '@chakra-ui/react'
// Theme
import { theme } from '@/themes'

// Components
import { DashboardLayout } from '@/layouts'

// Pages
import { ProjectsPages } from '@/pages'

const App = () => (
  <ChakraProvider theme={theme}>
    <DashboardLayout title="Projects" titleNumeric={9}>
      {/* NOTE: Add more pages bellow or react router here */}
      <ProjectsPages />
    </DashboardLayout>
  </ChakraProvider>
)

export default App
