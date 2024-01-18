import { memo } from 'react'
import { Flex } from '@chakra-ui/react'

// Types
import { IProduct } from '@/types'

// Components
import ProductCard from '../ProductCard'

interface IProductList {
  data: IProduct[] | undefined
  productLimit: number
}

const ProductList = ({ data, productLimit }: IProductList) => {
  return (
    <Flex flexWrap="wrap" gap="5">
      {/* Cart product */}
      {data?.slice(0, productLimit).map(({ ...props }) => {
        return <ProductCard props={props} />
      })}
    </Flex>
  )
}

export default memo(ProductList)
