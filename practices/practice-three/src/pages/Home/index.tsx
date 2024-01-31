import { Box, Container, Flex, Text } from '@chakra-ui/react';
import { Suspense, lazy, useEffect, useState } from 'react';

// Hooks
import { usePagination, useProductList } from '@/hooks';

// Types
import { IProduct } from '@/types';

// Components
import { ErrorBoundary, Loading, Pagination, Sidebar } from '@/components';

const ProductList = lazy(() => import('@/components/ProductList'));

const Home = () => {
  const { products } = useProductList();

  const total = products?.length || 0;

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
  } = usePagination(total);

  const [transformData, setTransformData] = useState<IProduct[]>([]);
  const [priceFilter, setPriceFilter] = useState<number>(0);

  const totalTransformData = transformData.length || 0;

  const pageNumberTransformData = [];
  const pageNumberFilter = totalTransformData / productLimit;

  for (let i = 0; i < pageNumberFilter; i++) {
    pageNumberTransformData.push(i);
  }

  useEffect(() => {
    limitedData &&
      setTransformData(
        priceFilter > 0
          ? limitedData?.filter((item) => item.price! <= priceFilter)
          : limitedData
      );
  }, [limitedData, priceFilter]);

  const handleFilterPrice = (value: number) => {
    setPriceFilter(value);
    const dataFilter = limitedData?.filter((item) => item.price! <= value);

    dataFilter?.length && setTransformData(dataFilter);
  };

  return (
    <>
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
                <Loading />
              </Box>
            ) : error ? (
              <Text variant="primary" color="red">
                Not found data
              </Text>
            ) : (
              <Suspense fallback={<Loading />}>
                <ErrorBoundary>
                  <ProductList data={transformData} />
                </ErrorBoundary>
              </Suspense>
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
  );
};

export default Home;
