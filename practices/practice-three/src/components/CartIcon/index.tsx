import { Button, Text } from '@chakra-ui/react'

// Icon components
import { Cart } from '../Icons'
import { Link } from 'react-router-dom'

interface ICartIcon {
  quantity: number
}

const CartIcon = ({ quantity }: ICartIcon) => {
  return (
    <Button
      w="50px"
      h="50px"
      borderRadius="full"
      backgroundColor="red50"
      border="none"
    >
      <Link to="/cartPage">
        <Cart />
      </Link>
      <Text
        display="block"
        pos="absolute"
        mb="35px"
        ml="45px"
        backgroundColor="secondary"
        w="28px"
        borderRadius="50%"
        color="white"
      >
        {quantity}
      </Text>
    </Button>
  )
}

export default CartIcon
