import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react'
import ColorGroup from './ColorGroup'
import { DATA_COLOR, DELIVERY_DATA, SIZE_DATA } from '@/constants'
import SizeGroup from './SizeGroup'
import Delivery from './Delivery'

const DetailProduct = () => {
  return (
    <Container maxW="1280px" pt="49px" px={0}>
      <Flex padding="40px 0" gap={110}>
        <Box>
          <Image
            width={587}
            height={691}
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          />
          <Flex mt={37}>
            {/* {image.map((src) => (
            <Image src={src} alt={name} />
          ))} */}
            <Button>{`<`}</Button>
            <Image
              width={115}
              height={115}
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            />
            <Image
              width={115}
              height={115}
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            />
            <Image
              width={115}
              height={115}
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            />
            <Image
              width={115}
              height={115}
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            />
            <Button>{`>`}</Button>
          </Flex>
        </Box>
        <Flex direction={'column'} gap={30} width={582}>
          <Text as="span" fontSize={28} fontWeight={600}>
            Giay
          </Text>
          <Text as="span">Teixeira Design Studio</Text>
          <Flex
            borderBottom={'1px solid red'}
            borderTop={'1px solid red'}
            padding="46px 0 45px 0"
          >
            <Text as="span">$187</Text>
            <HStack>
              <Text as="span">5</Text>
              <Text>67 reviewers</Text>
            </HStack>
          </Flex>
          <ColorGroup dataColor={DATA_COLOR} />
          <SizeGroup dataSize={SIZE_DATA} />
          <Flex>
            <HStack
              w="130px"
              borderColor="red"
              border="1px solid"
              borderRadius="100px"
            >
              <Button border="none">-</Button>
              <Button border="none">+</Button>
            </HStack>
            <Button>Add to cart</Button>
          </Flex>
          <Delivery deliveryDate={DELIVERY_DATA} />
        </Flex>
      </Flex>
    </Container>
  )
}

export default DetailProduct
