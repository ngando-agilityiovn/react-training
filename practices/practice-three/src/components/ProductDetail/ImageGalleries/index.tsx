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
  const handleNext = () => {
    setIndexImage((prevIndex): number => {
      if (prevIndex === data.length - 1) {
        return 0
      }
      return prevIndex + 1
    })
  }

  const handleNextClick = () => {
    handleNext()
  }

  // Handle click prev image
  const handlePrev = () => {
    setIndexImage((prevIndex): number => {
      if (prevIndex === 0) {
        return data.length - 1
      }
      return prevIndex - 1
    })
  }

  const handlePrevClick = () => {
    handlePrev()
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
