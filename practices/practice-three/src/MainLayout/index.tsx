import { Box, Container } from '@chakra-ui/react'
import { ReactNode } from 'react'

// Components
import { Header } from '@/components'

interface IMainLayout {
  children: ReactNode
}

const MainLayout = ({ children }: IMainLayout) => {
  return (
    <Container maxW="1280px" px={0}>
      <Header />
      <Box>{children}</Box>
    </Container>
  )
}

export default MainLayout
