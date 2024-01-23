import { Box, Container, Flex, Spinner, Text } from '@chakra-ui/react'

// Hooks
import { usePagination, useProductList } from '@/hooks'

// Types
import { IProduct } from '@/types'

// Components
import { Banner, Pagination, ProductList, Sidebar } from '@/components'
import { useEffect, useState } from 'react'

const Home = () => {
  const { products } = useProductList()

  const total = products?.length || 0

  const {
    limitedData,
    error,
    isLoading,
    handlePrevPage,
    handleNextPage,
    pageNumbers,
    productLimit,
    handleSelectPage,
    pageIndex,
    handleFilterCategory,
    handleFilterBrand,
    handleFilterSize
  } = usePagination(total)

  const [transformData, setTransformData] = useState<IProduct[]>([])

  const totalTransformData = transformData.length || 0

  const pageNumberTransformData = []
  const pageNumberFilter = totalTransformData / productLimit

  for (let i = 0; i < pageNumberFilter; i++) {
    pageNumberTransformData.push(i)
  }

  useEffect(() => {
    limitedData && setTransformData(limitedData)
  }, [limitedData])

  const handleFilterPrice = (value: number) => {
    const dataFilter = limitedData?.filter((item) => item.price! <= value)
    dataFilter?.length && setTransformData(dataFilter)
  }

  return (
    <>
      <Banner />
      <Container maxW="1280px" pt="49px" px={0}>
        <Flex gap={21}>
          <Sidebar
            handleFilterCategory={handleFilterCategory}
            handleFilterBrand={handleFilterBrand}
            handleFilterSize={handleFilterSize}
            handleFilterPrice={handleFilterPrice}
          />
          <Box>
            <Text pt="10px" mb="33" variant="title">
              Showing {limitedData?.length} result from total {total}
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
              <ProductList data={transformData} productLimit={productLimit} />
            )}
            {pageNumbers.length >= 1 && (
              <Pagination
                onPrevPage={handlePrevPage}
                onNextPage={handleNextPage}
                pageNumbers={
                  transformData?.length ? pageNumberTransformData : pageNumbers
                }
                onSelectPage={handleSelectPage}
                pageIndex={pageIndex}
                total={totalTransformData ? totalTransformData : total}
              />
            )}
          </Box>
        </Flex>
      </Container>
    </>
  )
}

export default Home
