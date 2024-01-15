import {
  Button,
  Card,
  CardBody,
  Center,
  Flex,
  IconButton,
  Image,
  Stack,
  Text
} from '@chakra-ui/react'

//  Icon components
import { Heart, InActiveStar, Star } from '../Icons'

interface IProduct {
  image: string
  alt: string
  title: string
  price: number
  numeric: string
  reviewQuantity: string
}

interface IProductList {
  data: IProduct[]
}

const ProductList = ({ data }: IProductList) => {
  return (
    <Flex flexWrap="wrap" gap="5">
      {/* Cart product */}
      {data?.map(
        ({
          image,
          alt,
          title,
          price,
          numeric,
          reviewQuantity: numericRating
        }) => {
          return (
            <Card maxW="sm" width="305px" overflow="hidden">
              <CardBody p="0">
                <Stack>
                  <Image src={image} alt={alt} width="100%" height="303px" />
                  <IconButton
                    rounded=""
                    isRound={true}
                    variant="solid"
                    aria-label="Done"
                    fontSize="20px"
                    width="46px"
                    height="46px"
                    top="12px"
                    right="8px"
                    position="absolute"
                    background="white"
                    border="none"
                    _hover={{
                      background: 'backgroundSuccess '
                    }}
                    icon={<Heart />}
                  />
                </Stack>
                <Stack mt="22px" pl="21px" pr="17px">
                  <Flex justify="space-between">
                    <Text variant="primary">{title}</Text>
                    <Text fontSize="lg" fontWeight="bold" color="textInactive">
                      ₹ {price}
                    </Text>
                  </Flex>
                  <Text color="tertiary" fontWeight="normal" lineHeight="20px">
                    {numeric}
                  </Text>
                  <Flex gap="6px">
                    <Center>
                      {/* TODO: Implement handle after */}
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <InActiveStar />
                    </Center>
                    <Text color="tertiary" fontSize="sm">
                      ({numericRating})
                    </Text>
                  </Flex>

                  <Button variant="solid" width="50%" my="25px">
                    Add To Cart
                  </Button>
                </Stack>
              </CardBody>
            </Card>
          )
        }
      )}
    </Flex>
  )
}

export default ProductList
