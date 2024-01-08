import { Container, Flex } from '@chakra-ui/react'

// Constants
import { NAVBAR } from '@/constants'

// Icon components
import { Logo } from '../Icons'

// Components
import Navbar from '../Navbar'
import CartIcon from '../CartIcon'

const Header = () => {
  return (
    <Container maxW="1280px" p="0">
      <Flex py="7" alignItems="center" justifyContent="space-between">
        <Flex gap="60px">
          <Logo />
          <Navbar navbarData={NAVBAR} />
        </Flex>
        <CartIcon quantity={5} />
      </Flex>
    </Container>
  )
}

export default Header
