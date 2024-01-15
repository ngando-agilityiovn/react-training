import { Box, Container, Flex, Spinner, Text } from '@chakra-ui/react'

// Constants
import { CARD_DATA, PAGINATION_DATA } from '@/constants'

import MainLayout from '@/MainLayout'

// Components
import { Pagination, ProductList, Sidebar } from '@/components'
import ProductCart from '../ProductCart'

interface IHome {
  isLoadingProjects?: boolean
}

const Home = ({ isLoadingProjects }: IHome) => {
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
              <ProductList data={CARD_DATA} />
            )}
            <Pagination data={PAGINATION_DATA} />
          </Box>
        </Flex>
      </Container>
      <ProductCart
        quantity={0}
        image={'https://source.unsplash.com/random/587x691/?fashion'}
        name={'Jean '}
        currency={'$'}
        price={103000}
      />
    </>
  )
}

export default Home
