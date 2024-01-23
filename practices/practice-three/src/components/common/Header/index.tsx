// Constants
import CartIcon from '@/components/CartIcon'
import { Logo } from '@/components/Icons'
import Navbar from '@/components/Navbar'
import { NAVBAR } from '@/constants'
import { cartStore } from '@/stores/CartStore'

// Icon components

// Components
import { Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Header = () => {
  const { carts } = cartStore()
  return (
    <Flex py="7" alignItems="center" justifyContent="space-between">
      <Flex gap="60px">
        <Logo />
        <Navbar data={NAVBAR} />
      </Flex>
      <Link to={`/product-cart/`}>
        <CartIcon quantity={carts.length} />
      </Link>
    </Flex>
  )
}

export default Header
