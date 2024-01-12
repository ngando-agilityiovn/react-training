import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Center, Flex, Image } from '@chakra-ui/react'

interface IImage {
  image: string
  alt: string
}

interface IDetailProduct {
  data: IImage[]
}

const ImageGalleries = ({ data }: IDetailProduct) => {
  return (
    <Box>
      <Image
        width="587"
        height="691"
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      />
      <Flex mt={37} gap="10px">
        <Center>
          <ChevronLeftIcon />
        </Center>
        {data.map(({ image, alt }) => (
          <Image w="115px" h="115px" src={image} alt={alt} />
        ))}
        <Center>
          <ChevronRightIcon />
        </Center>
      </Flex>
    </Box>
  )
}

export default ImageGalleries
