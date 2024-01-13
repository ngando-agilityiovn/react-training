import { Button, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

// Icon components
import { Cart } from '../Icons'

interface ICartIcon {
  quantity: number
}

const CartIcon = ({ quantity }: ICartIcon) => {
  return (
    <Button
      w="50px"
      h="50px"
      borderRadius="full"
      backgroundColor="desertStorm"
      border="none"
    >
      <Link to="/cartPage">
        <Cart />
      </Link>
      <Text
        as="span"
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
