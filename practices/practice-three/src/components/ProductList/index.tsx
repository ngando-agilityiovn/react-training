import { memo } from 'react'
import { Flex } from '@chakra-ui/react'

// Types
import { IProduct } from '@/types'

// Components
import ProductCard from '../ProductCard'
import { ErrorBoundary } from '../ErrorBoundary'

interface IProductList {
  data?: IProduct[] | undefined
}

const ProductList = ({ data }: IProductList) => {
  return (
    <Flex flexWrap="wrap" gap="5">
      {/* Cart product */}
      {data?.map(({ ...props }) => {
        return (
          <ErrorBoundary>
            <ProductCard key={props.id} props={props} />
          </ErrorBoundary>
        )
      })}
    </Flex>
  )
}

export default memo(ProductList)
