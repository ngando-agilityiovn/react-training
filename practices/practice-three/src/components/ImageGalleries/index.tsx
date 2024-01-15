import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Center, Flex, Image } from '@chakra-ui/react'
import { useState } from 'react'

interface IDetailProduct {
  data: string[]
}

const ImageGalleries = ({ data }: IDetailProduct) => {
  const [indexImage, setIndexImage] = useState(0)

  const currentImage = data?.[indexImage]

  // Handle click next image
  const handleNextClick = () => {
    setIndexImage((prevIndex): number =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    )
  }

  // Handle click prev image
  const handlePrevClick = () => {
    setIndexImage((prevIndex): number =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    )
  }

  return (
    <Box>
      <Image width="587" height="691" src={currentImage} />
      <Flex mt={37} gap="10px">
        <Center>
          <ChevronLeftIcon onClick={handlePrevClick} />
        </Center>
        {data?.map((item) => <Image w="115px" h="115px" src={item} />)}
        <Center>
          <ChevronRightIcon onClick={handleNextClick} />
        </Center>
      </Flex>
    </Box>
  )
}

export default ImageGalleries
