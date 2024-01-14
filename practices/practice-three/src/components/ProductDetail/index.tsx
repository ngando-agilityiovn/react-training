import { Button, Container, Flex, HStack, Text } from '@chakra-ui/react'

// Constants
import { BENEFIT_DATA, DATA_COLOR, DELIVERY_DATA, SIZE_DATA } from '@/constants'

// Icon components
import { Rating, Comment, WhiteBag } from '../Icons'

// Components
import SizeGroup from './SizeGroup'
import ColorGroup from './ColorGroup'
import Delivery from './Delivery'
import ImageGalleries from './ImageGalleries'
import DescriptionTab from './DescriptionTab'
import NumberPicker from '../NumberPicker'
import { IProduct } from '@/types/product'

const ProductDetail = ({
  name,
  price,
  rating,
  reviews,
  images,
  quantity,
  description
}: IProduct) => {
  const totalView = reviews!.length
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
              {price}
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
                  {rating}
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
          <ColorGroup data={DATA_COLOR} />

          {/* Sizes select */}
          <SizeGroup data={SIZE_DATA} />

          <Flex gap="19px">
            {/* Increase or decrease product quantity */}
            <NumberPicker
              onChangeQuantity={() => {}}
              onDecrease={() => {}}
              onIncrease={() => {}}
              quantity={quantity}
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
        text={description}
        data={BENEFIT_DATA}
      />
    </Container>
  )
}

export default ProductDetail
