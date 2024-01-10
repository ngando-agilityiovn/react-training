import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  IconButton,
  Image,
  Spinner,
  Stack,
  Text,
} from '@chakra-ui/react'

// Constants
import { PAGINATION_DATA } from '@/constants'

//  Icon components
import { Heart, InactiveStar, Star } from '../../Icons'

// Components
import Pagination from './Pagination'

interface ICard {
  image: string
  alt: string
  title: string
  price: number
  numeric: string
  reviewQuantity: string
}

interface IListPRoduct {
  cardData: ICard[]
  isLoadingProjects?: boolean
}

const ListProduct = ({ cardData, isLoadingProjects }: IListPRoduct) => {
  return (
    <Box>
      <Text pt="10px" mb="33" variant="title">
        Showing 12 Result from total 230
      </Text>
      {isLoadingProjects ? (
        <Box py="6" textAlign="center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Box>
      ) : (
        <Flex flexWrap="wrap" gap="20px">
          {/* Cart product */}
          {cardData ? (
            <>
              {cardData.map(
                ({
                  image,
                  alt,
                  title,
                  price,
                  numeric,
                  reviewQuantity: numericRating,
                }) => (
                  <Card maxW="sm" width="305px" overflow="hidden">
                    <CardBody p="0">
                      <Stack>
                        <Image
                          src={image}
                          alt={alt}
                          width="100%"
                          height="303px"
                        />
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
                          <Text
                            fontSize="lg"
                            fontWeight="bold"
                            color="textInactive"
                          >
                            ₹ {price}
                          </Text>
                        </Flex>
                        <Text
                          color="tertiary"
                          fontWeight="normal"
                          lineHeight="20px"
                        >
                          {numeric}
                        </Text>
                        <Flex align="center" gap="6px">
                          <Flex>
                            {/* TODO: Implement handle after */}
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                            <InactiveStar />
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
            </>
          ) : null}
        </Flex>
      )}
      <Pagination textData={PAGINATION_DATA} />
    </Box>
  )
}

export default ListProduct
