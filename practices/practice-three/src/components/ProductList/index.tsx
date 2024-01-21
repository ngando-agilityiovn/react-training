import React, { Suspense, memo } from 'react'
import { Flex, Spinner } from '@chakra-ui/react'

// Types
import { IProduct } from '@/types'

const ProductCard = React.lazy(() => import('@/components/ProductCard'))

interface IProductList {
  data?: IProduct[] | undefined
  productLimit: number
}

const ProductList = ({ data, productLimit }: IProductList) => {
  return (
    <Flex flexWrap="wrap" gap="5">
      {/* Cart product */}
      {data?.slice(0, productLimit).map(({ ...props }) => {
        return (
          <Suspense
            fallback={
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            }
          >
            <ProductCard props={props} />
          </Suspense>
        )
      })}
    </Flex>
  )
}

export default memo(ProductList)
