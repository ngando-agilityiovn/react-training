import { useState } from 'react'
import { DeleteIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Select,
  Text
} from '@chakra-ui/react'

// Stores
import { cartStore } from '@/stores'

// Types
import { IProduct, ISise } from '@/types'

// Constants
import { SIZE_OPTIONS } from '@/constants'

// Components
import { ColorGroup, NumberPicker } from '../common'
import DeleteModal from '../DeleteModal'

export const ListCart = () => {
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

  const handleClickRemove = (id: string) => {
    handleToggleDeleteModal()
    setRemovedItem(id)
  }

  const handleToggleDeleteModal = () => {
    setIsOpenDeleteModal((prevIsOpenDeleteModal) => !prevIsOpenDeleteModal)
  }

  const handleRemoveProduct = () => {
    removeProducts(removedItem)
    handleToggleDeleteModal()
  }
  return (
    <>
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
                      onDecrease={() =>
                        updateProductQuantity(id!, 'decrease', quantity)
                      }
                      onIncrease={() =>
                        updateProductQuantity(id!, 'increase', quantity)
                      }
                      onChangeQuantity={(e) =>
                        updateProductQuantity(
                          id!,
                          undefined,
                          parseInt(e.target.value)
                        )
                      }
                      onBlur={() => updateProductQuantity(id!, 'increase', 0)}
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

      <DeleteModal
        onOpenDeleteModal={isOpenDeleteModal}
        onDeleteProduct={handleRemoveProduct}
        onToggleModal={handleToggleDeleteModal}
      />
    </>
  )
}

export default ListCart
