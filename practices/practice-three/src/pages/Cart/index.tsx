import { DeleteIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Select,
  Text
} from '@chakra-ui/react'
import { useCallback, useState } from 'react'

// Constants
import { SIZE_OPTIONS } from '@/constants'

// Types
import { IProduct, ISise } from '@/types'

// Stores
import { cartStore } from '@/stores'

// Components
import { ColorGroup, NumberPicker, DeleteModal } from '@/components'

const Cart = () => {
  const [removedItem, setRemovedItem] = useState('')
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)

  const {
    carts,
    removeProducts,
    updateProductColor,
    updateProductSize,
    updateProductQuantity
  } = cartStore()

  const handleChangeColorProduct = (value: string, idProduct: string) => {
    updateProductColor(value, idProduct)
  }

  const handleChangeSizeProduct = (value: string, idProduct: string) => {
    updateProductSize(value, idProduct)
  }

  let total = 0

  carts?.forEach((item) => (total += item.price! * item.quantity!))

  const handleToggleDeleteModal = () => {
    setIsOpenDeleteModal((prevIsOpenDeleteModal) => !prevIsOpenDeleteModal)
  }

  const handleClickRemove = (id: string) => {
    handleToggleDeleteModal()
    setRemovedItem(id)
  }

  const handleRemoveProduct = () => {
    removeProducts(removedItem)
    handleToggleDeleteModal()
  }

  const handleDecrease = useCallback(
    (productId: string) => {
      updateProductQuantity(productId, 'decrease')
    },
    [updateProductQuantity]
  )

  const handleIncrease = useCallback(
    (productId: string) => {
      updateProductQuantity(productId, 'increase')
    },
    [updateProductQuantity]
  )

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

        {carts?.map(
          ({
            id,
            quantity,
            name,
            images,
            currency,
            price,
            size,
            color
          }: IProduct) => {
            return (
              <HStack
                mt="58px"
                gap="48px"
                borderBottom="1px solid gainsboro"
                flexWrap="wrap"
                key={id}
              >
                <Box top="0px" mb="31px">
                  <Image
                    src={images?.[0]}
                    alt={name}
                    width="100%"
                    height="303px"
                  />
                </Box>
                <Box mb="31px">
                  <Box mb="24px">
                    <Text color="gray700" fontSize="24px" mb="16px">
                      {name}
                    </Text>
                    <Text
                      as="span"
                      color="midnightExpress"
                      fontWeight="bold"
                      fontSize="16px"
                    >
                      {currency}
                      {price}
                    </Text>
                  </Box>
                  <ColorGroup
                    color={color}
                    onChangeValue={(value) =>
                      handleChangeColorProduct(value, id!)
                    }
                  />
                  <Flex gap="24px" justifyContent="space-between">
                    <HStack>
                      <Select
                        w="192px"
                        h="40px"
                        borderColor="midnightExpress"
                        border="1px solid"
                        defaultValue={size}
                        onChange={(e) =>
                          handleChangeSizeProduct(e.target.value, id!)
                        }
                      >
                        {SIZE_OPTIONS.map(({ label, value }: ISise) => {
                          return (
                            <option
                              key={value}
                              value={value}
                              defaultValue={value}
                            >
                              Size: {label}
                            </option>
                          )
                        })}
                      </Select>
                      <NumberPicker
                        quantity={quantity!}
                        onDecrease={() => handleDecrease(id!)}
                        onIncrease={() => handleIncrease(id!)}
                      />
                    </HStack>
                    <Button
                      variant="ghost"
                      leftIcon={<DeleteIcon />}
                      onClick={() => handleClickRemove(id!)}
                    >
                      Remove
                    </Button>
                  </Flex>
                </Box>
              </HStack>
            )
          }
        )}
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

      <DeleteModal
        onOpenDeleteModal={isOpenDeleteModal}
        onDeleteProduct={handleRemoveProduct}
        onToggleModal={handleToggleDeleteModal}
      />
    </Container>
  )
}

export default Cart
