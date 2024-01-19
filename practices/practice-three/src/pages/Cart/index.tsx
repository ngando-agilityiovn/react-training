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

// Constants
import { DATA_COLOR, SIZE_OPTIONS } from '@/constants'

// Components
import { ColorGroup, NumberPicker } from '@/components'
import { IProduct, ISise } from '@/types'
import { cartStore } from '@/stores/CartStore'
import { useState } from 'react'
import ProjectDeleteModal from '@/components/DeleteModal'

const Cart = () => {
  const [idProduct, setIdProduct] = useState('')
  const { carts, handleRemoveFromCart } = cartStore()

  const handleChangeColor = (value: string) => console.log(value, 'color') //Note: Handle change product color

  let total = 0

  carts.forEach((item) => (total += item.price * item.quantity))

  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)

  const handleToggleDeleteModal = (id: string) => {
    setIdProduct(id)
    setIsOpenDeleteModal((prevIsOpenDeleteModal) => !prevIsOpenDeleteModal)
  }

  const handleRemoveProduct = () => {
    handleRemoveFromCart(idProduct)
    setIsOpenDeleteModal(false)
  }

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

        {carts.map(
          ({ id, quantity, name, images, currency, price }: IProduct) => {
            return (
              <HStack
                mt="58px"
                gap="48px"
                borderBottom="1px solid gainsboro"
                flexWrap="wrap"
              >
                <Box top="0px" mb="31px">
                  <Image
                    src={images[0]}
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
                    colors={DATA_COLOR}
                    onChangeValue={handleChangeColor}
                  />
                  <Flex gap="24px" justifyContent="space-between">
                    <HStack>
                      <Select
                        placeholder="Select option"
                        w="192px"
                        h="40px"
                        borderColor="midnightExpress"
                        border="1px solid"
                      >
                        {SIZE_OPTIONS.map(({ label, value }: ISise) => {
                          return <option value={value}>Size: {label}</option>
                        })}
                      </Select>
                      <NumberPicker
                        quantity={quantity}
                        onChangeQuantity={() => {}}
                      />
                    </HStack>
                    <Button
                      variant="ghost"
                      leftIcon={<DeleteIcon />}
                      onClick={() => handleToggleDeleteModal(id)}
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

      <ProjectDeleteModal
        isOpenDeleteModal={isOpenDeleteModal}
        setOpenDeteleModal={setIsOpenDeleteModal}
        deleteProduct={handleRemoveProduct}
      />
    </Container>
  )
}

export default Cart
