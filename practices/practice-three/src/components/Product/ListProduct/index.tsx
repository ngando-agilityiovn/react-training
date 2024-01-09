import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  IconButton,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'

//  Icon components
import { Heart, Star } from '../../Icons'

interface ICard {
  image: string
  alt: string
  title: string
  price: number
  numeric: string
  numericRating: string
}

interface IPagination {
  text: string
}

interface IListPRoduct {
  cardData: ICard[]
  textData: IPagination[]
}

const ListProduct = ({ cardData, textData }: IListPRoduct) => {
  return (
    <Box>
      <Text pt="10px" mb="33" variant="title">
        Showing 12 Result from total 230
      </Text>
      <Flex flexWrap="wrap" gap="20px">
        {/* Cart product */}
        {cardData.map(
          ({ image, alt, title, price, numeric, numericRating }) => (
            <Card maxW="sm" width="305px" overflow="hidden">
              <CardBody p="0">
                <Stack>
                  <Image src={image} alt={alt} width="100%" height="303px" />
                  <IconButton
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
                      background: 'backgroundSuccess ',
                    }}
                    icon={<Heart />}
                  ></IconButton>
                </Stack>
                <Stack mt="22px" pl="21px" pr="17px">
                  <Flex align="center" justify="space-between">
                    <Text variant="primary">{title}</Text>
                    <Text fontSize="lg" fontWeight="bold" color="textInactive">
                      ₹ {price}
                    </Text>
                  </Flex>
                  <Text color="tertiary" fontWeight="normal" lineHeight="20px">
                    {numeric}
                  </Text>
                  <Flex align="center" gap="6px">
                    <Flex>
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                    </Flex>
                    <Text color="tertiary" fontSize="sm">
                      ({numericRating})
                    </Text>
                  </Flex>
                  <Flex justify="space-between" py="25px" gap="11px">
                    <Button
                      variant="solid"
                      width="50%"
                      textTransform="capitalize"
                    >
                      add to cart
                    </Button>
                    <Button
                      variant="outline"
                      width="50%"
                      textTransform="capitalize"
                    >
                      add shorlist
                    </Button>
                  </Flex>
                </Stack>
              </CardBody>
            </Card>
          ),
        )}
      </Flex>

      {/* Button add product into cart */}
      <Flex justifyContent="center" py="8px" mt="63px" gap="8px">
        {textData.map(({ text }) => (
          <Button
            variant="outline"
            background="white"
            borderRadius="4px"
            _hover={{
              background: 'backgroundNumberPagination',
            }}
          >
            {text}
          </Button>
        ))}
      </Flex>
    </Box>
  )
}

export default ListProduct
