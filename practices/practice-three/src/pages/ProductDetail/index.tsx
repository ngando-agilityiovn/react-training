import { Button, Container, Flex, HStack, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

// Constants
import { DELIVERY_DATA } from '@/constants'

// Hooks
import { useProductDetail } from '@/hooks'

// Components
import {
  ColorGroup,
  Comment,
  Delivery,
  DescriptionTab,
  ImageGalleries,
  NumberPicker,
  Rating,
  SizeGroup,
  WhiteBag
} from '@/components'
import { useBearStore } from '@/stores/CartStore'

const ProductDetail = () => {
  const { id } = useParams()

  const { productDetail } = useProductDetail(id)

  const {
    reviews,
    images,
    name,
    price,
    currency,
    ratings,
    colors,
    description,
    information
  } = productDetail || {}

  const { carts, handleAddToCart } = useBearStore()

  const handleSubmit = () => {
    // Get information product

    handleAddToCart(name)
  }
  console.log(carts)
  const totalView = reviews?.length

  const handleChangeColor = (value: string) => console.log(value, 'color') //Note: Handle change product color

  const handleChangeSize = (value: string) => console.log(value, 'Size') // Note: Handle change product size

  return (
    <Container maxW="1280px" pt="49px" px={0}>
      <Flex padding="40px 0" gap={110} flexGrow={'revert'}>
        {/* Images product */}
        <ImageGalleries data={images} />

        {/* Information product */}
        <Flex direction={'column'} gap={30}>
          <Text as="span" fontSize={28} fontWeight={600}>
            {name}
          </Text>
          <Text as="span" borderBottom="1px solid gainsboro" pb="30px">
            Teixeira Design Studio
          </Text>

          <Flex
            borderBottom="1px solid gainsboro"
            pb="45px"
            gap="41px"
            alignItems="center"
          >
            {/* Product price */}
            <Text as="span" fontSize="34px" fontWeight="bold" color="primary">
              {currency} {price}
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
                borderBottom="1px solid gainsboro"
              >
                <Rating />
                <Text color="fuelYellow" fontWeight="semibold" as="span">
                  {ratings}
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
          <ColorGroup colors={colors} onChangeValue={handleChangeColor} />

          {/* Sizes select */}
          <SizeGroup onChangeValue={handleChangeSize} />

          <Flex gap="19px">
            {/* Increase or decrease product quantity */}
            <NumberPicker onChangeQuantity={() => {}} quantity={1} />

            {/* Add the product to cart */}
            <Button
              w="309px"
              h="59px"
              variant="solid"
              gap="10px"
              onClick={handleSubmit}
            >
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
        text={description}
        data={information}
      />
    </Container>
  )
}

export default ProductDetail
