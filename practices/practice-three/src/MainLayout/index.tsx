import { Box, Container } from '@chakra-ui/react'
import { ReactNode, memo } from 'react'

// Components
import { Banner, Header } from '@/components'
import { useLocation } from 'react-router-dom'

interface IMainLayout {
  children: ReactNode
}

const MainLayout = ({ children }: IMainLayout) => {
  const location = useLocation()
  console.log('location', location)

  return (
    <Container maxW="1280px" px={0}>
      <Header />
      {location.pathname === '/' ? <Banner /> : null}
      <Box>{children}</Box>
    </Container>
  )
}

export default memo(MainLayout)
