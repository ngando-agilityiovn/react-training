import { Box, Container, Flex, Spinner, Text } from '@chakra-ui/react'

// Constants
import { PAGINATION_DATA } from '@/constants'

import MainLayout from '@/MainLayout'

// Components
import { Pagination, ProductList, Sidebar } from '@/components'
import { useFetch } from '@/hooks'

interface IHome {
  isLoadingProjects?: boolean
}

const Home = ({ isLoadingProjects }: IHome) => {
  const { data } = useFetch()
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
              <ProductList data={data} />
            )}
            <Pagination data={PAGINATION_DATA} />
          </Box>
        </Flex>
      </Container>
    </>
  )
}

export default Home
