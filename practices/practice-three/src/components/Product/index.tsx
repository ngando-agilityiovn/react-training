import { Box, Container, Flex, Spinner, Text } from '@chakra-ui/react'

// Constants
import { CARD_DATA, PAGINATION_DATA } from '@/constants'

// Components
import Sidebar from './Sidebar'
import ListProduct from './ListProduct'
import Pagination from './Pagination'

interface IProduct {
  isLoadingProjects?: boolean
}

const Product = ({ isLoadingProjects }: IProduct) => {
  return (
    <Container maxW="1280px" pt="49px" px={0}>
      <Flex gap={21}>
        <Sidebar />

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
            <ListProduct cardData={CARD_DATA} />
          )}
          <Pagination textData={PAGINATION_DATA} />
        </Box>
      </Flex>
    </Container>
  )
}

export default Product
