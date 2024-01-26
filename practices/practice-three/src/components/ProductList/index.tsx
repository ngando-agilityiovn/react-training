import { memo } from 'react'
import { Flex } from '@chakra-ui/react'

// Types
import { IProduct } from '@/types'

// Components
import ProductCard from '../ProductCard'
import { ErrorBoundary } from '../ErrorBoundary'

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
          <ErrorBoundary>
            <ProductCard props={props} />
          </ErrorBoundary>
        )
      })}
    </Flex>
  )
}

export default memo(ProductList)
