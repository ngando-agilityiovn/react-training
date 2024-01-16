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
import { Link } from 'react-router-dom'
import { Heart, InActiveStar, Star } from '../Icons'
import { IProduct } from '@/types'
import { memo } from 'react'
type Demo = {
  props: IProduct
}
const ProductCard = ({ props }: Demo) => {
  return (
    <Card maxW="sm" width="305px" overflow="hidden" key={props.id}>
      <CardBody p="0">
        <Stack>
          <Link to={`/product-detail/${props.id}`}>
            <Image
              src={props.images[0]}
              alt={props.name}
              width="100%"
              height="303px"
            />
          </Link>

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
            <Text variant="primary">{props.name}</Text>
            <Text fontSize="lg" fontWeight="bold" color="textInactive">
              {props.currency} {props.price}
            </Text>
          </Flex>
          <Text color="tertiary" fontWeight="normal" lineHeight="20px">
            {props.quantity} types of shoos available
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
              ({props.reviews.length})
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

export default memo(ProductCard)
