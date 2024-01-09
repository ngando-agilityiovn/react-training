import { Container, Flex } from '@chakra-ui/react'

// Constants
import { CARDDATA, TEXTDATA } from '@/constants'

// Components
import Sidebar from './Sidebar'
import ListProduct from './ListProduct'

const Product = () => {
  return (
    <Container maxW="1280px" pt="49px" px={0}>
      <Flex gap={21}>
        <Sidebar />
        <ListProduct cardData={CARDDATA} textData={TEXTDATA} />
      </Flex>
    </Container>
  )
}

export default Product
