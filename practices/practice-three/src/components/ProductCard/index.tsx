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
} from '@chakra-ui/react';
import { preload } from 'swr';
import { memo } from 'react';
import { Link } from 'react-router-dom';

// Types
import { IProduct } from '@/types';

// Services
import { fetchData } from '@/services';

// Constants
import { BASE_URL } from '@/constants';

// Stores
import { cartStore } from '@/stores';

// Components
import { Heart, InActiveStar, Star } from '../Icons';

interface IProductCard {
  props: IProduct;
}

const ProductCard = ({ props }: IProductCard) => {
  const { id, images, name, currency, price, quantity, reviews, ratings } =
    props;

  const handleHoverCard = () => {
    preload(`${BASE_URL}${id}`, fetchData);
  };

  const { addSingleProduct } = cartStore();

  const renderStar = () => {
    const starNumbers = Array.from({ length: ratings || 0 }).fill(0);

    return (
      <Center>
        {starNumbers.map((_, index) => (
          <Star key={index} />
        ))}
        {Array.from({ length: 5 - (ratings || 0) }).map((_, index) => (
          <InActiveStar key={index} />
        ))}
      </Center>
    );
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleAddSingleProduct = (e: any) => {
    e.preventDefault();
    addSingleProduct(props);
  };

  return (
    <Card
      onMouseOver={handleHoverCard}
      aria-label="cardItem"
      maxW="sm"
      width="305px"
      overflow="hidden"
      key={id}
    >
      <CardBody p="0">
        <Stack>
          <Link to={`/product-detail/${id}`}>
            <Image src={images?.[0]} alt={name} width="100%" height="303px" />
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
            <Text variant="primary">{name}</Text>

            <Text fontSize="lg" fontWeight="bold" color="textInactive">
              {currency} {price}
            </Text>
          </Flex>

          <Text color="tertiary" fontWeight="normal" lineHeight="20px">
            {quantity} types of shoos available
          </Text>

          <Flex gap="6px">
            <Center>{renderStar()}</Center>

            <Text color="tertiary" fontSize="sm">
              ({reviews?.length})
            </Text>
          </Flex>

          <Button
            variant="solid"
            width="50%"
            my="25px"
            onClick={handleAddSingleProduct}
          >
            Add To Cart
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default memo(ProductCard);
