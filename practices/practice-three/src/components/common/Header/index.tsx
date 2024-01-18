// Constants
import CartIcon from '@/components/CartIcon'
import { Logo } from '@/components/Icons'
import Navbar from '@/components/Navbar'
import { NAVBAR } from '@/constants'

// Icon components

// Components
import { Flex } from '@chakra-ui/react'

const Header = () => {
  return (
    <Flex py="7" alignItems="center" justifyContent="space-between">
      <Flex gap="60px">
        <Logo />
        <Navbar data={NAVBAR} />
      </Flex>
      <CartIcon quantity={5} />
    </Flex>
  )
}

export default Header
