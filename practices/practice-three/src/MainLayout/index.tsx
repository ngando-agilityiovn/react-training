import { Banner, Header } from '@/components'
import { Container } from '@chakra-ui/react'

const MainLayout = () => {
  return (
    <Container maxW="1280px" p="0">
      <Header />
      <Banner />
    </Container>
  )
}

export default MainLayout
