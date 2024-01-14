import {
  Button,
  Container,
  Flex,
  HStack,
  Stack,
  Text,
  useRadioGroup
} from '@chakra-ui/react'
import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// Constants
import { DELIVERY_DATA, SIZE_DATA } from '@/constants'

// Helpers
import { productDetail } from '@/helpers'

// Types
import { IProduct } from '@/types'

// Icon components
import { Rating, Comment, WhiteBag } from '../Icons'

// Components
import ImageGalleries from './ImageGalleries'
import DescriptionTab from './DescriptionTab'
import NumberPicker from '../NumberPicker'
import Delivery from './Delivery'
import SizeGroup from './SizeGroup'
import ColorGroup from '../ColorGroup'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState<IProduct>()
  const handleGetProduct = useCallback(async () => {
    const productData = await productDetail(
      'https://657c3495853beeefdb98e5f4.mockapi.io/Product',
      id!
    )
    setProduct(productData)
  }, [id])

  useEffect(() => {
    if (id) {
      handleGetProduct()
    }
  }, [handleGetProduct, id])

  const totalView = product?.reviews.length

  const { getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: 'Kevin'
  })
  return (
    <Container maxW="1280px" pt="49px" px={0}>
      <Flex padding="40px 0" gap={110} flexGrow={'revert'}>
        {/* Images product */}
        <ImageGalleries data={product?.images} />

        {/* Information product */}
        <Flex direction={'column'} gap={30}>
          <Text as="span" fontSize={28} fontWeight={600}>
            {product?.name}
          </Text>
          <Text as="span">Teixeira Design Studio</Text>

          <Flex
            border="1px solid gainsboro"
            borderWidth="1px 0px 1px 0px"
            padding="46px 0 45px 0"
            gap="41px"
            alignItems="center"
          >
            {/* Product price */}
            <Text as="span" fontSize="34px" fontWeight="bold" color="primary">
              {product?.currency} {product?.price}
            </Text>

            <HStack>
              {/* Quantity rating */}
              <Flex
                borderRadius="27px"
                padding="7px 10px"
                gap="7px"
                backgroundColor="linen"
                justifyContent="center"
                alignItems="center"
                w="65px"
              >
                <Rating />
                <Text color="fuelYellow" fontWeight="semibold" as="span">
                  {product?.ratings}
                </Text>
              </Flex>

              {/* Total comments  */}
              <Flex
                alignItems="center"
                gap="7px"
                padding="10px 7px"
                borderRadius="27px"
                background="pattensBlue"
              >
                <Comment />
                <Text color="primary" fontWeight="semibold">
                  {totalView} Reviews
                </Text>
              </Flex>
            </HStack>
          </Flex>

          {/* Colors option */}
          <Stack {...getRootProps()}>
            <Text color="backgroundWarning" fontWeight="medium" mb="14px">
              Choose a Color
            </Text>
            <HStack>
              {product?.colors.map((item) => {
                return (
                  <ColorGroup
                    key={item}
                    color={item}
                    {...getRadioProps({ value: item })}
                  />
                )
              })}
            </HStack>
          </Stack>

          {/* Sizes select */}
          <Stack
            {...getRootProps()}
            border="1px solid gainsboro"
            borderWidth="1px 0px 1px 0px"
            py="41px"
          >
            <Text color="backgroundWarning" fontWeight="medium" mb="14px">
              Choose a Size
            </Text>
            <SizeGroup options={SIZE_DATA} />
          </Stack>

          <Flex gap="19px">
            {/* Increase or decrease product quantity */}
            <NumberPicker
              onChangeQuantity={() => {}}
              onDecrease={() => {}}
              onIncrease={() => {}}
              quantity={product?.quantity}
            />

            {/* Add the product to cart */}
            <Button w="309px" h="59px" variant="solid" gap="10px">
              <WhiteBag />
              Add To Cart
            </Button>
          </Flex>

          {/* Product returns policy  */}
          <Delivery data={DELIVERY_DATA} />
        </Flex>
      </Flex>

      {/* Product information */}
      <DescriptionTab
        title="Product Description"
        text={product?.description}
        data={product?.information}
      />
    </Container>
  )
}

export default ProductDetail
