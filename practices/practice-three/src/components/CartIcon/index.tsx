import { Box, Button } from '@chakra-ui/react'

// Icon components
import { Cart } from '../Icons'

interface ICartIcon {
  quantity: number
}

const CartIcon = ({ quantity }: ICartIcon) => {
  return (
    <Box pos="relative">
      <Button
        w="50px"
        h="50px"
        borderRadius="full"
        backgroundColor="#f5f1ee"
        border="none"
      >
        <Cart />
      </Button>
      <Button
        w="25px"
        h="25px"
        borderRadius="full"
        backgroundColor="black"
        border="none"
        color="white"
        pos="absolute"
        left="8"
      >
        {quantity}
      </Button>
    </Box>
  )
}

export default CartIcon
