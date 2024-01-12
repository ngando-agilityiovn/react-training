// import { Box, Container, Flex, Spinner, Text } from '@chakra-ui/react'

// Constants
// import { CARD_DATA, PAGINATION_DATA } from '@/constants'

import MainLayout from '@/MainLayout'
import ProductDetail from '@/components/ProductDetail'

// Components
// import { Pagination, ProductList, Sidebar } from '@/components'

// interface IHome {
//   isLoadingProjects?: boolean
// }

const Home = () => {
  return (
    <>
      <MainLayout />
      {/* <Container maxW="1280px" pt="49px" px={0}>
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
              <ProductList data={CARD_DATA} />
            )}
            <Pagination data={PAGINATION_DATA} />
          </Box>
        </Flex>
      </Container> */}
      <ProductDetail />
    </>
  )
}

export default Home
