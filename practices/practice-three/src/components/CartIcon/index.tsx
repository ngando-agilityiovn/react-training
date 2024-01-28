import { Button, Text } from '@chakra-ui/react';

// Store
import { cartStore } from '@/stores';

// Icon components
import { Cart } from '../Icons';

const CartIcon = () => {
  const { carts } = cartStore((state) => state);
  return (
    <Button
      w="50px"
      h="50px"
      borderRadius="full"
      backgroundColor="desertStorm"
      border="none"
    >
      <Cart />
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
        aria-label="cartNumber"
      >
        {carts.length}
      </Text>
    </Button>
  );
};

export default CartIcon;
