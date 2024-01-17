import { memo } from 'react'
import { Flex } from '@chakra-ui/react'

// Types
import { IProduct } from '@/types'

// Components
import ProductCard from '../ProductCard'

interface IProductList {
  data: IProduct[] | undefined
  limit: number
}

const ProductList = ({ data, limit }: IProductList) => {
  return (
    <Flex flexWrap="wrap" gap="5">
      {/* Cart product */}
      {data?.slice(0, limit).map(({ ...props }) => {
        return <ProductCard props={props} />
      })}
    </Flex>
  )
}

export default memo(ProductList)
