import { Button, Container, Flex, HStack, Text } from '@chakra-ui/react'

// Constants
import {
  BENEFIT_DATA,
  DATA_COLOR,
  DELIVERY_DATA,
  IMAGE_PRODUCT,
  SIZE_DATA
} from '@/constants'

// Components
import SizeGroup from './SizeGroup'
import ColorGroup from './ColorGroup'
import Delivery from './Delivery'
import ImageGalleries from './ImageGalleries'
import { Feedback, Reviewer, WhiteCart } from '../Icons'
import ButtonQuantity from '../NumberPicker'
import DescriptionTab from './DescriptionTab'

const ProductDetail = () => {
  return (
    <Container maxW="1280px" pt="49px" px={0}>
      <Flex padding="40px 0" gap={110} flexGrow={'revert'}>
        {/* Images product */}
        <ImageGalleries data={IMAGE_PRODUCT} />

        {/* Information product */}
        <Flex direction={'column'} gap={30}>
          <Text as="span" fontSize={28} fontWeight={600}>
            Giay
          </Text>
          <Text as="span">Teixeira Design Studio</Text>
          <Flex
            borderBottom={'1px solid gainsboro'}
            borderTop={'1px solid gainsboro'}
            padding="46px 0 45px 0"
            gap="41px"
            alignItems="center"
          >
            <Text as="span" fontSize="34px" fontWeight="bold" color="primary">
              $187
            </Text>
            <HStack>
              <Flex
                borderRadius="27px"
                padding="7px 10px"
                gap="7px"
                backgroundColor="linen"
                justifyContent="center"
                alignItems="center"
                w="65px"
              >
                <Feedback />
                <Text color="fuelYellow" fontWeight="semibold" as="span">
                  5
                </Text>
              </Flex>
              <Flex
                alignItems="center"
                gap="7px"
                padding="10px 7px"
                borderRadius="27px"
                background="pattensBlue"
              >
                <Reviewer />
                <Text color="primary" fontWeight="semibold">
                  67 Reviewers
                </Text>
              </Flex>
            </HStack>
          </Flex>
          <ColorGroup data={DATA_COLOR} />
          <SizeGroup data={SIZE_DATA} />
          <Flex gap="19px">
            <ButtonQuantity />
            <Button w="309px" h="59px" variant="solid" gap="10px">
              <WhiteCart />
              Add To Cart
            </Button>
          </Flex>
          <Delivery data={DELIVERY_DATA} />
        </Flex>
      </Flex>
      <DescriptionTab
        title="Product Description"
        text="When it's colder than the far side of the moon and spitting rain too, you've still got to look good. From water-repellent leather to a rugged outsole.
        the far side of the moon and spitting rain too, you've still got to look good. From water-repellent leather to a rugged "
        data={BENEFIT_DATA}
      />
    </Container>
  )
}

export default ProductDetail
