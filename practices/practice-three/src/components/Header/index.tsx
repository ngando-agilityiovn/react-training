import { Flex } from '@chakra-ui/react'
import { Logo } from '../Icons'
import Navbar from '../Navbar'
import CartIcon from '../CartIcon'

const Header = () => {
  return (
    <Flex py="7" alignItems="center" justifyContent="space-between">
      <Flex gap="60px">
        <Logo />
        <Navbar />
      </Flex>
      <CartIcon quantity={5} />
    </Flex>
  )
}

export default Header
