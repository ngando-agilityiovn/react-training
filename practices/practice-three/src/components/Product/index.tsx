import { Container, Flex } from '@chakra-ui/react'

// Constants
import { CARD_DATA } from '@/constants'

// Components
import Sidebar from './Sidebar'
import ListProduct from './ListProduct'

const Product = () => {
  return (
    <Container maxW="1280px" pt="49px" px={0}>
      <Flex gap={21}>
        <Sidebar />
        <ListProduct cardData={CARD_DATA} />
      </Flex>
    </Container>
  )
}

export default Product
