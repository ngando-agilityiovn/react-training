import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Center, Flex, Image } from '@chakra-ui/react';
import { memo, useCallback, useState } from 'react';

interface IDetailProduct {
  data?: string[];
}

const ImageGalleries = ({ data }: IDetailProduct) => {
  const [indexImage, setIndexImage] = useState(0);

  const currentImage = data?.[indexImage];

  // Handle click next image
  const handleNextClick = useCallback(() => {
    setIndexImage((prevIndex): number =>
      prevIndex === data!.length - 1 ? 0 : prevIndex + 1
    );
  }, [data]);

  // Handle click prev image
  const handlePrevClick = useCallback(() => {
    setIndexImage((prevIndex): number =>
      prevIndex === 0 ? data!.length - 1 : prevIndex - 1
    );
  }, [data]);

  return (
    <Box>
      <Image
        data-testid="currentImage"
        width="587"
        height="691"
        src={currentImage}
        borderRadius="17px"
      />
      <Flex mt={37} gap="10px">
        <Center>
          <ChevronLeftIcon
            onClick={handlePrevClick}
            cursor="pointer"
            data-testid="prevClick"
          />
        </Center>
        {data?.map((item, index) => (
          <Image
            key={index}
            w="115px"
            h="115px"
            src={item}
            onClick={() => {
              setIndexImage(index);
            }}
            cursor="pointer"
            borderRadius="14px"
          />
        ))}
        <Center>
          <ChevronRightIcon
            onClick={handleNextClick}
            cursor="pointer"
            data-testid="nextClick"
          />
        </Center>
      </Flex>
    </Box>
  );
};

export default memo(ImageGalleries);
