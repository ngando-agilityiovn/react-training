import { Link } from 'react-router-dom'
import { Flex } from '@chakra-ui/react'

// Constants
import { NAVBAR } from '@/constants'

// Stores
import { cartStore } from '@/stores/CartStore'

// Icon components
import CartIcon from '@/components/CartIcon'
import { Logo } from '@/components/Icons'

// Components
import Navbar from '@/components/Navbar'

const Header = () => {
  const { carts } = cartStore()
  return (
    <Flex py="7" alignItems="center" justifyContent="space-between">
      <Flex gap="60px">
        <Link to={'/'}>
          <Logo />
        </Link>
        <Navbar data={NAVBAR} />
      </Flex>
      <Link to={`/product-cart/`}>
        <CartIcon quantity={carts.length} />
      </Link>
    </Flex>
  )
}

export default Header
