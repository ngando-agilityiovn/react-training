import { Box, Container, Flex, Spinner, Text } from '@chakra-ui/react'

import MainLayout from '@/MainLayout'

// Hooks
import { useFetch } from '@/hooks'

// Components
import { Pagination, ProductList, Sidebar } from '@/components'

const Home = () => {
  const {
    data,
    error,
    isLoading,
    handlePrevPage,
    handleNextPage,
    pageButtons,
    limit,
    selectPage,
    pageIndex
  } = useFetch()

  return (
    <>
      <MainLayout />
      <Container maxW="1280px" pt="49px" px={0}>
        <Flex gap={21}>
          <Sidebar />
          <Box>
            <Text pt="10px" mb="33" variant="title">
              Showing 12 Result from total 230
            </Text>
            {isLoading ? (
              <Box py="6" textAlign="center">
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="xl"
                />
              </Box>
            ) : error ? (
              <Text variant="primary" color="red">
                Not found data
              </Text>
            ) : (
              <ProductList data={data} limit={limit} />
            )}
            <Pagination
              handlePrevPage={handlePrevPage}
              handleNextPage={handleNextPage}
              pageButtons={pageButtons}
              selectPage={selectPage}
              pageIndex={pageIndex}
            />
          </Box>
        </Flex>
      </Container>
    </>
  )
}

export default Home
