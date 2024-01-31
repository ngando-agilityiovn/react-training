import { Box, Button, Container, Flex, Spinner, Text } from '@chakra-ui/react';
import { Suspense, lazy } from 'react';

// Stores
import { cartStore } from '@/stores';

// Types
import { IProduct } from '@/types';

// Components
import { ErrorBoundary } from '@/components';

const ListCart = lazy(() => import('@/components/ListCart'));

const Cart = () => {
  const {
    carts,
    removeProducts,
    updateProductColor,
    updateProductSize,
    updateProductQuantity
  } = cartStore();

  let total = 0;

  carts?.forEach((item: IProduct) => (total += item.price! * item.quantity!));

  return (
    <Container maxW="1280px" p="0">
      <Box mb="87px">
        <Box mt="20px" borderTop="1px solid" borderColor="whiteSmoke">
          <Text
            mt="68px"
            mb="20px"
            as="h1"
            color="textWarning"
            fontSize="40px"
            fontWeight="bold"
          >
            Cart page
          </Text>
          <Text fontSize="16px">
            Manage your cart. You can update any information before checkout
          </Text>
        </Box>

        <Suspense
          fallback={
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          }
        >
          <ErrorBoundary>
            <ListCart
              data={carts}
              removeProducts={removeProducts}
              updateProductColor={updateProductColor}
              updateProductSize={updateProductSize}
              updateProductQuantity={updateProductQuantity}
            />
          </ErrorBoundary>
        </Suspense>
      </Box>

      {/* Total price of those products in cart */}
      <Flex flexDirection="column" alignItems="flex-end">
        <Text color="primary" fontWeight="bold" fontSize="34px" mb="57px">
          Total: {total}$
        </Text>
        <Button variant="solid" padding="17px 81px">
          Go to check
        </Button>
      </Flex>
    </Container>
  );
};

export default Cart;
