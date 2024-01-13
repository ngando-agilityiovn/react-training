import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Center, Flex, Image } from '@chakra-ui/react'
import { useState } from 'react'

interface IDetailProduct {
  data?: string[]
}

const ImageGalleries = ({ data }: IDetailProduct) => {
  const [indexImage, setIndexImage] = useState(0)

  const currentImage = data?.[indexImage]

  const handleNext = () => {
    setIndexImage((prevIndex): number => {
      if (prevIndex === data!.length - 1) {
        return 0
      }
      return prevIndex + 1
    })
  }
  const handlePrev = () => {
    setIndexImage((prevIndex): number => {
      if (prevIndex === 0) {
        return data!.length - 1
      }
      return prevIndex - 1
    })
  }

  return (
    <Box>
      <Image width="587" height="691" src={currentImage} />
      <Flex mt={37} gap="10px">
        <Center>
          <ChevronLeftIcon onClick={() => handlePrev()} />
        </Center>
        {data?.map((item, index) => (
          <Image
            w="115px"
            h="115px"
            src={item}
            onClick={() => {
              setIndexImage(index)
            }}
          />
        ))}
        <Center>
          <ChevronRightIcon onClick={() => handleNext()} />
        </Center>
      </Flex>
    </Box>
  )
}

export default ImageGalleries
